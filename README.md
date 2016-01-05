#README

**stahlmandesign.com** on the Meteor framework is an experiment taking the regular HTML & JQuery site and reformatting it for Meteor's built-in Blaze templating system and routing using iron:router.

--
#A portfolio site for Justin Stahlman

- Work samples
- C.V.
- Links to github, LinkedIn, Flickr etc.
- Blog using Ghost platform with stahlmandesign.com CNAME 'blog' pointing to 'stahlmandesign.ghost.io' where Ghost Pro (their hosting) blog resides.

###Meteor requires:
- Node.js ** 0.10.x only** for Meteor as of Dec. 2 2015
- MonogDB

--


#VPS server

Create droplet: https://cloud.digitalocean.com/ (See README-2)

Install Node.js and MongoDB (See README-2)

Using Ngnix ("engine-x") instead of Apache for webserver

Need to edit ```nginx.conf``` to add proxy_server 
 
	location / {
		proxy_pass http://www.stahlmandesign.com:3000;
	}

**If hosting multiple domains on server (as I am), add proxy_pass in /etc/nginx/sites-available/stahlmandesign.com**

For config changes to take effect:

	nginx -s reload
	

Server should now serve index.html at **/var/www/html/stahlmandesign.com**, but we will change this to point to port 3000 instead to run Meteor app.

# MongoDB
MongoDB requires starting mongod in one tab, and then mongo in another tab

	mongod

(in other tab)


	mongo
	
# Meteor app
First, kill node processes running from last deploy. Second number is process (PID); kill individual process where PID is replaced with the number
 
	ps aux | grep node
	kill -9 PID 

Create tarball *meteor.tar.gz* on local machine

	meteor build your-build-path --server http://www.stahlmandesign.com

Upload meteor.tar.gz to **/var/www/html/stahlmandesign.com**


	ssh root@159.203.16.127
	cd /var/www/html/stahlmandesign.com
	
Expand tarball which creates folder *bundle*

	tar -xzvf meteor.tar.gz

If node.js module *forever* is not installed, install it


	npm install forever -g
	cd /var/www/html/stahlmandesign.com/bundle
	forever start main.js
	cd /var/www/html/stahlmandesign.com/bundle/programs/server
	npm install
	cd /var/www/html/stahlmandesign.com/bundle/
	env PORT=3000 MONGO_URL=mongodb://localhost:27017/stahlmandesign node main.js

	
May be working at this point. If not, continue (replace PASSWORD with your password)


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