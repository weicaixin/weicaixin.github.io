# Clash

# Winodws和Mac
**安装：**  
前往 https://github.com/Fndroid/clash_for_windows_pkg 下载 `Clash for Windows` 安装包。  
双击安装 `Clash for Windows`   

**配置：**   
获取一个代理提供商提供的配置URL。  
点击侧边栏 `Profiles`，在页面中 `Download` 栏填入URL并下载。  
选择下载好的Profile后，点击侧边栏 `General`，在页面中开启 `System Proxy` 开关。

## Linux
**安装：**  
前往 `https://github.com/Dreamacro/clash` 下载最新版Clash。  
把 `Clash for Windows` 中下载好的config文件修改文件名为 `config.yaml` 放到 `~/.config/clash` 下。  
终端执行 `clash`。  

**Web 管理：**  
前往 `https://github.com/Dreamacro/clash-dashboard/tree/gh-pages` 下载最新的静态Web管理页面，放到`~/.config/clash/ui`下。  
在 `config.yaml` 中添加： 
``` yaml
external-controller: ':9090'
external-ui: ./ui`
```
在网页中打开 `http://127.0.0.1:9090/ui` 即可看到web管理页面。
> 开启的是对外web服务，使用目标ip地址可以在其他机器上访问。

**开机启动：**  
创建 `/etc/systemd/system/clash.service` 写入
``` ini
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/clash -d /etc/clash
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartPreventExitStatus=255
Type=notify

[Install]
WantedBy=multi-user.target
```

终端执行：
``` shell
systemctl daemon-reload  # 重新加载 systemd
systemctl enable clash   # 把clash加入开机启动
systemctl start clash    # 当前立即启动clash
systemctl status clash   # 查看clash运行情况
journalctl -xe           # 打印clash日志
```

