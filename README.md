# omnipotent-cli

万能项目初始化工具，需要手动指定个人模板仓库。

## 安装
> npm install omnipotent-cli -g

## 命令
- 新增模板
````
> omni-cli --add

> please input template name: node-ts
> please input github project repository: Lskkkk/node-ts-template
````
- 根据模板在当前目录下创建项目
````
> omni-cli --new // 

> please input template name: node-ts
> please input project name: node-demo
......downloading......
finished!!!
````
- 获取提示
````
> omni-cli --help

> Options:
  -V, --version  output the version number
  -a, --add      add new template
  -n, --new      new project by template
  -h, --help     output usage information
````

## Todo
- npm install
- omni-cli --delete  
