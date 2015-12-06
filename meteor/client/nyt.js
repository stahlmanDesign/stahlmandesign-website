/*
Template.nyt.events({
	'click #savebutton': function(event){
		event.preventDefault(); //prevent page refresh
		//Lists.remove(this._id);
		var url = $("#url").val();
		console.log(url);
		//var link = $('<a></a>').attr("href", url)
		//alert(link);
		$("#newURL").append("<a href='" + url + "'>P) " + url + "</a>");
	}
});
*/
/*

UI.registerHelper('checkedIf', function(val) {
  return val ? 'checked' : '';
});
*/

Template.nyt.events({
	'submit form' : function(event, template) {
		event.preventDefault(); //prevent page reload
		var url = event.target.submittedUrl.value;
		var urlparams = $("#urlparams").is(':checked');
		var pagewantedall = $("#pagewantedall").is(':checked');

/*
		console.log(urlparams)
		console.log(pagewantedall)
*/

		if (urlparams) {
			url = url.split("?")[0];
		}
		if (pagewantedall) {
			url += "?pagewanted=all";
		}

		Session.set('processedUrl',url);
	}
});