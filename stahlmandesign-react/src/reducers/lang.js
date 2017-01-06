const lang = (state = '', action) => {
  // console.log('lang reducer: lang will change to ', action.lang)
  switch(action.type){
    case 'CHANGE_LANGUAGE':
      // ...state // copy state
      // , {} add other object
      return {
        lang: action.lang
      }
    default:
      return state;
  }
}
export default lang
