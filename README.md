# AsyncChat

基于 C++17、Boost.Asio、Boost.Beast、WebSocket、Redis、
MySQL 和 Next.js 实现的实时网络聊天室

This repository holds the code for a chat application written in C++.

Read the full docs [here](https://anarthal.github.io/servertech-chat/).

| Build                                                                                              | Docs                                                                                                                                            | Live server                     |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ![Build Status](https://github.com/anarthal/servertech-chat/actions/workflows/build.yml/badge.svg) | [![Build Status](https://github.com/anarthal/servertech-chat/actions/workflows/doc.yml/badge.svg)](https://anarthal.github.io/servertech-chat/) | [Try it!](http://16.171.43.27/) |

## The BoostServerTech project

This is the first of the [BoostServerTech projects](https://docs.google.com/document/d/1ZQrod1crs8EaNLLqSYIRMacwR3Rv0hC5l-gfL-jOp2M),
a collection of projects that showcase how C++ and Boost can be used for server-side code.

## Architecture

The server is based on Boost.Beast, asynchronous (it uses stackful coroutines)
and single-threaded. It requires C++17 to build. It uses Redis and MySQL for
persistence.

The client is web-based and uses Next.js. It communicates with the server
using websockets.

You can read more about the architecture
[in this section of the docs](https://anarthal.github.io/servertech-chat/01-architecture.html).

## Local development

You can quickly run the chat application in localhost by using Docker Compose,
by running in a terminal at the repo root:

```
docker compose up --build
```

Or you can learn about how to set up a traditional development environment
[here](https://anarthal.github.io/servertech-chat/02-local-dev.html).

## Going live in minutes

This project features a CI/CD pipeline that can deploy your code to your server in
minutes. All you need is a Linux server with SSH enabled, or an AWS account to create one.
You can find out more [here](https://anarthal.github.io/servertech-chat/03-fork-modify-deploy.html).

## Want to contribute?

Drop us a message in [the cpplang Slack](https://cpplang.slack.com/archives/C05MLSQGA01)!
Contributors are more than welcome!




## 开源说明

本项目基于
[anarthal/servertech-chat](https://github.com/anarthal/servertech-chat)
进行二次开发，并遵循 Boost Software License。

本人主要完成了项目环境搭建、界面定制、中文化适配、
代码流程梳理、配置调整及功能优化。