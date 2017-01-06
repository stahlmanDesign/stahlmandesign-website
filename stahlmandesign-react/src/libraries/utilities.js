// import newImageInfoDefault from './Global'
import $ from 'jquery'
import confirm from 'react-confirm2';
import { browserHistory } from 'react-router'

// possible shim for IE11
// https://github.com/Raynos/DOM-shim

// Polyfill: Number.isNumber is part of ES6 so not supported by IE11
export const NumberIsIntegerPolyfill = () => {
  // console.info('NumberIsIntegerPolyfill')
  Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value;
    };
}

export function parseQueryString( queryString ) {
    let params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&"); // was "&amp;" but didn't work
    // console.log(queries)
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
}
export function loadGoogleAnalytics(ga) {
    // Google Analytics for stahlmandesign.com

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-25169855-1', 'auto');
    ga('send', 'pageview');
    //console.log(window.location.href);
}
export function getFlickr(photosetId, useFlickrDescAsUrl, callback) {
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
            url.small = head + "_m.jpg";
            url.big = head + "_b.jpg";
            // )$(".main-content").prepend(
            images.push( {urlBig:url.big,index:i,urlSmall:url.small,title:data.photoset.photo[i].title} );
            // if (useFlickrDescAsUrl) getDesc(data.photoset.photo[i], url, i); // will add description to photo by using desc-0 ID when callback is done



            //$("#infographics").append("<img src='https://www.flickr.com/photos/93823488@N00/"+id+"'/>");
        }
        if (callback) callback(images)

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

    function getDesc(photo, url, i) {

        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=0120d5b1ebad15c8364c1c646e977d92&photo_id=" + photo.id + "&format=json&nojsoncallback=1", function (data) {
            //console.log(data)
            //console.log(data.photo.description._content)

            $("#desc-" + i).attr("href", "http://" + $(data.photo.description._content).text());
        });
    }
}

export function getIndexByRevisionId(workInst, revisionId){
  // console.log('getIndexByRevisionId workInst',workInst)
  // console.log('getIndexByRevisionId revisionId',revisionId)
  // console.log('getIndexByRevisionId workInst._revisions.length',workInst._revisions.length)
  if (revisionId){
    for (let i = 0; i < workInst._revisions.length; i++){
      if (workInst._revisions[i].id === revisionId){
        // console.log('detected revisionId, use index of that ID',i,revisionId)
        return i;
      }
    }
  }
  // console.warn('no index found for revsionId ', revisionId, ' will default to last in array ')
  return workInst._revisions.length-1; // default to last index
}
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isMobileSize(){
  return $('#hidden-on-mobile').is(':hidden');
}

export function clickMenuButton(sidebarMenu, intendedCommand, sourceComponent, callback){
  // console.log('clickMenuButton attempted. Will only open if sidebarMenu is closed and intendedCommand === "open", or vice-versa')
  // console.log('sidebarMenu.isOpen',sidebarMenu.isOpen)
  // console.log('intendedCommand',intendedCommand)
  if ( sidebarMenu.isOpen && intendedCommand === 'close') {
    setTimeout(()=>{
      $(".bm-burger-button > button").trigger('click'); // close menu for login
      // console.log('clicked sidebarMenu button in ' + sourceComponent + '. Click is intended to ' + intendedCommand)
      if (callback) callback();
    },50)
  }else if (!sidebarMenu.isOpen && intendedCommand === 'open' && !isMobileSize() ) {
    setTimeout(()=>{
      $(".bm-burger-button > button").trigger('click'); // close menu for login
      // console.log('clicked sidebarMenu button in ' + sourceComponent + '. Click is intended to ' + intendedCommand)
      if (callback) callback();
    },50)
  }else{
    // console.log('no need to close/open sidebar. Proceed to print')
    if (callback) callback();
  }
}

