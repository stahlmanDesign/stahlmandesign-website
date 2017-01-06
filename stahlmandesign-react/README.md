# JITbase client

## Quick start
Updated 7 nov 2016

- `npm install` Install node modules

- `npm start` if prompted, choose Yes to use next available port

- `open http://localhost:3001` (assumes API server running on :3000)

**Requires Loopback API running on port :3000 before you start client dev server** 
- https://justinstahlman@bitbucket.org/jitbase/jitbase-server.git

**Requires Images API also running to upload / view uploaded images** 
- https://justinstahlman@bitbucket.org/jitbase/web-app.git



### Dependencies
Install **create-react-app** globally for simplified setup, using Webpack, Babel, ES6, warnings etc.

`npm install -g create-react-app@0.6.0` **<--GLOBAL INSTALL**

`npm install --save-dev --save-exact react-scripts@0.7.0`

Documentation:
- https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html
- https://github.com/facebookincubator/create-react-app/releases
	

---

## Secure server
The API uses a self-signed certificate to encrypt data over the internet.  Most browsers present a security warning for unverified certificates.
When you attempt to login to http://company.jitbase.com, the API will return  the error `ERR_INSECURE_RESPONSE`

### Work-around
- Navigate to the API explorer page `https://company.jitbase.com:3000/explorer`
- Click on the `ADVANCED` button
- Click on the `Proceed to company.jitbase.com (unsafe)` button (Chrome)

This will add the self-signed certificate to your certificates list and allow you to trust the web site.  The login page at `company.jitbase.com` will now function normally


---

#Release notes

## 0.2.0

### Client
Changes
- Drag and drop steps and instructions to change order
- View a work instruction (print preview)
- Print work instruction
- Tags support for Departments
- Add details about procedure
- Delete work instruction
- View deleted work instructions
- Publish work instruction
- Error feedback when login fails
- Confusing sidebar menu "close" icon changed

Bug fixes
- Remove extra space between remove button and instruction text
- Show "add instruction" button unless last item empty
- Duplicate "Create Work Instruction" buttons changed to "New" and "Save"

Known issues
- Drag and drop may not be consistent across browsers, mobile simulators
- Logout button may show up when already logged out

### Dev
Changes
- Allow multiple images per step
- Remove warning about sub domain on login fail
- Hide "click to edit" text on view WI
- Hide UI editing buttons when viewing WI
- Hide image upload when viewing WI
- Better mobile design
- Remove company name under logo
- Close sidebar when printing

Bug fixes
- Make "add step" button more visible, centered
- Sidebar menu starts open, except on mobile
- Use placeholder name when old WI doesn't have author object
- Repair old WI with image outside images array when saving under edit

## 0.1.0

### Client
- Create and edit work instruction
- Create steps and instructions
- Drag and drop image into a step
- Change width of columns for steps, instructions and images

### Dev
- Add Google Analytics
- Login session saved in local storage
- Use create-react-app 0.4.0, react-scripts 0.4.1
- Basic mobile support
- Limit to 50 characters in input fields
- Remove tags support