# jspsych-react-cra

## Overview
* Generates a bundled `jsPsych` and `create-react-app` distributable file in `./dist`, as described [here](https://stackoverflow.com/questions/60604886/bundle-react-app-created-with-npx-create-react-app-to-js-file-using-webpack).
* Bootstrapped using [npx create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
* Source `jsPsych` code forked from [jspsych-react](https://github.com/openexp/jspsych-react).
* The package is pointing to a [forked, "modular" version of jspsych (v6.1 ??)](https://github.com/makebrainwaves/jspsych/tree/modular) that has some minor modifications implemented by the _makebrainwaves_ developers. It may be possible to update this to a [modular version of jsPsych currently in development](https://github.com/jspsych/jsPsych/tree/modularization-extensions).

## Getting started
1. Install with `npm install`
2. Add packages with `npm i -D webpack-cli uglifyjs-webpack-plugin`
3. Add package with `npm install -D babel-loader@8.1.0`
4. Build and bundle with `npm run build`

## Notes
* To avoid conflicts with `react-scripts`, `package.json` should NOT contain `webpack-cli`, `uglifyjs-webpack-plugin`, or `babel-loader` in the `devDependencies` until AFTER other packages have already been installed by step 1 above. If running into issues, delete all `package-lock.json`, `yarn.lock`, `node_modules` and follow steps 1-4 exactly in that order.
* Related `babel-loader` troubleshooting found [here](https://github.com/storybookjs/storybook/issues/5183).

## To-do
* If it's desired to make repo private, must provide private key in the `package.json` (see [here](https://stackoverflow.com/questions/28728665/how-to-use-private-github-repo-as-npm-dependency)).