export function handleSaveButtonDisabled(Index, revisionIndexToShow, eventTriggeredByScriptNotUser) {
  // NOTE - this is deactivated until further notice

  // NOTE is called by all input fields upon keystroke to:
  // 1) validate if fields have data required for a create/update of WI
  // 2) enable/disable certain buttons like save (ex. disabled if no data has changed)

  // set conditions for enabling save draft
  // if ( Index.state.workInstruction._revisions[revisionIndexToShow].title !== ''
  //   //&& Index.state.workInstruction.reference !== ''
  // ){
  //   Index.setState({ wiHasRequiredFields:true }); // all required fields OK
  // }else{
  //   // console.log('disabling save')
  //   Index.setState({ wiHasRequiredFields:false }) // some fields not filled in
  // }
}
export function handleLoginButtonDisabled(Index) {
  // NOTE - this is deactivated until further notice

  // NOTE called by all email and password input fields upon keystroke to validate (disallow submit if not filled in)
  // if ( Index.state.login && (Index.state.login.email !== '' && Index.state.login.password !== '' ) ){
  //   Index.setState({ wiHasRequiredFields:true }); // all required fields OK
  // } else {
  //   Index.setState({ wiHasRequiredFields:false }) // some fields not filled in
  // }
}

export const UT = {
  getStatus: (revisionIndexToShow, workInst, localisation, lang)=>{

    const revision = workInst._revisions[revisionIndexToShow];
    let res = {text:localisation.Draft[lang],color:'label-draft',icon:'unlock'}

    if (workInst.deletedAt) // NOTE look in work instruction, not the revision
      res = { text:localisation.Draft[lang],color: 'label-draft',icon:'unlock'};
    if ( revision.publishedAt)
      res = { text:localisation.Published[lang],color: 'label-published',icon:'lock'}
    if ( workInst.archivedAt) // NOTE look in work instruction, not the revision
      res = { text:localisation.Archived[lang],color: 'label-archived',icon:'lock'}
    else if ( !workInst.archivedAt
          &&  !revision.publishedAt
          &&  !workInst.archivedAt)
      res = {text:localisation.Draft[lang],color:'label-draft',icon:'unlock'}

      return res;
  },
  saveWiAndRevision( token, API, urls, intercom, revisionIndexToShow, workInstruction, callback ){
    // const revision = workInstruction._revisions[revisionIndexToShow]
    console.log('token',token,'urls',urls)
    const action1 = {
      type: 'UPDATE_WORK_INSTRUCTION',
      path: '/' + urls.server.workInstructions + '/' + workInstruction.id,
      token: token,
      data: {
        reference: workInstruction.reference,
        teamId: workInstruction.teamId,
        tagAttributeIds: workInstruction.tagAttributeIds
      }
    }
    // const action2 = {
    //   path: '/' + urls.server.workInstructions + '/' + workInstruction.id + '/revisions/' + revision.id,
    //   token: token,
    //   data: workInstruction._revisions[revisionIndexToShow],
    // }
    API.updateAction( action1, (wiResponse)=>{
      if (wiResponse.error){
        console.error('API.updateAction wiResponse.error', wiResponse.error)
      } else {
        console.info('API.updateAction wiResponse success')
        UT.saveRevision(token, API, urls, workInstruction, revisionIndexToShow, (saveRevisionResponse)=>{
          if (callback) callback();// saved wi and revison, now proceed if a callback exists
        })
        // API.updateAction( action2, (updateRevisionResponse)=>{
        //   console.log(updateRevisionResponse)
        //   if (updateRevisionResponse.error){
        //     console.error('Unable to save draft data to work instruction', updateRevisionResponse)
        //   } else {
        //     intercom.trackEvent('saved-draft-wi', {
        //       title: workInstruction._revisions[revisionIndexToShow].title,
        //       reference: workInstruction.reference,
        //       workInstructionId: workInstruction.id,
        //       numSteps: workInstruction._revisions[revisionIndexToShow].steps.length
        //     });
        //     if (callback) callback();
        //   }
        // });
      }
    });
  },
  saveRevision: (token, API, urls, copiedWorkInstruction, revisionIndexToShow, callback)=>{
    const revision = copiedWorkInstruction._revisions[revisionIndexToShow]
    console.log('saving revision.steps',copiedWorkInstruction._revisions[revisionIndexToShow].steps)
    const action = {
      path: '/' + urls.server.workInstructions + '/' + copiedWorkInstruction.id + '/revisions/' + revision.id,
      token: token,
      data: revision
    }
    API.updateAction( action, (response)=>{
      if (response.error){
        console.error(response)
      }else{
        console.info('saved revision response',response)
        if (callback) callback(response)
      }
    });
  },
  publishWorkInstruction: (token, API, urls, intercom, revisionIndexToShow, workInstruction, callback)=>{
    const revision = workInstruction._revisions[revisionIndexToShow];
    const action = {
      type: 'PUBLISH_WORK_INSTRCTION',
      path: '/' + urls.server.workInstructions + '/' + workInstruction.id + '/revisions/' + revision.id + '/publish',
      token: token,
      data: workInstruction
    }
    API.updateAction(action, (publishResponse)=>{
      if (publishResponse.error){
        console.error('API.updateAction publishResponse.error', publishResponse.error)
      }else{
        console.info('API.updateAction publishResponse success')
        intercom.trackEvent(action.type, {
          title: revision.title,
          reference: workInstruction.reference,
          workInstructionId: workInstruction.id,
          numSteps: revision.steps.length,
          numEdits: revision.numEdits
        });
        if (callback) callback(publishResponse);
      }
    });
  },
  getHasBeenPublished: (workInst)=>{
    for (let i = 0; i < workInst._revisions.length; i ++){
      if (workInst._revisions[i].publishedAt) return true;
    }
    return false;
  },
  handleActionSelectDropdown: (callerComponent, Index, selectedWI, revisionIndexToShow, urls, API, intercom, newWorkInstructionRevision, redirectToListViewAfterDeleteOrArchive, e)=>{
    console.log('callerComponent',callerComponent)
    console.log('Index',Index)
    console.log('selectedWI',selectedWI)
    console.log('revisionIndexToShow',revisionIndexToShow)
    console.log('urls',urls)
    /* NOTE unintuitively, event (e) is at end and passed invisibly */

    const action = e.target.value; // e.target.getAttribute('data-action');
    const title = selectedWI._revisions[revisionIndexToShow].title // e.target.getAttribute('data-title'); // because in a list, not on the WI page
    const reference = selectedWI.reference // e.target.getAttribute('data-reference'); // because in a list, not on the WI page
    const workInstructionId = selectedWI.id //e.target.getAttribute('data-workInstructionId'); // because in a list, not on the WI page
    const revisionId = selectedWI._revisions[revisionIndexToShow].id //e.target.getAttribute('data-workInstructionId'); // because in a list, not on the WI page
    const numSteps = selectedWI._revisions[revisionIndexToShow].steps.length // e.target.getAttribute('data-numSteps'); // because in a list, not on the WI page
    const numEdits = selectedWI._revisions[revisionIndexToShow].numEdits // e.target.getAttribute('data-numSteps'); // because in a list, not on the WI page

    let confirmMessage = Index.state.localisation.ConfirmThisAction[Index.state.lang]
    if (action === 'delete') confirmMessage = Index.state.localisation.DeleteThisWorkInstruction[Index.state.lang]
    if (action === 'undelete') confirmMessage = Index.state.localisation.RemoveFromTrash[Index.state.lang]
    if (action === 'archive') confirmMessage = Index.state.localisation.ArchiveRemoveFromPublicationAndHideFromTheList[Index.state.lang]
    if (action === 'publish') confirmMessage = Index.state.localisation.PublishANewRevision[Index.state.lang]
    if (action === 'newDraft') confirmMessage = Index.state.localisation.CreateNewDraftBasedOnSelectedRevision[Index.state.lang] + ' (' + title + ', ' + reference + ')'

    if (action === 'publish' && UT.getHasBeenPublished(selectedWI) === false) confirmMessage = Index.state.localisation.FirstTimePublicationTheTeamCannotBeChanged[Index.state.lang]

    confirm( confirmMessage, () => {
      console.log('confirmed, action=',action)

      const token = Index.state.token;

      const actionSuccess = (response)=>{
        intercom.trackEvent('changed-status-' + action, {
          title: title,
          reference: reference,
          workInstructionId: workInstructionId,
          numSteps: numSteps,
          numEdits: numEdits
        });
        console.log('statistics: ' + action + '-wi-from-list');

        if ( (action === 'delete' || action === 'archive')
              && redirectToListViewAfterDeleteOrArchive ) {
                console.log('action',action,'redirectToListViewAfterDeleteOrArchive',redirectToListViewAfterDeleteOrArchive,'will redirect to /work-instructions')
          browserHistory.push('/work-instructions'); // navigate to WIs because successfully marked delete and should no longer be in edit or view mode
        }
        if ( action === 'publish') {
          // const windowLocation = window.location;
          browserHistory.push('/work-instructions'); // navigate view mode
          // TODO just refresh WI and stay in edit/view mode was showing a blank WI so this temporary fix redirects to list after publish
        }

        if (callerComponent.refreshWorkInstructions) {
          callerComponent.refreshWorkInstructions(); // NOTE only in WiList
        }
        if (callerComponent.refreshWorkInstruction && action !== 'archive') {
          callerComponent.refreshWorkInstruction(); // NOTE only in WiCRUD -- loads but set state
        }
        callerComponent.setState({submitSuccess:true}, ()=>{
          // callerComponent.setState({ workInstructions: response });
          callerComponent.setState({loadingMessage: ''}, ()=>{
            callerComponent.successTimer = setTimeout( ()=> {
              callerComponent.setState({submitSuccess: false},()=>{
                callerComponent.setState({loadingMessage: ''});
              });
            },3000);
          });
        });
      }
      const actionError = (response)=>{
        intercom.trackEvent('ERROR-changed-status-' + action, {
          title: title,
          reference: reference,
          workInstructionId: workInstructionId,
          numSteps: numSteps,
          numEdits: numEdits
        });
        console.log('statistics: ' + action + '-wi-from-list');

        if (callerComponent.refreshWorkInstructions) callerComponent.refreshWorkInstructions(); // NOTE only in WI list
        callerComponent.setState({submitError:true}, ()=>{
          callerComponent.setState({loadingMessage: response.error.message})
          callerComponent.errorTimer = setTimeout( ()=> {
            callerComponent.setState({submitError:false});
            callerComponent.setState({loadingMessage: ''})
          },3000);
        });
      }

      switch (action){
        case 'publish':

            // NOTE save draft first
            UT.saveWiAndRevision( token, API, urls, intercom, revisionIndexToShow, selectedWI, ()=>{
              const revision = selectedWI._revisions[revisionIndexToShow];

              const publishAction = {
                path: '/' + urls.server.workInstructions + '/' + selectedWI.id + '/revisions/' + revision.id + '/publish',
                token: Index.state.token,
                data: selectedWI
              }
              API.updateAction(publishAction, (publishResponse)=>{
                if (publishResponse.error){
                  console.error('API.updateAction error: /' + urls.server.workInstructions, token, workInstructionId, selectedWI, revisionId, action, publishResponse)
                  actionError(publishResponse);
                }else{
                  console.info('API.updateAction success: /' + urls.server.workInstructions, token, workInstructionId, selectedWI, revisionId, action, publishResponse)
                  actionSuccess(publishResponse);
                }
              });
            });


          break;
        case 'delete':
          const eraseAction = {
            path: '/' + urls.server.workInstructions + '/' + workInstructionId,
            token: token
          }
          API.deleteAction( eraseAction, (response)=>{
            if (response.error){
              console.error('API.deleteAction error: /', action)
              actionError(response);
            }else{
              console.info('API.deleteAction success: /', action)
              actionSuccess(response);
            }
          });
          break;
        case 'archive':

          const archiveAction = {
            path: '/' + urls.server.workInstructions + '/' + selectedWI.id + '/archive',
            token: Index.state.token
          }
          API.updateAction(archiveAction, (response)=>{
            if (response.error){
              console.error('API.updateAction error: /',response)
              actionError(response);
            }else{
              console.info('API.updateAction success: /',response)
              actionSuccess(response);
            }
          });
          break;
        case 'newDraft':
          // NOTE newWorkInstructionRevision is imported as a prop because can't import in this file for some reason
          let copiedRevision = JSON.parse(JSON.stringify(selectedWI._revisions[revisionIndexToShow]))
          let newRevision = JSON.parse(JSON.stringify(newWorkInstructionRevision))

          // instead of deleting some objects like id and version from the clone, use default settings and only copy what is needed
          newRevision.sourceVersion = copiedRevision.version;
          newRevision.title = copiedRevision.title;
          newRevision.authorId = copiedRevision.authorId;
          // newRevision.deleted = false; // already set in default
          newRevision.steps = copiedRevision.steps;
          newRevision.details = copiedRevision.details;
          // newRevision.numEdits: 0 // already set in default
          // newRevision.ready: false // already set in default
          // newRevision.setFocus: '' // already set in default

          const newAction = {
            token: Index.state.token,
            path: '/' + urls.server.workInstructions + '/' + workInstructionId + '/revisions',
            data: newRevision,
            type: 'CREATE_NEW_WORK_INSTRUCTION_REVISION' // for future use with Redux
          }

          API.createAction( newAction, (newRevisionResponse)=>{
            if (newRevisionResponse.error){
              console.error('Unable to create a new revision in work instruction', newRevisionResponse)
              actionError(newRevisionResponse);
            }else{
              console.log('post newRevisionResponse after successful createRev', newRevisionResponse)
              // actionSuccess(newRevisionResponse);
              intercom.trackEvent('changed-status-' + action, {
                title: title,
                reference: reference,
                workInstructionId: workInstructionId,
                numSteps: numSteps,
                numEdits: numEdits
              });
              console.log('statistics: ' + action + '-wi-from-list');
              const windowLocation = window.location;
              const queryString = parseQueryString(windowLocation.search.substring(1))
              console.log(queryString)
              console.log('going to push','/' + urls.client.workInstructionsIdEdit + '?id=' + queryString.id + '&revisionId=' + newRevisionResponse.id)
              browserHistory.push('/' + urls.client.workInstructionsIdEdit + '?id=' + queryString.id + '&revisionId=' + newRevisionResponse.id)
              // TODO status label dropdown not updated when push browser history like this, so UI out of sync with revision being edited
            }
          });
          break;
        default:
          console.log('default reached in switch statement, do nothing')
          break;
      }
    })
    return;
  },
  loadTags(API, token, teamId, urls, callback){
    const action = {
      path: '/' + urls.server.tags + '/?filter={"where":{"teamId":"' + teamId + '"}}',
      token: token
    }
    API.readAction( action, (tagsResponse) => {
      if (tagsResponse.error){
        console.error('API.readAction error: /' + urls.server.tags )
        if (callback) callback(tagsResponse)
      }else{
        console.info('API.readAction success: /' + urls.server.tags, tagsResponse )
        if (callback) callback(tagsResponse);
      }
    });
  },
  arrayUniqueIdInObject: (array)=> {
    // http://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items#1584377
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i].id === a[j].id)
                  a.splice(j--, 1);
          }
      }
      return a;
      // USAGE
      // var array1 = ["Vijendra","Singh"];
      // var array2 = ["Singh", "Shakya"];
      //     // Merges both arrays and gets unique items
      // var array3 = arrayUnique(array1.concat(array2));

  },
  arrayUniqueInObject: (key, array)=> {
    // http://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items#1584377
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i][key] === a[j][key])
              console.log('going to splice',a[i][key])
                  a.splice(j--, 1);
          }
      }
      return a;
      // USAGE
      // var array1 = ["Vijendra","Singh"];
      // var array2 = ["Singh", "Shakya"];
      //     // Merges both arrays and gets unique items
      // var array3 = arrayUnique(array1.concat(array2));

  },
  warnDiscardChanges(confirm, hasNumChanges, message, callback){
    if (hasNumChanges > 0){
      confirm( message, () => {
        callback();
      });
    } else {
      callback();
    }
  },
  // getDetailsModelFromTeam: (teams, teamId, callback)=>{
  //   let newDetailItemsFromTeamSettings = [];
  //   for (let i = 0; i < teams.length; i ++){
  //     if (teams[i].id === teamId) {
  //       // grab details model from current team in case need to apply to new revision
  //       newDetailItemsFromTeamSettings = JSON.parse(JSON.stringify(teams[i]._workInstructionDetails));
  //       if (callback) callback(newDetailItemsFromTeamSettings);
  //     }
  //   }
  // },
  getDetailsModelFromTeamObject(team, callerComponent){
    // console.log('getDetailsModelFromTeam: team',team)
    if (!team) {
      console.warn('Can’t get details model because no team was provided from callerComponent',team,callerComponent)
      return {}
    }
    let detailsModelFromTeam = {
      teamName: team.name,
      teamId: team.id,
      companyId: team.companyId,
      items: team._workInstructionDetails
    }

    // add empty content to each item
    for (let i = 0; i < detailsModelFromTeam.items.length; i ++){
      detailsModelFromTeam.items[i].content = '' // if it is something other than a string, the detail type will replace this with an array or object when data needed
    }

    return detailsModelFromTeam;
  },
  getFullObjectById(arrayOfObjects, id, key){
    let res = '';
    for (let i = 0; i < arrayOfObjects.length; i ++){
      if (arrayOfObjects[i][key] === id){
        res = arrayOfObjects[i];
        break;
      }
    }
    return res;
  }
}
