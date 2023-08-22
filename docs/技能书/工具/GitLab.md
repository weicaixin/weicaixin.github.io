# GitLab

https://docs.gitlab.com/ee/install/docker.html

# Runners

docker run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register

修改配置后docker restart