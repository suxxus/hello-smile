# Hello Smile

***Mini app. Example using stateless components with React*** 
(reusable components)

* Standard ES6 modules using Babel + browserify
* React > 0.14
* Redux
* CSS - Modules
* Unit test with tape, ezyme, sinon
* Storybook

## Clone the repo & install:
```
Clone the project: https://github.com/suxxus/hello-smile.git
cd  ./hello-smile
npm install 
```
## Scripts:
The `package.json` file comes with the following scripts

`npm run <name of script>`

* `start` launch a dev server providing the app at build  (http://localhost:3000) serve alt ./build and start watching for changes at ./src/* files 
* `dist` generates a distribution version, placed at ./dist
* `dev` runs a dev console that reports lint and unit tests and start watching for changes at ./src/**/ *.js files. 
* `test` run provided unit test
* `storybook` launch a server at port 9005
* `check` check outdated npm modules
* `update` update  outdated npm modules

## ToolBox:
used for implementation
* React
* Redux (to organize the application code)
* Browserify (bundling)
* Css-modulesify (A browserify plugin to load CSS - modules)
* Literalify a browserify transform for replacing require calls with arbitrary code
* Eslint (to ensure consistency in code)
* Tape (unit testing)
* Sinon (test spies)
* Enzyme (Test assertion helpers for use with React's shallowRender test utils)
* Babel (ES6 transpiler)
* Ramdajs (practical functional library)
* Jade (html templating)
* Sass
* Browsersync (synchronised browser testing)
* Storybook  (develop and design React UI components without running the app)


## Demo:
[smile app](http://suxxus.github.io) 

## Useful links:
* [React Pure Component Starter](https://github.com/ericelliott/react-pure-component-starter)
* [Functional Stateless Components in React 0.14](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.5ivkypjke)
* [React Storybook](https://github.com/kadirahq/react-storybook)

