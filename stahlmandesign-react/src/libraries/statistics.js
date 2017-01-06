export const intercom = {
    init: function(token) {
      window.Intercom("boot", {app_id: "srahnbgm"});
    },
    boot: function(token) {
      window.intercomSettings = {
        app_id: "srahnbgm",
        name: token.member.firstName + ' ' + token.member.lastName, // Full name
        subDomain: token.subDomain, // company.jitbase.com
        user_id: token.member.userID, // mongoID
        email: token.member.email, // Email address
        created_at: Date.parse(token.member.created) / 1000, // Signup date as a Unix timestamp
        url: window.location.href
      }
        window.Intercom("boot", window.intercomSettings);
        console.info('stats: boot')
    },
    update: function(token) {
      window.intercomSettings = {
        app_id: "srahnbgm",
        name: token.member.firstName + ' ' + token.member.lastName, // Full name
        subDomain: token.subDomain, // company.jitbase.com
        user_id: token.member.userID, // mongoID
        email: token.member.email, // Email address
        created_at: Date.parse(token.member.created) / 1000, // Signup date as a Unix timestamp
        url: window.location.href
      }
        window.Intercom("update", window.intercomSettings);
        console.info('stats: update')
    },
    viewOrRouteChange: function(){
      window.Intercom("update");
      console.info('stats: viewOrRouteChange')
    },
    userDataChange: function(key, value){
      window.Intercom("update", {
        key: value // name: "Jane Smith"
      });
      console.info('stats: userDataChange', key, value)
      // console.log(key)
      // console.log(value)
    },
    logout: ()=>{
      window.Intercom("shutdown");
      console.info('stats: logout')
    },
    trackEvent: (eventDescription, optionalMetadata)=>{
      window.Intercom('trackEvent', eventDescription, optionalMetadata || {});
      console.info('stats: trackEvent = ',eventDescription)
    }
}
