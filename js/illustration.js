// featured infographics photoset id = 72157600088568733
// en 5 minutes = 72157600047687564
	// info https://www.flickr.com/services/api/misc.urls.html
	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=72157639954127264&api_key=0120d5b1ebad15c8364c1c646e977d92&user_id=93823488@N00&format=json&callback=?",function(data){
		/* console.log(data) */
	})
	function jsonFlickrApi(data){
		/* console.log(data) */
			var limit = data.photoset.photo.length;

			$("#main-content").append("<ul></ul>");

			for (var i = 0 ; i < limit; i++) {
				var url = {};

				var head = 	"https://farm" + data.photoset.photo[i].farm +
							".staticflickr.com/" + data.photoset.photo[i].server +
							"/" + data.photoset.photo[i].id +
							"_" + data.photoset.photo[i].secret;
				url.small = head + "_m.jpg";
				url.big = head + "_b.jpg";


				$("#main-content").append(
					"<li class='photo-container'>\n\
						<a href='"+url.big+"'>\n\
							<img src='js/vendor/unveil-master/img/loader.gif' data-src='"+url.small+"' data-src-retina='"+url.small+"'/>\n\
							<p class='photo-title'>"+data.photoset.photo[i].title+"</p>\n\
						</a>\n\
					</li>");

				//$("#infographics").append("<img src='https://www.flickr.com/photos/93823488@N00/"+id+"'/>");
			}
			$("img").unveil(0, function() {
			  $(this).load(function() {
			    this.style.opacity = 1;
			  });
			});
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