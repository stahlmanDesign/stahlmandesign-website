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
	//$("#newsgraphics").addClass('active'); // #en5minutes = active
	getFlickr("72157600073936574"); // photoset id
});
Router.route('/en5minutes/1', function() {
	this.render('en5minutes', {
		data: {
			years: '2005-2008',
			description: 'The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in Le Journal de Montréal. Collections were republished and distributed in schools in 2008.'
		}
	});
	getFlickr("72157600047687564");
});
Router.route('/en5minutes/2', function() {
	this.render('en5minutes', {
		data: {
			years: '2009-2015',
			description: 'The page « En 5 minutes » has evolved over the years and remains a stand-alone infographic page published daily in Le Journal de Montréal. The team is beginning to do private work for businesses.'
		}
	});
	getFlickr("72157649406297688");
	// featured infographics photoset id = 72157600088568733
	// en 5 minutes = 72157600047687564
	// en 5 minutes 2 = 72157649406297688
	// info https://www.flickr.com/services/api/misc.urls.html
});
Router.route('/html5', function() {
	this.render('html5', {
		data: {
			years: '',
			description: ''
		}
	});
	getFlickr("72157640089367186", true); // true means call function useFlickrDescAsUrl
});
Router.route('/flash');
Router.route('/games');


/*
Router.route('/games/dreamsong', function (){
 	window.location.href = "../games/dreamsong/index.html"
});
Router.route('/games/ttal', function (){
 	window.location.href = "../games/ttal/index.html"
});
Router.route('/games/sacredLamps', function (){
 	window.location.href = "../games/sacredLamps/index.html"
});
Router.route('/games/mountainbike', function (){
 	window.location.href = "../games/mountainbike/index.html"
});
*/


Router.route('/animation');
Router.route('/illustration', function() {
	this.render('illustration', {
		data: {
			years: '',
			description: ''
		}
	});
	getFlickr("72157639954127264");
});
Router.route('/music');
Router.route('/nyt/links', function() {
	this.render('nyt-links', {
		data: {
			links: 'http://www.nytimes.com/2015/06/26/us/politics/obama-supreme-court-aca-ruling-health-care.html?hp&action=click&pgtype=Homepage&module=first-column-region&region=top-news&WT.nav=top-news&_r=0&gwh=7F17B9A408C1CA3B9E4921A085C049E1&gwt=pay'
		}
	});
});
Router.route('/nyt', function() {
	this.render('nyt', {
		data: {
			test: ''
		}
	});
	var newHTML = {};
	newHTML.head = '<!DOCTYPE html>' + '<html lang="fr">' + '<head>' + '<meta charset="utf-8">' + '<title></title>';
	newHTML.foot = '<img src="images/coocoo.jpg">' + '<p>v1.21 - The Vampirates</p>' + '</head>' + '<body>';
	$(document).on("click", "#savebutton", function() {
		var url = $("#url").val();
		console.log(url);
		var link = $('<a></a>').attr("href", url)
		console.log(link);
		$("body").append("<a href='" + url + "'>GO GO GO --> " + url + "</a>");
		//$('#savebutton').append(url);
	});
	$("#savebutton").click(function() {
		//savedata($("#url").val());
		var url = $("#url").val();
		console.log(url);
	});

	function savedata(url) {
		console.log($("#urlparams").is(':checked'))
		if ($("#urlparams").is(':checked')) {
			url = url.split("?")[0];
		}
		if ($("#pagewantedall").is(':checked')) {
			url += "?pagewanted=all";
		}
		var myHTML = (newHTML.head + '<a target="_blank" href="' + url + '">' + url + '</a>' + newHTML.foot);
		var json = {
			"newHTML": myHTML
		};
		var dataString = JSON.stringify(json);
		$.post('save.php', {
			formData: dataString
		}, function(phpmessage) {
			console.log(phpmessage);
			window.open("lien.html", "_parent");
		});
	}
});
//--------------

