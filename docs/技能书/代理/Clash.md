# Clash

## 准备
获取一个代理提供商提供的配置url。

## Winodws / Mac
下载 [clash for windows](https://github.com/Fndroid/clash_for_windows_pkg) 并安装。

点击侧边栏 `Profiles`，在页面中 `Download` 栏填入代理商url并下载。

在`Profiles`页面中选择下载好的Profile，点击侧边栏 `General`，在页面中开启 `System Proxy` 开关。

## Linux
下载 [clash](https://github.com/Dreamacro/clash) 并解压。

把config文件修改文件名为 `config.yaml` 放到 `~/.config/clash` 下。

前往 `https://github.com/Dreamacro/clash-dashboard/tree/gh-pages` 下载最新的静态Web管理页面，放到`~/.config/clash/ui`下。

在 `config.yaml` 中添加： 
``` yaml
external-controller: ':9090'
external-ui: ./ui`
```

终端执行 `clash`。

在网页中打开 `http://127.0.0.1:9090/ui` 即可看到web管理页面。
> 开启的是对外web服务，查看下当前ip，在其他机器上可以用这个ip访问。

## 开机启动 
见各操作系统开机启动配置。


