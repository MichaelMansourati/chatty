# Chatty

Chatty is a real time web messaging application built with React and assembled with Babel and Webpack

## Installation

* install all dependencies in the root and chatty-server directory using `npm install`
* run `chatty-server` with `node server.js` in the command line. It will be served at [http://localhost:3001/](http://localhost:3001/)
* run the dev server from the root directory with `npm start`. It willl be served at [http://localhost:3000/](http://localhost:3000/)
* Go to [http://localhost:3000/](http://localhost:3000/) in your browser.

## Preview

[Chatty preview](./build/docs/chatty.png)


## Dependencies

### App

* babel-core"
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* eslint
* eslint-plugin-react
* node-sass
* sass-loader
* sockjs-client
* style-loader
* webpack
* webpack-dev-server
* ws

### Server
* express
* uuid
* ws