function getFlickr(photosetId, useFlickrDescAsUrl) {
	console.log(useFlickrDescAsUrl)
	// photosetId as per Flickr API
	// featured infographics photoset id = 72157600088568733
	// en 5 minutes = 72157600047687564
	// en 5 minutes 2 = 72157649406297688
	// info https://www.flickr.com/services/api/misc.urls.html
	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=" + photosetId + "&api_key=0120d5b1ebad15c8364c1c646e977d92&user_id=93823488@N00&per_page=900&format=json&jsoncallback=?", function(data) {
		jsonFlickrApi(data)
	});

	function jsonFlickrApi(data) {
		var limit = data.photoset.photo.length;
		//limit = 500 // this is Flickr's max limit per photoset
		$(".main-content").html("<ul></ul>");
		// randomize photos array data.photoset.photo
		//console.log(data.photoset)
		//shuffle(data.photoset.photo);
		for (var i = 0; i < limit; i++) {
			var url = {};
			var head = "https://farm" + data.photoset.photo[i].farm + ".staticflickr.com/" + data.photoset.photo[i].server + "/" + data.photoset.photo[i].id + "_" + data.photoset.photo[i].secret;
			url.small = head + "_m.jpg";
			url.big = head + "_b.jpg";
			$(".main-content").prepend(
						"<li class='photo-container'>\n\
							<a href='" + url.big + "' id='desc-"+i+"'>\n\
								<img src='js/vendor/unveil-master/img/loader.gif' data-src='" + url.small + "' data-src-retina='" + url.small + "'/>\n\
								<p class='photo-title'>" + data.photoset.photo[i].title + "</p>\n\
							</a>\n\
						</li>");
			if (useFlickrDescAsUrl) getDesc(data.photoset.photo[i],url,i); // will add description to photo by using desc-0 ID when callback is done
			//$("#infographics").append("<img src='https://www.flickr.com/photos/93823488@N00/"+id+"'/>");
		}
		$("img").unveil(0, function() {
			$(this).load(function() {
				this.style.opacity = 1;
			});
		});
	}

	function getDesc(photo,url,i){

		$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=0120d5b1ebad15c8364c1c646e977d92&photo_id="+photo.id+"&format=json&nojsoncallback=1",function(data){
			//console.log(data)
			//console.log(data.photo.description._content)

			$("#desc-"+i).attr( "href", "http://" + $(data.photo.description._content).text());
		});
	}
}
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}


// this is for general photos
// https://api.flickr.com/services/rest/?tags=infographics&method=flickr.people.getPublicPhotos&api_key=0120d5b1ebad15c8364c1c646e977d92&user_id=93823488@N00&format=json&jsoncallback=?


/*
<sizes canblog="1" canprint="1" candownload="1">
  <size label="Square" width="75" height="75" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_s.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/sq/" media="photo" />
  <size label="Large Square" width="150" height="150" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_q.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/q/" media="photo" />
  <size label="Thumbnail" width="100" height="75" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_t.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/t/" media="photo" />
  <size label="Small" width="240" height="180" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_m.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/s/" media="photo" />
  <size label="Small 320" width="320" height="240" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_n.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/n/" media="photo" />
  <size label="Medium" width="500" height="375" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/m/" media="photo" />
  <size label="Medium 640" width="640" height="480" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_z.jpg?zz=1" url="https://www.flickr.com/photos/stewart/567229075/sizes/z/" media="photo" />
  <size label="Medium 800" width="800" height="600" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_c.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/c/" media="photo" />
  <size label="Large" width="1024" height="768" source="https://farm2.staticflickr.com/1103/567229075_2cf8456f01_b.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/l/" media="photo" />
  <size label="Original" width="2400" height="1800" source="https://farm2.staticflickr.com/1103/567229075_6dc09dc6da_o.jpg" url="https://www.flickr.com/photos/stewart/567229075/sizes/o/" media="photo" />
</sizes>
*/



