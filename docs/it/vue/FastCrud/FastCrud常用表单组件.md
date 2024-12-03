---
id: fast-crud-form
slug: fast-crud-form
title: FastCrud常用表单组件
date: 2024-11-10
authors: sonny
tags: [FastCrud]
keywords: [FastCrud]
---

<!-- truncate -->

## 富文本框

在fast-crud中使用element-plus的富文本编辑器可以通过引入el-input中的 textarea 或通过其他富文本组件插件来实现。由于element-plus没有内置富文本编辑器，可以引入基于element-plus兼容的wangEditor或其他富文本组件。以下是配置示例：

```javascript
export default {
  crudOptions: {
    columns: {
      content: {
        title: '内容',
        type: 'text',
        form: {
          component: {
            name: 'el-input',
            props: {
              type: 'textarea',
              rows: 5,
              placeholder: '请输入内容'
            }
          }
        }
      }
    }
  }
}
```

## 输入框只接受大于0的数值

在 fast-crud 中，你可以通过在 type: 'number' 的配置项上添加输入校验规则，让输入框只接受大于 0 的数值。可以通过form.rules来配置校验规则，确保数值必须大于 0。

```javascript
export default {
  crudOptions: {
    columns: {
      amount: {
        title: '数量',
        type: 'number',
        form: {
          component: {
            name: 'el-input-number',
            props: {
              min: 1 // 设置最小值为1，确保输入值大于0
            }
          },
          rules: [
            { required: true, message: '请输入数量', trigger: 'blur' },
            { type: 'number', min: 1, message: '数量必须大于 0', trigger: 'blur' }
          ]
        }
      }
    }
  }
}
```

说明: 
- component.props.min: 1：将 el-input-number 组件的最小值设置为 1，从而限制输入的最小值为 1。
- rules: 通过添加校验规则确保输入的值是必填的且大于 0。