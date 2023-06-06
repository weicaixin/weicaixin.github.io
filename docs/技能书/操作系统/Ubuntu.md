# Ubuntu

## 命令

```sh
$ lsb_release -a  # 查看版本
$ ifconfig        # 查看ip地址，需要安装nettools
$ route -n        # 查看网关
```

## 开机启动

以httpd为例，创建`/etc/systemd/system/httpd.service`

``` ini
[Unit]
Description=httpd daemon

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/httpd
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

# 软件安装

```sh
$ sudo apt install <软件名>  # 安装软件
$ sudo apt remove <软件名>   # 卸载软件 
```

