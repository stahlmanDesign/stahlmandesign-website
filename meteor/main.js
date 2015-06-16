/*
// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}
*/
// simple-todos.js
/*
Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
	// This code only runs on the client
	Template.body.helpers({
		tasks: function() {
			// Show newest tasks first
			return Tasks.find({}, {
				sort: {
					createdAt: -1
				}
			});
		}
	});
	Template.body.events({
		"submit .new-task": function(event) {
			// This function is called when the new task form is submitted
			var text = event.target.text.value;
			Tasks.insert({
				text: text,
				createdAt: new Date() // current time
			});
			// Clear form
			event.target.text.value = "";
			// Prevent default form submit
			return false;
		}
	});
	Template.task.events({
		"click .toggle-checked": function() {
			// Set the checked property to the opposite of its current value
			Tasks.update(this._id, {
				$set: {
					checked: !this.checked
				}
			});
		},
		"click .delete": function() {
			Tasks.remove(this._id);
		}
	});
}
*/
Router.route('/', function() {
	// render the Home template with a custom data context
	this.render('home', {
		data: {
			link: 'The Dreamsong',
			description: ' is a retro-style game, and requires a keyboard (not optimized for touch screens)'
		}
	});
});
// when you navigate to "/one" automatically render the template named "One".
Router.route('/infographics');
Router.route('/newsgraphics', function() {
	this.render('newsgraphics', {
		data: {
			title: 'newsgraphics'
		}
	});
	$("#newsgraphics").addClass('active'); // #en5minutes = active
});
Router.route('/en5minutes/1',function(){
	this.render('en5minutes', {
		data: {
			years: '2005-2008',
			description: 'The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in Le Journal de Montréal. Collections were republished and distributed in schools in 2008.'
		}
	})
});
Router.route('/en5minutes/2',function(){
	this.render('en5minutes', {
		data: {
			years: '2009-2015',
			description: 'The page « En 5 minutes » has evolved over the years and remains a stand-alone infographic page published daily in Le Journal de Montréal. The team is beginning to do private work for businesses.'
		}
	})
});

Router.route('/html5');
Router.route('/flash');
Router.route('/games');
Router.route('/animation');
Router.route('/illustration');
Router.route('/music');