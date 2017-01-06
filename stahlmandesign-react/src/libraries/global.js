import $ from 'jquery' // will eventually use isomorphic-fetch instead of jquery ajax

// async, communication with server
import fetch from 'isomorphic-fetch' // For ease-of-maintenance and backward-compatibility reasons, this library will always be a polyfill.
import { polyfill } from 'es6-promise'; // isomorphic-fetch requires this polyfill
require('es6-shim'); // should fix a lot of IE11 problems
polyfill();

export function getApiHeader (){
  let res;
  let urlInBrowser = window.location.href; // ex. (env. dev) http://demo.jitbase.local:3001/
  //urlInBrowser = "http://demo.jitbase.com/" // pour simuler prod
  const urlSplit = urlInBrowser.split('/'); // ex. ["http:", "", "demo.jitbase.local:3001", ""]
  let subDomainAndDomainAndPortIfApplicable = urlSplit[2]; // ex. demo.jitbase.local:3001
  let subDomainAndDomainAndPortSplit = subDomainAndDomainAndPortIfApplicable.split(':'); // ex. ["demo.jitbase.local","3001"]
  let sudDomainAndDomain = subDomainAndDomainAndPortSplit[0]; // ex. demo.jitbase.local
  let portIfExists = subDomainAndDomainAndPortSplit[1] !== undefined
      ? ':3000' // ex. :3001 <- if exists must be client dev server. Force to point to 3000 because path begin built in this function is for API
      : ''; // if undefined, use empty string
  res = '//' + sudDomainAndDomain + portIfExists
  // console.log('res=' + res)
  return res;
}
export function getSubDomainDotDomain (){
  let res;
  let urlInBrowser = window.location.href; // ex. (env. dev) http://demo.jitbase.local:3001/
  //urlInBrowser = "http://demo.jitbase.com/" // pour simuler prod
  const urlSplit = urlInBrowser.split('/'); // ex. ["http:", "", "demo.jitbase.local:3001", ""]
  let subDomainAndDomainAndPortIfApplicable = urlSplit[2]; // ex. demo.jitbase.local:3001
  let subDomainAndDomainAndPortSplit = subDomainAndDomainAndPortIfApplicable.split(':'); // ex. ["demo.jitbase.local","3001"]
  let sudDomainAndDomain = subDomainAndDomainAndPortSplit[0]; // ex. demo.jitbase.local
  res = sudDomainAndDomain
  // console.log('res=' + res)
  return res;
}
export const urls = {
    //apiHeader: '//localhost:3001',
    apiHeader: getApiHeader() + '/api',
    headerWithoutSlashAPI: getApiHeader() + '',
    // membersCollectionName: 'jitbase-members/',
    // companiesCollectionName: 'jitbase-companies/',
    // workInstructionsCollectionName: 'jitbase-workInstructions/',
    // apiHeader: '//localhost:3000/api',

    // NOTE separate client router links and server REST paths
    client:{
      login: 'login',
      members: 'members',
      membersId: 'members/view',
      membersIdEdit: 'members/edit', // + '?id=' + this.Index.state.token.member.id,
      membersCreate: 'members/create',
      companies: 'companies',
      companiesId: 'companies/view',
      companiesIdEdit: 'companies/edit',
      companiesCreate: 'companies/create',
      teams: 'teams',
      teamsId: 'teams/view',
      teamsIdEdit: 'teams/edit',
      teamsCreate: 'teams/create',
      tags: 'tags',
      tagsId: 'tags/view',
      tagsIdEdit: 'tags/edit',
      tagsCreate: 'tags/create',
      workInstructions: 'work-instructions',
      workInstructionsId: 'work-instructions/view', // + '/?id=' // added /view/ because react-router defaults to work-instructions/ without it which is to show all
      workInstructionsIdEdit: 'work-instructions/edit',
      workInstructionsCreate: 'work-instructions/create',
      upload: 'upload',
      video: 'video',
      dnd: 'dnd',
      icons: 'icons',
      localisation: 'localisation',
      editImage: 'editImage'
    },
    server:{
      members:'members',
      membersLogin:'members/login',
      membersLogout:'members/logout',
      companies: 'companies',
      tags: 'tags',
      teams: 'teams',
      detailsType: 'details-type',
      jobPositions: 'job-positions',
      workInstructions: 'work-instructions',
      // image API is a separate services without /api/
      image: 'image' //,
      // membersGetMember: 'api/Members/getMember', // get member details
    }

    //,signup: 'signup'
}

