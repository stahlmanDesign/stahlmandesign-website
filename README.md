#Stahlman Design React web app

**stahlmandesign.com** is a React.js app that is served with a simple node file using Express, on port 3001.


	
# server.js

This node file serves the `build/index.html` file on port 3001

- node must be installed on server
- [Nodemon](https://github.com/remy/nodemon#nodemon) is installed globally
- in `/var/www/html/stahlmandesign.com/` start server using `nodemon server.js`
	- this will run the node app even when the terminal is closed and will attempt to start it again if any code changes

### Server won't start?
May need to kill node processes running from last session, or use nodemon to stop process.

Using kill:
 
	ps -ef | grep node
	kill -9 PID 

Second number is process (PID); kill individual process where PID is replaced with the number

Note: can also use more verbose `ps aux | grep node`

# Nginx proxy

A config file at `/etc/nginx/sites-enabled/stahlmandesign.com` uses a proxy to mask the :3001 and point **stahlmandesign.com** to port 3001

### Modify nginx.conf

To set up server block to point to different ports or paths and to host multiple domains on same server modify nginx.conf

	/etc/nginx/nginx.conf
	
Or in our case because we are hosting multiple sites on the same server

	/etc/nginx/sites-enabled/stahlmandesign.com

- http://nginx.org/en/docs/beginners_guide.html
- https://www.linode.com/docs/websites/nginx/how-to-configure-nginx/


**Changes to Nginx files require restarting the server `nginx -s reload`**


# Upload files
When the React app is built (presumably by `npm run build`, upload `build/` folder to **/var/www/html/stahlmandesign.com**


	ssh root@159.203.16.127
	Password hint : I went to (LNI) in 2007
	cd /var/www/html/stahlmandesign.com


### From the terminal with `scp`
Example: upload index.html from local desktop to server:

	scp /Users/stahlman/Desktop/index.html root@159.203.16.127:/var/www/html/stahlmandesign.com
	
NOTE: this simple example doesn't work with **stahlmandesign.com** because our app is served with node on port 3001, but if the `/etc/nginx/sites-enabled/stahlmandesign.com` file is changed to comment out the line `proxy_pass http://www.stahlmandesign.com:3001;`, it will serve index.html file as per the example above
	

### FTP
FTP is enabled so can use an FTP client to drag and drop files


# MongoDB
**NOTE this is old from a previous configuration using Meteor. Currently Mongo is not used**

If using MonogDB, may need to do this

	export MONGO_URL='mongodb://root:PASSWORD@www.stahlmandesign.com:3000'

If you get **Error: Must pass options.rootUrl or set ROOT_URL in the server environment**, then run previous step again :


	export ROOT_URL='http://www.stahlmandesign.com'
	cd /var/www/html/stahlmandesign.com/bundle/
	node main.js

If not working, then now apply next lines (tell Meteor where is MongoDB)

	cd /var/www/html/stahlmandesign.com/bundle/
	env PORT=3000 MONGO_URL=mongodb://localhost:27017/stahlmandesign node main.js
	

#Author

- Justin Stahlman
- @stahlmandesign on github
- @jstahlman on bitbucket