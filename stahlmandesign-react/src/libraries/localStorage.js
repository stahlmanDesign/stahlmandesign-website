export const localStorage = {
  isCapable: function() {
    return !(typeof(window.localStorage) === 'undefined');
  },
  isSet: function(key) {
    return !(this.get(key) === null);
  },
  initUnset: function(key, value) {
   if (this.get(key) === null) this.set(key, value);
  },
  get: function(key) {
    if (!this.isCapable()) return null;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return window.localStorage.getItem(key);
    }
  },
  getInt: function(key) {
    return ~~ this.get(key);
  },
  getFloat: function(key) {
    return parseFloat(this.get(key));
  },
  getBool: function(key) {
    return !!this.get(key);
  },
  key: function(n) {
    return this.isCapable()
    ? window.localStorage.key(n)
    : null;
  },
  set: function(key, value) {
    if (!this.isCapable()) return null;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      //console.log("setting " + value)
    } catch (e) {
      // depending on browser, a message like QUOTA_EXCEEDED_ERR, NS_ERROR_DOM_QUOTA_REACHED, QuotaExceededError, W3CException_DOM_QUOTA_EXCEEDED_ERR
      //if (e == QUOTA_EXCEEDED_ERR)
      console.log('localStorage quota exceeded?');
    }
  },
  setHighest: function(key, value) {
    if (value > this.getFloat(key)) this.set(key, value);
  },
  remove: function(key) {
    if (!this.isCapable()) return null;
    window.localStorage.removeItem(key);
  },
  clear: function() {
    if (!this.isCapable()) return null;
    window.localStorage.clear();
  }
}

// local storage is much like a cookie but more modern and better supported (and can save more data)
export const LS = {
  saveLanguage: (lang)=>{
    localStorage.set('jitbase-lang', lang); // save language preference in local storage
  },
  saveToken: (token)=>{
    localStorage.set('jitbase-login-token', token); // save token in local storage
  },
  saveMemberDetails: (memberDetails)=>{
    localStorage.set('jitbase-login-memberDetails', memberDetails); // save memberDetails in local storage
  },
  getLanguage: (callback)=>{
    if (localStorage.isSet("jitbase-lang")) {
      const result = JSON.parse(localStorage.get("jitbase-lang"));
      if (callback) callback(result);
    }
  },
  getSavedLinks: (callback)=>{
    if (localStorage.isSet("savedLinks")) {
      const result = JSON.parse(localStorage.get("savedLinks"));
      if (callback) callback(result);
    }
  },
  saveSavedLinks: (savedLinks)=>{
    localStorage.set('savedLinks', savedLinks); // save array in local storage
  },
  getToken: (callback)=>{
    if (localStorage.isSet("jitbase-login-token")) {
      const result = JSON.parse(localStorage.get("jitbase-login-token"));
      if (callback) callback(result);
    }else{
      console.log('localStorage.isSet("jitbase-login-token") = ' + localStorage.isSet("jitbase-login-token"))
      if (callback) callback(null);
    }
  },
  clearToken: ()=>{
    localStorage.remove("jitbase-login-token")
  },
  getMemberDetails: (callback)=>{
    if (localStorage.isSet("jitbase-login-memberDetails")) {
      const result = JSON.parse(localStorage.get("jitbase-login-memberDetails"));
      if (callback) callback(result);
    }else{
      console.log('localStorage.isSet("jitbase-login-memberDetails") = ' + localStorage.isSet("jitbase-login-memberDetails"))
      if (callback) callback(null);
    }
  }
}
