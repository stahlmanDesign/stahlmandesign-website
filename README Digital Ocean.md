#Configure Digital Ocean VPS droplet

Create droplet: https://cloud.digitalocean.com/

Choose Ubuntu 14.04.3 LTS https://wiki.ubuntu.com/LTS

Change root password, use SSH keys if applicable etc.

If rebuilding a Droplet, will need to remove ssh key for the IP address of droplet that resides on your local machine by opening Users/username/.ssh/known_hosts

###Install Nginx

https://www.nginx.com/resources/wiki/start/topics/tutorials/install/

   
	sudo -s
	nginx=stable # use nginx=development for latest development version
	add-apt-repository ppa:nginx/$nginx
	apt-get update
	apt-get install nginx
	

Default area for html files is at 

	/var/www/html/


Upload HTML "Hello World" file into data/www/

Example: upload **index.html** from local desktop to server:

	scp /Users/stahlman/Desktop/index.html root@159.203.16.127:data/www
	

### Modify nginx.conf

To set up server block to point to different ports or paths and to host multiple domains on same server modify nginx.conf using vim

	/etc/nginx/nginx.conf

- http://nginx.org/en/docs/beginners_guide.html
- https://www.linode.com/docs/websites/nginx/how-to-configure-nginx/

###To host multiple domain names (tested!):

NOTE: the above commands for modifying nginx.conf as per the beginners guide need to be deactivated for this to work.

- http://www.liberiangeek.net/2015/07/how-to-run-multiple-websites-using-nginx-webserver-on-ubuntu-15-04/

Start by making backup in case you screw up server

	cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
	
###Point domain name(s) to IP address

Go to where domain name is registered (dreamhost, enom etc.) and point nameservers to:

	ns1.digitalocean.com
	ns2.digitalocean.com
	ns3.digitalocean.com
	
Then configure IP in Digital Ocean Networking control panel:

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean

###Install MongoDB

Make sure to install for Ubuntu 14.04 (because that is what we install at the beginning of this README)

https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

###Install Node.js / NPM

http://howtonode.org/how-to-install-nodejs