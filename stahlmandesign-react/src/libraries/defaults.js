export const newInstructionDefault = {
  name:""
}
export const newImageInfoDefault = {
  encryptedImgUrl:"", // uploaded image URL refreshed on server when WI loaded
  imgId:"", // uploaded image ID
  imgUrl:"http://placehold.it/100x100" // pasted URL
}
export const newDefaultColWidthLimits = { max: 7, min: 1, valueShouldSumTo: 12 } // for use in StepGroup to limit column adjustments, not to be used in model saved to Mongo

export const newStepDefault = {
  name: "",
  colWidth:{step: 3, instructions: 5, images: 4},
  instructions:[
    newInstructionDefault
  ],
  images:[
    newImageInfoDefault
  ]
}
export const newLoginDefault = {
  email:"",
  password:""
}
export const newTokenDefault = {
  // created: new Date(), // new Date().toISOString().substring(0, 19) // 2016-08-07T14:37:28
  subDomain:"",
  id:"", // token
  ttl:0, // 1209600
  created:"",
  userId:"",
  companyId:"",
  //, role="admin"
}

export const newMemberDefault = {
  // created: new Date(), // new Date().toISOString().substring(0, 19) // 2016-08-07T14:37:28
  companyId: '',
  firstName: '',
  lastName: '',
  // created: new Date(),
  email: '',
  password: '',
  isCompanyAdmin: false,
  isAppAdmin: false
}
export const newCompanyDefault = {
  created: new Date(), // new Date().toISOString().substring(0, 19) // 2016-08-07T14:37:28
  // updated: new Date(), // new Date().toISOString().substring(0, 19) // 2016-08-07T14:37:28
  name: '',
  subDomain: '',
  logoId: '',
  logoUrl: 'http://placehold.it/150x100', // https://www.ic.gc.ca/app/ccc/srch/media?estblmntNo=900654180000&graphFileName=IECHolden_Logo+B%26Wsm&applicationCode=AP&lang=eng
  managerId: ''
}

export const newWorkInstructionRevision = {
  version: 0,
  sourceVersion: null,
  title: '',
  authorId: '',
  deleted: false,
  steps: [
    newStepDefault // see Global.js
  ],
  details: {},
  numEdits: 0,
  ready: false,
  setFocus: '' // elem id. not saved in db, when creating new step/inst, cursor jumps there
}

export const newWorkInstructionDefault = {
  //companyId: '', // api will add this
  reference: '', // not required
  // revisionIdToShow: null, // when changing revisions
  // revisionIndexToShow: null, // when changing revisions
  //id: '', // created by DB
  // logoUrl: 'http://placehold.it/150x100',// use logo defined in company,
  teamId: null, // string
  tagAttributeIds: [
    {} // holds IDs of selected tags in WI
  ],
  _revisions: [
    newWorkInstructionRevision
  ]
}

export const newDefaultPartsListCard = { // default JSON for detailsType "PartsList"
  "imageUrl":"http://placehold.it/200x200",
  "imgId":"",
  "title":"",
  "description":"",
  "partNumber":"",
  "quantity":0,
}
