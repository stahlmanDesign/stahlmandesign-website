/*
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?ids=93823488@N00&tags=infographics&format=json&jsoncallback=?",function(data){
	console.log(data)
	for (var i = 0 ; i< data.items.length; i++) {
		var url = data.items[i].media.m
		$("#infographics").append("<img src='"+url+"'/>");
	}
});
*/

/*
0120d5b1ebad15c8364c1c646e977d92

81693fe7c0c2b5c0
*/

/*
$.getJSON(" http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=0120d5b1ebad15c8364c1c646e977d92&user_id=93823488@N00&format=json&jsoncallback=?",function(data){
	console.log(data)
	for (var i = 0 ; i< data.photos.photo.length; i++) {
		var id = data.photos.photo[i].id
		$("#infographics").append("<img src='http://www.flickr.com/photos/93823488@N00/5565186899?per_page=3'/>");
		//$("#infographics").append("<img src='http://www.flickr.com/photos/93823488@N00/"+id+"'/>");
	}
})
*/

$(document).ready(function() {
	$("#navbar").load("inc/navbar.html");
	var section = ($.url().param("section") == "" ? "home" : $.url().param("section"));
	if ($.url().param("section") == undefined) section = "home"; // if only index.html
	$("#content").load("inc/" + section + ".html", function() {
		if (section == "en5minutes" || section == "newsgraphics") section = "infographics"; // to force selecting dropdown group, not subgroup
		else if (section == "html5" || section == "flash") section = "web"; // to force selecting dropdown group, not subgroup

		$("#" + section).addClass('active');
	});
	var url = "js/" + section + ".js";

	$.getScript(url, function() {
		//console.log(url)
		// done
	});
})