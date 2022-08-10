# Wolfie2D 🐺
A 2D game-engine for creating web-based games..

<img src="https://img.shields.io/github/package-json/v/Test123938/Test2"></img> 
<img src="https://img.shields.io/github/license/Test123938/Test2"></img>
[![CI](https://github.com/Test123938/Test2/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Test123938/Test2/actions/workflows/ci.yml)
<img src="https://img.shields.io/website?url=https%3A%2F%2Ftest123938.github.io%2FTest2"></img>


## Documentation
For more complete documentation on how to use and get setup with Wolfie2D, check out the official Wolfie2D [website](https://wolfieengine.github.io/Wolfie2D-website/). This includes

* A thorough guide to installing and getting started with Wolfie2D (as well as the quickstart guide shown below)
* Complete API documentation of the Wolfie2D source code
* A suite of demo games (coming soon)
* References to the various resources that were used to build the game-engine

## Quickstart
You can download the latest stable release of Wolfie2D from the official Wolfie2D repository located [here](https://github.com/WolfieEngine/Wolfie2D).

Once you unzip the project files and open them in a text editor like Visual Studio Code, install the project dependencies by running `npm install` in the root directory of the project. After running npm install, build the project by running `gulp` in the projects root directory. If you've run gulp successfully, the `dist` folder should contain the files

* `index.html`
* `bundle.js`

From the root direcctory of the project, the files will be located here:
```
.
├── dist
│   ├── builtin
│   ├── demo_assets
│   ├── bundle.js           <-- 
│   └── index.html          <-- 
│
├── gulpfile.js
├── package-lock.json
├── package.json
├── src
└── tsconfig.json
```

Finally, all you have to do is serve the contents of the `dist` folder to the browser. You can do this using web server for chrome or live server or an equivalent. If everything has been done correctly, you should see the default scene for Wolfie2D and be able to move the orange dot around the screen using WASD.
