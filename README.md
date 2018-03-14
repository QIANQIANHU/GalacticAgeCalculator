# Triangle checker WebPage

#### This is a WebPage to check if three sides can be a triangle.

#### By Qianqian Hu 2018/03/13

## Description

This webpage will show some funny words if user input three lengths of sides.

## Setup/Installation Requirements
* run $ git clone https://github.com/QIANQIANHU/triangle-JS in terminal, this project with package.json, in the root directory, run $ npm install

* node file setup instruction

$ brew install node (if node not install)

* Homebrew Installation
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* ensure Homebrew packages are run before the system versions of the same
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

check node version(in your home directory)
$ node -v/$ npm -v (check node version)
$ node hello.js

1. Initializing npm(setup new project)
* create a folder called triangle and navigate to the root directory and run $npm init -y
have package.json files
* Installing an npm Package
$ npm install webpack@4.0.1 --save-dev
$ npm install webpack-cli@2.0.9 --save-dev
now have a new field: devDependencies/have node_modules folder and package-lock.json files
if install the npm package for jQuery
$ npm install jquery --save

2. Creating a .gitignore File
in root path: touch .gitignore
node_modules/
.DS_Store
dist/
run $ npm install
then $ npm run build

3. Webpack dependency graph (recursively manage)
* touch main.js file as entry point(include interface logic) looks like:
import './styles.css';
import $ from 'jquery';
import { pingPong } from './ping-pong';
import { PeanutButter } from './peanut-butter.js'
import { Jelly } from './jelly.js'
import { Bread } from './bread.js'
import '../css/styles.css'
* rewrite in package.json:
"scripts": {
    "build": "webpack"
  },
run $npm run build
3.Configuring Webpack
* touch webpack.config.js in the top level of your project directory, with contents:
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};__(remove the end two underscores)

4. build project other folders and files(bold ones)
* building JavaScripts
triangle/
|_ dist
  |_ index.html
|_ src
  |_ main.js
  |_ triangle.js
|_ package.json
|_ webpack.config.js
add readme.md and update .gitignore file
* building JavaScripts
$ npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev
update webpack.config.js with contents:
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
add coma to output:{
},
touch src/styles.css and add contents
import to src/main.js with
 import './styles.css';
run $ npm run build

* Webpack Plugins
$ npm install html-webpack-plugin@3.0.6 --save-dev
update webpack.config.js on top by adding: const HtmlWebpackPlugin = require('html-webpack-plugin');
update webpack.config.js after output:{},:
  plugins: [
    new HtmlWebpackPlugin({
      title: ‘triangle’,
      template: './src/index.html',
      inject: 'body'
    })
  ],
specify that it should be the index.html file we just moved to the src folder
remove the <script> tag from index.html
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="bundle.js"></script> -->

* clean up
$ npm install clean-webpack-plugin@0.1.18 --save-dev
update webpack.config.js on top by adding:  const CleanWebpackPlugin = require('clean-webpack-plugin');
update webpack.config.js  in plugin:{},first line add:
new CleanWebpackPlugin(['dist']),
run $ npm run build

* Minifying (or "Uglifying") Code
$ npm install uglifyjs-webpack-plugin@1.2.2 --save-dev
update webpack.config.js on top by adding:  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
update webpack.config.js  in plugin:{},first line add:
 new UglifyJsPlugin(),  
run $ npm run build

* Webpack Development Server
$ npm install webpack-dev-server@3.1.0 --save-dev
update webpack.config.js after output:{},:
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
update webpack.config.js  in plugin:{},first line add:
new CleanWebpackPlugin(['dist']),
run $ npm run build
update package.json  in “scripts”{},:
  "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development"
  },
run $ npm run start

* Linting code with ESlint
$ npm install eslint@4.18.2 --save-dev
$ npm install eslint-loader@2.0.0 --save-dev
update webpack.config.js  in module.export:{rules:[]}
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      }
in the root directory touch .eslintrc with contents:
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "env": {
      "browser": true,
      "jquery": true
    },
    "rules": {
        "semi": 1,
        "indent": ["warn", 2],
        "no-console": "warn",
        "no-debugger": "warn"
    }
}
update package.json  in “scripts”{},:
  "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "lint": "eslint src/*.js"
  },*(remove the end*)
$ npm run lint
* Adding Front-End Dependencies
jquery
$ npm install popper.js --save
$ npm install jquery --save
add to src/main.js :
import $ from 'jquery';
bootstrap
$ npm install bootstrap --save
add to src/main.js :
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
* Jasmine and Karma
jasmine
$ npm install jasmine-core@2.99.0 --save-dev
$ npm install jasmine@3.1.0 --save-dev
$ ./node_modules/.bin/jasmine init
update in our package.json
old  
 "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "lint": "eslint src/*.js"
  },*(remove the end*)
new
"scripts": {
  "test": "jasmine"
}
run the command $ npm test
karma
$ npm install karma@2.0.0 --save-dev
$ npm install karma-jasmine@1.1.1 --save-dev
$ npm install karma-chrome-launcher@2.2.0 --save-dev
$ npm install karma-cli@1.0.1 --save-dev
$ npm install karma-webpack@2.0.13 --save-dev
$ npm install karma-jquery@0.2.2 --save-dev
$ npm install karma-jasmine-html-reporter@0.2.2 --save-dev
touch karma.conf.js with contents:
const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack'],
      'spec/*spec.js': ['webpack']
    },
    plugins: [
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
update in our package.json
old  
 "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "lint": "eslint src/*.js"
  },
new
  "scripts": {
    "test": "karma start karma.conf.js"
  },
run $ npm test
update webpack.config.js with contents:
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      }

## Specifications

* The program recognizes if three lengths can form a triangle.
  * Input Example:
  * Output Example:


## Technologies Used

* Node
* Jasmine
* karma
* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap

## Support and contact details

Contact email: huqianqian@ymail.com

### License

Copyright (c) 2018 **qh**
