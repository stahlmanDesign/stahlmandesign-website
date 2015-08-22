#README

**stahlmandesign.com** on the Meteor framework is an experiment taking the regular HTML & Jquery site and reformatting it for Meteor's templating system and routing using iron:router.

--
#A portfolio site for Justin Stahlman

- Work samples
- C.V.
- Links to github, linkedIn, Flickr etc.
- Blog using ghost platform with CNAME modif on stahlmandesign.com to point to ghost-hosted blog but looks like hosted on stahlmandesign.com

Requires on VPS server:
- Node.js
- MonogDB

--
#Node.js
### Installing Node.js v0.12 Debian / Ubuntu repository

- **curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -**
- **sudo apt-get install -y nodejs**

### Check which node processes are running
- **ps aux | grep node** find node processes running. 2nd number is process ID
- **kill -9 PID** kill individual process where PID is replaced with the number

--

#VPS server

- using ngnix ("engine-x") instead of Apache on server
- need to edit ```nginx.conf``` to add proxy_server to point port (ex. :3000) to www.stahlmandesign.com
- **cd /dh/nginx/servers/httpd-ps454920**
- **sudo pico nginx.conf**
- must edit in ssh as sudoer using pico, cannot edit from FTP or in another text program
- in server section add this to redirect root to port 3000:
 
		location / {
			proxy_pass http://www.stahlmandesign.com:3000;
		}

- **sudo service nginx restart**
- server should now serve index.html in **/home/stahlman3/stahlmandesign.com**
- but this will be overridden as soon as meteor app started

# MongoDB
- MongoDB requires starting mongod in one tab
- and then mongo in another tab

# To start Meteor app
- first, kill node processes currently running from last deploy (see above)
- On next line, build path should be outside current folder. Will create tarball *meteor.tar.gz*
- **meteor build** *your-build-path* **--server http://www.stahlmandesign.com**
- upload meteor.tar.gz to */home/stahlmanshell/stahlmandesign.com*
- **ssh stahlmanshell@stahlmandesign.com**
- **cd /home/stahlmanshell/stahlmandesign.com**
- **tar -xzvf meteor.tar.gz** <-- expand tarball which creates folder *bundle*
- If node.js module *forever* is not installed, install it: **sudo npm install forever -g**
- **cd /home/stahlmanshell/stahlmandesign.com/bundle**
- **forever start main.js**
- **cd /home/stahlmanshell/stahlmandesign.com/bundle/programs/server**
- **npm install**
- **cd /home/stahlmanshell/stahlmandesign.com/bundle**
- **env PORT=3000 MONGO_URL=mongodb://localhost:27017/stahlmandesign node main.js**
- may be working at this point. If not, continue
- On next line put real password in place of Lni11
- **export MONGO_URL='mongodb://stahlmanshell:Lni11@www.stahlmandesign.com:3000/test'**
- **export ROOT_URL='http://www.stahlmandesign.com'**
- **cd /home/stahlmanshell/stahlmandesign.com/bundle**
- **node main.js**

#Author

- Justin Stahlman
- @stahlmandesign on github
- @jstahlman on bitbucket