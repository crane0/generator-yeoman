var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag

    // 在 yo xxx 执行时，定义在 constructor 中的方法不执行。
    this.helperMethod = function () {
      console.log('won\'t be called automatically');
    };


    // 下面2行代码，会强制必须在 yo xxx 命令之后，添加参数，this.options.appname 可以获取改参数
    // this.argument("appname", { type: String, required: true });
    // this.log(this.options.appname)
  }

  // 在 yo xxx 执行时，方法执行的顺序和定义的顺序一致。
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  // 在 yo xxx 执行时，私有方法不执行。
  _private_method() {
    console.log('private hey');
  }

  // 该方法，会在执行 yo xxx 之后，询问并获取结果
  // async prompting() {
  //   const answers = await this.prompt([
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "Your project name",
  //       default: this.appname // Default to current folder name
  //     },
  //     {
  //       type: "confirm",
  //       name: "cool",
  //       message: "Would you like to enable the Cool feature?"
  //     }
  //   ]);

  //   this.log("app name", answers.name);
  //   this.log("cool feature", answers.cool);
  // }

  // 和上面的作用一样
  // async prompting() {
  //   this.answers = await this.prompt([
  //     {
  //       type: "confirm",
  //       name: "cool",
  //       message: "Would you like to enable the Cool feature?"
  //     }
  //   ]);
  // }

  // writing() {
  //   this.log("cool feature", this.answers.cool); // user answer `cool` used
  // }

  // 执行 yo xxx 后，会自动执行该方法，安装 lodash，相当于 npm install lodash --save-dev
  // installingLodash() {
  //   this.npmInstall(['lodash'], { 'save-dev': true });
  // }

  // 执行 yo xxx 后，会自动执行该方法，自定义 package.json 文件，然后执行 npm i
  // writing() {
  //   const pkgJson = {
  //     devDependencies: {
  //       lodash: '^4.17.20'
  //     },
  //     dependencies: {
  //       css: '^3.0.0'
  //     }
  //   };

  //   // Extend or create package.json file in destination path
  //   this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  // }

  // install() {
  //   this.npmInstall();
  // }


  // 在 app/templates/index.html 中，自定义了模板。
  // 执行 yo xxx 后，会生成 public/index.html ，并且<%= title %> 会被替换为 'Templating with Yeoman'
  // 
  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Templating with Yeoman' }
    );
  }
};