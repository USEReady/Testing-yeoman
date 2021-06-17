'use strict';
const Generator = require('yeoman-generator');

const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
   
    const prompts = [
      {
        name: "name",
        message: "Your project name",
        default: "generated-app"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  default() {
    mkdirp(this.props.name);
    this.destinationRoot(this.destinationPath(this.props.name));
  }
  writing() {
    mkdirp('public');
    mkdirp('src');
    mkdirp('SSL');
    mkdirp('SSL/fiscloudservice');
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  //   this.fs.copy(this.templatePath('*'), this.destinationPath());
  // this.fs.copy(this.templatePath('.*'), this.destinationPath());
  this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  this.fs.copy(this.templatePath('public'), this.destinationPath('public'));
//this.fs.copy(this.templatePath('build'), this.destinationPath('build'));
this.fs.copy(this.templatePath('SSL'), this.destinationPath('SSL'));
  this.fs.copyTpl(
    this.templatePath('package.json'),
    this.destinationPath('package.json'),
    this.props // template variables
  );

  }

  install() {
    this.installDependencies({ bower: false });
  }
};
