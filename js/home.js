$(document).ready(function() {
	var images = ['<a href="https://twitter.com/jstahlman/status/267720089317552129/photo/1"><img id="nodes" src="https://pbs.twimg.com/media/A7ciALeCMAI6U_x.png:large"/></a>', '<a href="https://twitter.com/jstahlman/status/268050063459225600/photo/1"><img id="nodes" src="https://pbs.twimg.com/media/A7hOHM7CEAEnSn9.png:large"/></a>'];
	var rnd = ((Math.random() < 0.5) ? 0 : 1);
	//console.log(rnd)
	$("#main-image").html(images[rnd]);
});