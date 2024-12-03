---
id: use-psycopg-error-on-mac
slug: use-psycopg-error-on-mac
title: Mac上使用psycopg时报错
date: 2024-10-31
authors: sonny
tags: [mac, postgresql]
keywords: [mac, postgresql]
description: Mac上使用psycopg时报错
---

<!-- truncate -->

## 报错场景
- 环境：我用Mac M1，postgresql安装在docker里

报错信息  
<img src="http://sm7o8ia1r.hn-bkt.clouddn.com/skill/pgsql_import_error.jpg" width="90%"/>

## 检查1：package是否存在虚拟环境
已经安装了psycopg==3.2.3，虚拟环境也能看到包，但是用Django做makemigrations提示找不到包  

包是存在的
<img src="http://sm7o8ia1r.hn-bkt.clouddn.com/skill/pgsql_import_error_check_package.jpg"/>

- 推测：那就可能是无法连接pgsql的原因了
- 搜索：谷歌搜索有人本地安装pgsql后，就正常了，所以怀疑本地没有安装pgsql客户端组建了导致无法调用
- 搜索claude：确实如此，本地安装会包含客户端工具、服务端uz jianuzjian
<img src="http://sm7o8ia1r.hn-bkt.clouddn.com/skill/20241101001053.png" width="70%"/>
  
## 检查2：postgresql必须安装客户端工具

- 安装postgresql  
```bash
brew install postgresql@14
```

- 关闭postgresql服务，看能不能直接连接远程  
```bash
brew services stop postgresql
```

- 测试链接  
```bash
psql -h localhost -p 5432 -U postgres
```
<img src="http://sm7o8ia1r.hn-bkt.clouddn.com/skill/20241101001344.png" width="70%"/>

## 总结
python链接postgresql，除了保证package存在与环境下，还要安装客户端链接工具也要存在本地  