export const API = {
  validateToken: (token, callback)=> {
    if (!token.userId) console.error('token exists but has no userId')
    if (!token.id) console.error('token exists but has no Foreign key for accessTokens (token id)')

    const builtUrl = urls.apiHeader + '/' + urls.server.members + '/' + token.userId + '/accessTokens/' + token.id
    // console.log(builtUrl)

    $.ajax({
      url: builtUrl,
      cache: false,
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        // console.log(builtUrl + " GET success")
        callback(data);
      },
      error: (xhr, status, err) => {
        // console.error(url, status, err.toString());
        // console.error(url);
        // console.error(status);
        callback(err);
      }
    });
  },

  createAction: (action, callback)=> {
    fetch(urls.apiHeader + action.path, {
      method: 'POST',
      body: JSON.stringify(action.data),
      contentType: 'application/json',
      headers: {
        'Authorization': action.token.id,
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      return response.json() // send to next .then()
    }).then((data)=>{
      console.log('create in database', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )},

  readAction: ( action, callback)=> {
    fetch(urls.apiHeader + action.path, {
      method: 'GET',
      headers: {
        'Authorization': action.token.id,
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      return response.json() // send to next .then()
    }).then((data)=>{
      // console.log('loadIdFromCollection', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )},
  readAction_VALIDATE_TOKEN: ( action, callback)=> {
    fetch(urls.apiHeader + action.path, {
      method: 'GET',
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      return response.json() // send to next .then()
    }).then((data)=>{
      // console.log('loadIdFromCollection', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )},
  readAction_NO_API_HEADER: ( action, callback)=> {
    fetch(urls.headerWithoutSlashAPI + action.path, {
      method: 'GET',
      headers: {
        'Authorization': action.token.id,
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      return response.json() // send to next .then()
    }).then((data)=>{
      // console.log('loadIdFromCollection', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )},

  updateAction: (action, callback)=> {
    fetch(urls.apiHeader + action.path, {
      method: 'PUT',
      body: JSON.stringify(action.data),
      contentType: 'application/json',
      headers: {
        'Authorization': action.token.id,
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      return response.json() // send to next .then()
    }).then((data)=>{
      console.log('updateAction in database', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )},

  deleteAction: (action, callback)=> {
    fetch(urls.apiHeader + action.path, {
      method: 'DELETE',
      contentType: 'application/json',
      headers: {
        'Authorization': action.token.id,
        'Content-Type': 'application/json'
      }
    }).then((response)=> {
      if (response.status >= 400){
        console.error("Bad response from server")
      }
      // NOTE there is no response.json in DELETE success
      return response // send to next .then()
    }).then((data)=>{
      console.log('deleteAction in database', data); // log response message, whether error or success
      return data
      }
    ).then((data)=>callback(data) // return response, whether error or success
  )}
}

export function postLoginToDatabase(url, json, callback) {

    $.ajax({
        url: urls.apiHeader + url,
        cache: false,
        type: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json',
        success: function(data) {
          console.log(url + " POST success")
          callback(data);
        },
        error: (xhr, status, err) => {
          // console.error(url, status, err.toString());
          // console.error(url);
          // console.error(status);
          callback(err);
        }
    });
}

// called in index.js, LogoutButton.js and Main.js TODO stardardize this method with fetch
export function membersLogout(url, token, callback){
  $.ajax({
      url: urls.apiHeader + url,
      cache: false,
      type: 'POST',
      headers: {
        'Authorization':token.id,
        'Content-Type':'application/json'
      },
      //data: json,
      contentType: 'application/json',
      success: function(data) {
        console.log(url + " POST success")
        callback(data);
      },
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
        console.error(url);
        console.error(status);
        console.error(err);
        callback(status);
      }
  });
}

export function uploadImage(url, token, payload, callback){
  let formData = new FormData();
  formData.append("file1", payload);
  $.ajax({
      url: urls.headerWithoutSlashAPI + url,
      cache: false,
      type: 'post',

      data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
      headers: {
        'Authorization':token.id
        //'Content-Type':'application/json'
      },
      //data: json,
      contentType: false,       // The content type used when sending data to the server.
      processData:false,        // To send DOMDocument or non processed data file it is set to false
      success: function(data) {
        console.log(url + " POST success")
        console.log(data)
        callback(data);
      },
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
        console.error(url);
        console.error(status);
        console.error(err);
        callback(status);
      }
  });
}
