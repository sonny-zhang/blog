---
id: django-orm-ForeignKey-on_delete
slug: django-orm-ForeignKey-on_delete
title: DjangoORM外键ForeignKey中的on_delete的参数
date: 2024-11-10
authors: sonny
tags: [django]
keywords: [django]
---

<!-- truncate -->


## 案例: 1对多

以两个模型类为例，一个是老师类，一个是学生类，学生类通过外键关联老师类，实现一(老师)对多(学生)的关联。  

```python
class Teachers(models.Model):
    name = models.CharField(max_length=8)

class Students(models.Model):
    name = models.CharField(max_length=8)
    teacher = models.ForeignKey(Teachers, on_delete=models.CASCADE)
```

## on_delete有6个可选值

- **CASCADE**      删除级联，当父表的记录删除时，子表中与其相关联的记录也会删除。即：当一个老师被删除时，关联该老师的学生也会被删除。
- **PROTECT**      子表记录所关联的父表记录被删除时，会报ProtectedError异常。即：当一个学生所关联的老师被删除时，会报ProtectedError异常。
- **SET_NULL**      子表记录所关联的父表记录被删除时，将子表记录中的关联字段设为NULL，注意：需要允许数据表的该字段为NULL。
- **SET_DEFAULT**      子表记录所关联的父表记录被删除时，将子表记录中的关联字段设为一个给定的默认值。
- **DO_NOTHING**      子表记录所关联的父表记录被删除时，什么也不做。
- **SET**      设置为一个传递给SET()的值或者一个回调函数的返回值，该参数用得相对较少。