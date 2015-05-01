// TAKE NOTE: this script loads on every page and behaves according to the parameter in the URL. i.e. index.html?section=en5minutes
$(document).ready(function() {

	$("#navbar").load("inc/navbar.html");	// navbar is loaded on everypage and then current page button is set to active

	var url = $.url(); // use purl.js to extract url info
	var section = url.param("section");

	if (section == undefined) section = "home"

	$("#content").load("inc/" + section + ".html", function() {
		$("#" + section).addClass('active');		// #en5minutes = active

		var script = "js/" + section + ".js";
		$.getScript(script, function(e) {			// load script of section. i.e. js/en5minutes.js
			//console.log(e)
		});
	});


});