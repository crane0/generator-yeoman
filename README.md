这个项目是用来测试学习 yeoman

项目目录
```
-- package.json
-- generators
    -- app
        index.js
    -- router
        index.js
```
package.json

注意点，name 必须是这种格式 `generator-xxx`，之后全局安装 `yo` 之后，`yo xxx` （**xxx 必须对应上**）才能正确运行。
```
{
  "name": "generator-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {},
  "dependencies": {
    "yeoman-generator": "^4.11.0"
  }
}
```

app/index.js，示例代码如下
```
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
};
```

在该项目根目录下，执行 `npm link`

之后，在任意目录运行 `yo xxx` 之后，会发现 method1 和 method2 执行了。

> 原理是：在 `generator-xxx` 项目中执行 `npm link`后，会将该项目（package.json 中 name 就是该项目名称）创建一个软连接到全局，之后运行 `yo xxx` 时，可以直接在全局中找 `generator-xxx`。

以上，yeoman 跑起来了。

更多的配置[参考](https://yeoman.io/authoring/index.html)，页面右侧链接。