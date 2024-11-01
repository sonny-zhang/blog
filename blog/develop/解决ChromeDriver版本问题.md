---
slug: solve-problem-of-chrome_driver_verson
title: 解决ChromDriver版本问题
date: 2021-09-27
authors: sonny
tags: [http]
keywords: [http]
description: 解决ChromDriver版本问题
---

<!-- truncate -->

版本 |  更新时间 |  更新内容
| --- | --- | --- |
V1.0 |  2018-08-29 |  first commit
V2.0 |  2021-09-27 |  使用第三方包webdriver_manager替代V1.0的方法

## V1.0版本

### 一、安装Chrome
我安装好Centos系统后，就在网上去找Chrome浏览器的安装方法，使用过yum，rpm都安装不上，会报错，然后询问公司的运维，他给我了个包，然后使用：yum localinstall 包名

就安装成功了，安装的路径默认是/opt/google/chrome/  

yum localinstall  安装rpm会自动的安装依赖，不需要单独的安装依赖

 下面有对应的版本可用，亲测了：

Chrome版本：68.0.3440.106

Chromedriver版本：2.41

下载地址：https://pan.baidu.com/s/1S8YBVQpOhzaceF9NsixU7A

### 二、下载Chromedriver

所有版本下载地址：http://chromedriver.storage.googleapis.com/index.html

### 三、使用Chromedriver

借鉴地址：https://blog.csdn.net/blueheart20/article/details/81566903

我用的是python的selenium框架来使用Chromedriver。

直接driver.Chrome()是会报错： Chrome failed to start: exited abnormally，需要使用带参数的启动方法：

```ssh
1 chrome_options = webdriver.ChromeOptions()
2 chrome_options.add_argument('--headless')
3 chrome_options.add_argument('--no-sandbox')
4 chrome_options.add_argument('--disable-gpu')
5 chrome_options.add_argument('--disable-dev-shm-usage')
```
加上之后就运行成功了

备注

一、解决 Requires: libc.so.6(GLIBC_2.14)(64bit)：  
https://blog.csdn.net/zhou_shaowei/article/details/76066934  
https://blog.csdn.net/clirus/article/details/62425498  
https://blog.csdn.net/changcsw/article/details/79761620  

二、Chrome对应的driver版本

三、运行chromedriver报错  
报错：[1570616532.097][SEVERE]: bind() returned an error, errno=99: Cannot assign requested address (99)

解决方法：运行时，添加参数：--whitelisted-ips  就不会有这个错误

```
[root@sonny ]# chromedriver --whitelisted-ips
```
参考：https://stackoverflow.com/questions/55844788/how-to-fix-severe-bind-failed-cannot-assign-requested-address-99-while

## V2.0版本：该版本替换了V1.0，更加简单

### 一、安装 webdriver_manager

使用pip安装
```pip install webdriver_manager```

或者 使用poetry安装
```poetry add webdriver_manager```

### 二、使用

```python3
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

#会自动根据Chrome版本下载对应的ChromeDriver
driver = webdriver.Chrome(ChromeDriverManager().install()) 

driver.get("https://www.cnblogs.com/1fengchen1")

print(f"title: {driver.title}")
```
　　