---
slug: deploy-postgreSQL-in-docker
title: Docker中部署PostgreSQL 
date: 2021-09-27
authors: sonny
tags: [docker, postgresql]
keywords: [docker, postgresql]
description: Docker中部署PostgreSQL 
---

<!-- truncate -->

## 1. 创建 Docker Compose 文件
创建一个 docker-compose.yml 文件，内容如下：

```yaml
yaml
复制代码
version: '3'
services:
  postgres:
    image: postgres:latest
    container_name: postgres_container
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123456
      TZ: Asia/Shanghai
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

此配置文件将会启动一个 PostgreSQL 容器，设置用户、密码和数据库，并将数据保存在本地卷 postgres_data 中。

## 2. 启动容器 
在 docker-compose.yml 文件所在的目录中运行以下命令：

```bash
docker-compose up -d
```

该命令会启动 PostgreSQL 容器，并在后台运行。

## 3. 连接 PostgreSQL 数据库
使用以下命令连接到 PostgreSQL 容器中的数据库：

```bash
docker exec -it postgres_container psql -U postgres
```
或者，你可以通过本地机器上的 psql 客户端连接：

```bash
psql -h localhost -p 5432 -U postgres
```

## 4. 停止和移除容器
如果不再需要，可以停止并删除容器：

```bash
docker-compose down
```

这会停止并移除 PostgreSQL 容器，但保留数据卷 postgres_data。