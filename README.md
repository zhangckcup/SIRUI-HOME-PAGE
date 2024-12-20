
#### 项目说明

SIRUI HOME PAGE

#### 目录结构描述
```
react-umi-app-template
├─ .cz-config.js                             // commitlint配置
├─ .editorconfig                             // 代码格式配置
├─ .env
├─ .eslintrc                                 // eslint配置
├─ .husky                                    // git hook配置
│  ├─ _
│  │  └─ husky.sh
│  ├─ commit-msg
│  └─ pre-commit
├─ .prettierignore
├─ .prettierrc
├─ .umirc.local.ts                           // 开发环境配置文件
├─ .umirc.test.ts                            // 测试环境配置文件
├─ .umirc.ts                                 // 基础环境配置文件
├─ .umirc.uat.ts                             // 生产环境配置文件
├─ README.md
├─ commitlint.config.js                      // commitlint配置文件
├─ mock
├─ package.json                              // 项目中所需的模块以及项目的元数据
├─ src                                       // 项目文件目录
│  ├─ models                                 // 全局状态管理
│  │  └─ mian.js
│  ├─ pages                                  // 页面文件目录
│  │  ├─ Main
│  │  │  └─ index.tsx
│  │  ├─ document.ejs                        // 模板文件
│  │  ├─ index.less
│  │  └─ index.tsx
│  └─ utils                                  // 工具类
│     ├─ api.js                              // 方法封装
│     ├─ errorMessage.js                     // 接口请求错误统一处理
│     ├─ request.js                          // 请求接口封装
│     └─ url.js                              // 接口请求地址文件
├─ tsconfig.json                             // ts配置文件
├─ typings.d.ts                              // 定义类型声明
└─ webpack.config.js                         // webpack配置文件

```

Feature 页文字可通过修改该路径下的配置进行修改：src/pages/Features/features.ts

##### 打包使用说明

本地运行环境命令

```
     本地运行包安装   npm install
     本地运行开发环境 npm run start
     本地运行测试环境 npm run test
```

项目打包命令

```
     测试环境 npm run build:test
     线上环境 npm run build:prod
```

##### commit 规范说明 配置说明

```

 快捷命令： yarn cz 可直接选择commit类型
 也可用git commit -m 'type: subject'的形式进行提交
 type的类型以及对应的说明
    { type: "feat", value: "feat: 一个新的特性" },
    { type: "bugfix", value: "bugfix: 修复一个Bug" },
    { type: "docs", value: "docs: 变更的只有文档" },
    { type: "style", value: "style: 代码风格,格式修复" },
    { type: "refactor", value: "refactor: 代码重构，注意和feat、fix区分开" },
    { type: "perf", value: "perf: 码优化,改善性能" },
    { type: "test", value: "test: 测试" },
    { type: "chore", value: "chore: 变更构建流程或辅助工具" },
    { type: "revert", value: "revert: 代码回退" },
    { type: "init", value: "init: 项目初始化" },
    { type: "build", value: "build: 变更项目构建或外部依赖" },
    { type: "WIP", value: "WIP: 进行中的工作" },
    { type: "merge", value: "merge: 代码合并" },

```
