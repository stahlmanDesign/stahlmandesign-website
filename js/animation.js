/*
var at = [{
	'name': 'Ange Terrestre trouve ses ailes',
	'html': '<object width="800" height="600" align="middle">\n\
		    			<param name="movie" value="swf/attse.swf"/>\n\
					</object>'
}, {
	'name': 'Ange Terrestre et l’oiseau qui a faim',
	'html': '<object width="900" height="484" align="middle">\n\
		    			<param name="movie" value="swf/atelqaf.swf"/>\n\
					</object>'
}, {
	'name': 'Ange Terrestre et les abeilles',
	'html': '<object width="900" height="484" align="middle">\n\
    			<param name="movie" value="swf/atela.swf"/>\n\
			</object>'
}];

$("#at-button").on('click', function(e) {
	e.preventDefault();

	for (var i = 0 ; i < at.length; i ++){
		if (at[i].name == $(e.target).text()){
			$("#at-animation").html(at[i].html);
			console.log(at[i].html)
		}
	}
});
*/