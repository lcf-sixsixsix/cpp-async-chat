import React from "react";
import Image from "next/image";
import boostLogo from "@/public/boost.jpg";

// The common Header with the Boost logo shown in all pages
const links = [
  {
    text: "GitHub",
    href: "https://github.com/lcf-sixsixsix/cpp-async-chat",
  },
  {
    text: "项目介绍",
    href: "https://github.com/lcf-sixsixsix/cpp-async-chat#readme",
  },
];

export default function Header() {
  return (
    <div className="flex m-3">
      <Image src={boostLogo} height={75} alt="Boost logo"></Image>
      <div className="flex-1 flex justify-end align-middle">
        {links.map(({ text, href }) => (
          <div key={href} className="flex flex-col justify-center pr-12 pl-12">
            
            <a
          className="no-underline text-xl text-gray-800 hover:text-blue-600"
             href={href}
              >
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
