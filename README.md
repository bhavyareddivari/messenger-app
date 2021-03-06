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

## server
using socket.io (npm module) to enable one-on-one communication

using the sample server api available online:
https://github.com/paul-pagnan/simple-chat-api

Start the API by running:

```
npm install

npm run compile

npm start

```
Make sure server is be running on http://localhost:4008 to enable socket.io one-one communication

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Folder Structure

Followed this approach to build the folder structure:

https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

Followed the below approach to write CSS classnames with mobile-first approach

https://css-tricks.com/bem-101/

After creation, project looks like this:

```
messenger-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
  config/
    ## where server setup goes in
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
