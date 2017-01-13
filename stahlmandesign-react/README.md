# Stahlman Design React.js version

## Quick start - dev mode
Updated 12 Jan 2017

**Uses create-react-app** https://github.com/facebookincubator/create-react-app

- `npm install` Install node modules

- `npm start` if prompted, choose Yes to use next available port

- `open http://localhost:3001` (assumes API server running on :3000)


### Dependencies
Install **create-react-app** globally for simplified setup, using Webpack, Babel, ES6, warnings etc.

`npm install -g create-react-app` **<--GLOBAL INSTALL**

`npm install --save-dev --save-exact react-scripts@0.8.5`

Documentation:
- https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html
- https://github.com/facebookincubator/create-react-app/releases
	

## Build mode for deployment

- `npm run build` creates a `build` folder
- upload build folder to website and on local machine: 
- `scp ...localpath/build root@159.203.16.127:/var/www/html/stahlmandesign.com/stahlmandesign-react/`
- ssh to remove server and `forever start server.js`  will start serving built app on port 3000 (defined in server.js)
- to stop `forever stop server.js`  will start serving built app on port 3000 (defined in server.js)

-  NOTE: can also kill node processes running from last deploy if `forever stop` doesn't work or if used another process manager. Second number is process (PID); kill individual process where PID is replaced with the number

		ps aux | grep node
		kill -9 PID
		
---

#Release notes

## v0.5.0 - site rebuilt using React.js

### Client
Changes
- `/nyt` uses local storage to save links but links appear to no longer get around paywall
- Flickr photos wait for description to be fetched before appearing. Not all have descriptions so this should be optimized and skipped if needlessly making API requests

Bug fixes
- Fix some expired iTunes album cover links

Known issues
- Drag and drop may not be consistent across browsers, mobile simulators
- Logout button may show up when already logged out

### Dev
Changes
- uses server.js, a simple Express API to serve React app and redirect react-router pages to index.html so that they are rendered by the app. There are no individual pages in this SPA


## 0.4.0 - website using Meteor.js

## 0.3.0 - Revert to jquery ? 

## v0.2.0 - test using Ember.js. Never deployed

## v0.1.0 - Initial Bootstrap version of site