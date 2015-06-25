#README

**stahlmandesign.com** on the Meteor framework is an experiment taking the regular HTML & Jquery site and reformatting it for Meteor's templating system and routing using iron:router.

#A portfolio site for Justin Stahlman

- Work samples
- C.V.
- Links to github, linkedIn, Flickr etc.
- Blog using ghost platform with CNAME modif on stahlmandesign.com to point to ghost-hosted blog but looks like hosted on stahlmandesign.com

Requires on VPS server:
- Node.js
- MonogDB

#VPS server

- using ngnix ("engine-x") instead of Apache on server
- nginx.conf is found in /dh/nginx/servers/httpd-ps439607
- must edit in ssh using sudo pico nginx.conf
- then sudo service nginx restart

# MongoDB
- MongoDB requires starting mongod in one tab
- and then mongo in another tab

# To start Meteor app
- meteor build myoutputfolder
- last command may require --server and some other things <--- not complete but this creates tarball
- upload meteor.tar.gz to /home/stahlman3/stahlmandesign.com
- tar -xzvf meteor.tar.gz <-- expand tarball which creates folder bundle
- make sure forever is installed: sudo npm install forever -g
- forever start bundle/main.js
- cd programs/server
- npm install
- [ps439607]$ export MONGO_URL='mongodb://stahlman3:<PWD>@www.stahlmandesign.com:3000/test'
- [ps439607]$ export ROOT_URL='http://www.stahlmandesign.com'
- cd into /home/stahlman3/stahlmandesign.com/bundle
- [ps439607]$ node main.js

#Author

- Justin Stahlman
- @stahlmandesign on github
- @jstahlman on bitbucket