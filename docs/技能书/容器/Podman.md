# Podman
Podman是一个单机容器运行管理工具。等同于docker，和docker命令一样，但是不需要root权限（sudo）执行。

> 文章已不更新，实在是难用，放弃了。   

## 安装
### Ubuntu
`sudo apt install podman`  

想用最新版本参考[Podman文档](https://podman.io/getting-started/installation)配置源获取。

### Windows
Podman在Windows上是借助WSL2虚拟机来运行的，需要先安装配置WSL2。Podman初始化时会自己拉取一个Fedora发行版创建虚拟机。

安装Podman Desktop： `winget install RedHat.Podman-Desktop -s winget`
Podman Desktop的具体使用方式，打开就知道了，设计的很简洁。

> 不能科学上网也可以去 [Podman Desktop主页](https://podman-desktop.io) 下载安装包安装。

## 镜像
镜像是一个运行环境的包，包括运行一个应用程序所需的一切。这个镜像告知容器应该如何实例化，决定哪些软件组件将运行以及如何运行。  

登录：`podman login <网址> --username=<用户名>`     *从私有空间拉取推送镜像需登录*
拉镜像： `podman pull docker.io/library/ubuntu` 
推送：`podman push <镜像名>`    *需要先到目标网站先建立仓库*
列出镜像：`podman images` 
删除镜像：`podman rmi <镜像ID>` 
删除全部镜像：`podman rmi $(podman images -q)`
构建镜像：`podman build -t <imageName> -f <Containerfile>`

Containerfile（文本文件）：

```可以去 https://hub.docker.com 搜寻镜像dockerfile
FROM docker.io/dreamacro/clash    # 以一个镜像为基础构建
COPY /clash /root/.config/clash/  # 构建过程中执行拷贝动作
```

> 可以去 https://hub.docker.com 搜寻镜像
> 镜像只能从描述文件构建，不能直接修改已有的镜像。
> 更换镜像源（已废弃），国内源当前已基本不可用。没有梯子可以从腾讯云上面拉镜像，但是不是最新的。

## 容器

容器是一个依助镜像创建的进程，进程里的程序运行在镜像提供的虚拟运行环境中。 

启动容器：`podman run --name <容器名> -p <容器端口:主机端口> -v <容器路径:主机路径> -dt <仓库名/镜像ID>`    *-d 后台运行, -t 带tty,  -p -v 可以有多个*
只创建不启动：`podman create`
列出容器：`podman ps -a`
进入容器：`podman exec -it <容器ID> /bin/bash`    *进入后用exit命令退出容器*
删除容器：`podman rm <容器ID>` 
删除全部容器：`podman rm $(podman ps -aq)`
关闭容器： `podman stop <容器ID>` 
关闭全部容器：`podman stop $(podman ps -aq)`  

**开机启动**

```shell
cd ~/.config/systemd/user
podman generate systemd --new -f --name <容器名> 	# 创建配置
systemctl --user enable --now container-<容器名>.service # 启动服务
```

