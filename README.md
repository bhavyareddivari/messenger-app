This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How the app was created

The app was initially created with fb create-react-app using
### `npx create-react-app my-app`

## To Run the Project

In the project directory, you can run:
### `cd messenger-app`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Adding SASS (CSS Preprocessor)

install the command-line interface for Sass:

### `npm install --save node-sass-chokidar`

To change start and build scripts to include the CSS preprocessor commands:

```
"scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }

```

Now running npm start and npm run build also builds Sass files.

## Folder Structure

Followed this approach to build the folder structure:
https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

After creation, project looks like this:

```
messenger-app/
  README.md
  node_modules/
  package.json
  src/
    components/
      ## all global components goes here
    scenes/
      ## each folder inside this represents a web page
      home/
      chat-window/
    sass/
      ## sass variables/mixins goes here
    services/
      ## api schema/actions goes here
    index.js
```

## Routes
Default Route - http://localhost:3000/ - Homepage
chat-window link - http://localhost:3000/chat-online - renders chat windows
