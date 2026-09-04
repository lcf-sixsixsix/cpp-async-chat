import Head from "@/components/Head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { Button, Link, FormHelperText } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useLoading, { DontClearLoading } from "@/hooks/useLoading";
import { login } from "@/lib/api";
import { ErrorId } from "@/lib/apiTypes";
import { useRouter } from "next/router";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import FormCard from "@/components/FormCard";
import { hasAuth, setHasAuth } from "@/lib/hasAuth";

type Inputs = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onTouched" });

  const { loading, launch } = useLoading();
  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (inputs) => {
      await launch(async () => {
        try {
          const { type } = await login(inputs);
          switch (type) {
            case "ok":
              setHasAuth();
              router.push("/chat");
              return DontClearLoading;
            case ErrorId.LoginFailed:
              setError("root", {
                type: "value",
                message: "邮箱或密码错误。",
              });
              break;
          }
        } catch (err) {
          setError("root", {
            type: "value",
            message: "登录失败，请稍后重试。",
          });
        }
      });
    },
    [router, launch, setError],
  );

  return (
    <>
      <Head />

      <div className="flex flex-col">
        <Header />
        <div
          className={`${styles.bodycontainer} p-12 flex flex-col justify-center`}
        >
          <div className="flex justify-center">
            <FormCard title="欢迎登录 AsyncChat">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-1 flex flex-col"
              >
                <EmailInput
                  register={register}
                  name="email"
                  errorMessage={errors?.email?.message}
                  className="flex-1 pb-2"
                />
                <PasswordInput
                  register={register}
                  name="password"
                  errorMessage={errors?.password?.message}
                  className="flex-1 pb-2 "
                />
                {errors.root && (
                  <FormHelperText error>{errors.root.message}</FormHelperText>
                )}
                <div className="pt-8 flex justify-center">
                  <Button variant="contained" type="submit" disabled={loading}>
                  {loading ? "正在登录..." : "登录账号"}
                  </Button>
                </div>
                <div className="pt-8 flex justify-center">
                  <p className="p-0 m-0 text-sm">
                  还没有账号？{" "}
                  <Link href="/">立即注册</Link>
                  </p>
                </div>
              </form>
            </FormCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasAuth()) {
      router.replace("/chat");
    } else {
      setLoading(false);
    }
  }, [router, setLoading]);

  if (loading) return <></>;

  return <LoginScreen />;
}
