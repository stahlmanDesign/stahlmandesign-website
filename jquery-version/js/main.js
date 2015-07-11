// TAKE NOTE: this script loads on every page and behaves according to the parameter in the URL. i.e. index.html?section=en5minutes
$(document).ready(function() {

	$("#navbar").load("inc/navbar.html");	// navbar is loaded on everypage and then current page button is set to active


	var url = $.url(); // use purl.js to extract url info

	console.log(url.attr('source'));
	console.log(url.attr('path'));

	var path = url.attr('path');

	var res = "";

	switch(path)
	{
	case "/infographics/newsgraphics":
	  res = "newsgraphics";
	  break;
	case "/en5minutes/1":
	  res = "en5mintes-1";
	  break;
	  	case "/en5minutes/2":
	  res = "en5mintes-2";
	  break;
	  	case "/html5":
	  res = "html5";
	  break;
	  	case "/flash":
	  res = "flash";
	  break;
	  	case "/games":
	  res = "games";
	  break;
	  	case "/animation":
	  res = "animation";
	  break;
	  	case "/illustration":
	  res = "illustration";
	  break;
	  	case "/music":
	  res = "music";
	  break;

	default:
	  res = "home";
	}


	$("#content").load("inc/" + res + ".html", function() {
		$("#" + res).addClass('active');		// #en5minutes = active

		var script = "js/" + res + ".js";
		$.getScript(script, function(e) {			// load script of section. i.e. js/en5minutes.js
			//console.log(e)
		});
	});


});