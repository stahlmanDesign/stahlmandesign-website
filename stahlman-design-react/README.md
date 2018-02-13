# Stahlman Design React.js version

## Quick start - dev mode
Updated 13 Feb 2018

**Uses create-react-app** https://github.com/facebookincubator/create-react-app

- `npm install` Install node modules

- `npm start` if prompted, choose Yes to use next available port

- `open http://localhost:3001` or next available port

## Build mode for deployment

- `npm run build` creates a `build` folder
- upload build folder to website from local terminal by typing: 
- `scp -r <...localpath/build> root@159.203.16.127:/var/www/html/stahlmandesign.com/stahlmandesign-react/`
	- https://unix.stackexchange.com/questions/52634/error-using-scp-not-a-regular-file#93410
- ssh to remove server and `forever start server.js`  will start serving built app on port 3000 (defined in server.js)
- to stop `forever stop server.js`  will start serving built app on port 3000 (defined in server.js)

-  NOTE: can also kill node processes running from last deploy if `forever stop` doesn't work or if used another process manager. Second number is process (PID); kill individual process where PID is replaced with the number

		ps aux | grep node
		kill -9 PID
		
---

#Release notes
## v0.6.0 - site rebuilt again
- using React.js with site-wide localisation possible
- Lazy load is no longer used as it was not working and was not able to fix it


## v0.5.0 - site rebuilt
- using React.js

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