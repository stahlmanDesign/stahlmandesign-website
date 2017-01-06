// const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
//
// function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }
//
// function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//       dispatch(increment());
//     }, 1000);
//   };
// }
//
// function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();
//
//     if (counter % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }

// redux tutorial
// what things does are app need to do

// change language action creator
export const changeLanguage = (lang) => {
  console.log(lang)
  return {
    type: 'CHANGE_LANGUAGE',
    lang // same as lang:lang in ES6
  }
}


// change page (handled by react-router)

// save WI

// load WIs
