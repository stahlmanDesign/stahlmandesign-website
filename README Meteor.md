#README

**stahlmandesign.com** on the Meteor framework is an experiment taking the regular HTML & JQuery site and reformatting it for Meteor's built-in Blaze templating system and routing using iron:router.

--
	
# Meteor app
First, kill node processes running from last deploy. Second number is process (PID); kill individual process where PID is replaced with the number
 
	ps aux | grep node
	kill -9 PID 

Create tarball *meteor.tar.gz* on local machine

	meteor build your-build-path --server http://www.stahlmandesign.com

Upload meteor.tar.gz to **/var/www/html/stahlmandesign.com**


	ssh root@159.203.16.127
	Password hint : I went to (LNI) in 2007
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
	
##If error about node fibers

- http://stackoverflow.com/questions/13327088/meteor-bundle-fails-because-fibers-node-is-missing

```
cd bundle/server
npm uninstall fibers
npm install fibers
$ cd ../../ (to /bundle)
PORT=3000 MONGO_URL=mongodb://localhost:27017/stahlmandesign
node main.js
```


#Author

- Justin Stahlman
- @stahlmandesign on github
- @jstahlman on bitbucket