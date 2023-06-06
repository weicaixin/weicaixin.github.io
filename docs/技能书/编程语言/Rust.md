# Rust

- 没有比较标准可靠的动态加载系统。
- 依赖C Runtime，也就带着CRT的兼容性毛病。可以用musl，但是编译动态库不起作用。
- 不支持反射。
- 编译速度慢。
## 基本语法

## 安装

**Ubuntu**
安装rustup： `curl https://sh.rustup.rs -sSf | sh`
重启终端或配置环境：`source "$HOME/.cargo/env"`
查看版本：`rustc -V`

## 交叉编译
列出目标：`rustc --print target-list`
下载目标：`rustup target add x86_64-unknown-linux-musl`

## Cargo
创建主程序项目：`cargo new <项目名>`
创建库项目：`cargo new <项目名> --lib`

动态库：
在 Cargo.toml 中配置
``` Toml
[lib]
name = "foobar"
crate-type = ["dylib"]
```