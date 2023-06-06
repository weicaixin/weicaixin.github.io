# 终端代理配置

## Linux
``` shell
export https_proxy=http://127.0.0.1:7890 
export http_proxy=http://127.0.0.1:7890 
export ftp_proxy=http://127.0.0.1:7890 
export all_proxy=socks5://127.0.0.1:7891
```

``` shell
export https_proxy= 
export http_proxy= 
export ftp_proxy=
export all_proxy=
export no_proxy=
```

## Windows
``` shell
$Env:http_proxy="http://127.0.0.1:7890"
$Env:https_proxy="http://127.0.0.1:7890"
``` 