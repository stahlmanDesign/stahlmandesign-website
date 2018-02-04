
// import { API } from './server'
// import { LS, localStorage } from './localStorage'
// import { newInstructionDefault } from './defaults'
// import videoPlaceholder from '../images/video-placeholder.svg'
// import { appColours } from './defaults'
import localisation from './localisation'
//
// import getVideoId from 'get-video-id'
// import embedVideo from 'embed-video'
// import getYouTubeID from 'get-youtube-id'
// import fetchJsonp from 'fetch-jsonp'
// import moment from 'moment'
// import humanizeDuration from 'humanize-duration'
// import Alert from 'react-s-alert'
import _ from 'lodash'
import $ from 'jquery'

export const UT = {

  parseQueryString: ( queryString )=>{
      let params = {}, queries, temp, i, l
      // Split into key/value pairs
      queries = queryString.split('&') // was '&amp;' but didn't work
      // console.log(queries)
      if (queries[0][0] === '?') queries[0] = queries[0].replace('?','') // remove the ? from the first query so it is not in the object keyname

      // Convert the array of strings into an object
      for ( i = 0, l = queries.length; i < l; i++ ) {
          temp = queries[i].split('=')
          params[temp[0]] = temp[1]
      }
      return params
  },

  localise: (key, APP, options)=>{
    let lang = APP.state.lang
    if (options){
      if (options.overrideLang) lang = options.overrideLang

      if (options.toCamelCase) key = _.camelCase(key)
      if (options.capitalizeFirstLetter) key = UT.capitalizeFirstLetter(key) // NOTE this only capitalizes the KEY, not the localisation result, as you were expecting given how that would have been useful and should be added as a feature

      // NOTE to confirm that a translation exists, pass {returnTrueIfExists: true}
      if (options.returnTrueIfExists){
        if (localisation[key] ) return true
        else return false
      }
    }

    if (localisation[key]
     && localisation[key][lang]){ // a translation exists
       return localisation[key][lang]
    } else {
      console.warn('No localisation for the follwoing word or phrase: ', key, 'Displaying the key instead of a translation')
      return key
    }
  },
  getFlickr: (photosetId, useFlickrDescAsUrl, callback)=> {
    //console.log(useFlickrDescAsUrl)
    // photosetId as per Flickr API
    // featured infographics photoset id = 72157600088568733
    // en 5 minutes = 72157600047687564
    // en 5 minutes 2 = 72157649406297688
    // info https://www.flickr.com/services/api/misc.urls.html
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&photoset_id=" + photosetId + "&api_key=0120d5b1ebad15c8364c1c646e977d92&user_id=93823488@N00&per_page=900&format=json&jsoncallback=?", function (data) {
        jsonFlickrApi(data)
    });

    function jsonFlickrApi(data) {
        var limit = data.photoset.photo.length;
        //limit = 500 // this is Flickr's max limit per photoset
        // $(".main-content").html("<ul></ul>");
        // randomize photos array data.photoset.photo
        //console.log(data.photoset)
        //shuffle(data.photoset.photo);
        let images = []
        for (var i = 0; i < limit; i++) {
            var url = {};
            var head = "https://farm" + data.photoset.photo[i].farm + ".staticflickr.com/" + data.photoset.photo[i].server + "/" + data.photoset.photo[i].id + "_" + data.photoset.photo[i].secret;
            let urlSmall = head + "_m.jpg";
            let urlBig = head + "_b.jpg";
            let title = data.photoset.photo[i].title
            // )$(".main-content").prepend(

            UT.getDesc(data.photoset.photo[i], url, i, (descUrlCallbackContent)=>{
              // console.log(descUrlCallbackContent)
              let image = {
                urlBig: urlBig,
                index:i,
                urlSmall:urlSmall,
                title: title,
                descUrl: descUrlCallbackContent // OPTIONAL, may not exists: will add description to photo by using desc-0 ID when callback is done
              }


              // const descUrl = getDesc(data.photoset.photo[i], url, i)

              images.push( image );
              if (images.length === limit) callback(images)
            })

            //$("#infographics").append("<img src='https://www.flickr.com/photos/93823488@N00/"+id+"'/>");
        }



        // NOTE this is a hack because unveil is not loading in normal <script> tag in index.html, probably because of meteor. Used to work in Meteor 1.2.1, but not after upgrade to 1.3.4.2

        // $.getScript( "http://cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js", function( data, textStatus, jqxhr ) {
        //   // console.log( data ); // Data returned
        //   // console.log( textStatus ); // Success
        //   // console.log( jqxhr.status ); // 200
        //   // console.log( "Load was performed." );
        //
        //   $(".unveil-img").unveil(0, function () {
        //       $(this).load(function () {
        //           this.style.opacity = 1;
        //       });
        //   });
        // });


    }
  },
  getDesc: (photo, url, i, descUrlCallback)=> {

        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=0120d5b1ebad15c8364c1c646e977d92&photo_id=" + photo.id + "&format=json&nojsoncallback=1", function (data) {
            //console.log(data)
            // console.log(data.photo.description._content)
            let res =  data.photo.description._content.split('"')[1]; // get url from markup right after href=" , using the " to split and take index 1

            if (descUrlCallback) descUrlCallback( res )
            //$("#desc-" + i).attr("href", "http://" + $(data.photo.description._content).text());
        });
    }

}
