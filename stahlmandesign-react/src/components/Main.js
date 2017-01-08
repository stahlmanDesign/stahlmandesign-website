// react
import React from 'react'
// import { Link, browserHistory } from 'react-router'

// components
// import NavigationBar from './HorizontalMenus/NavigationBar'
// import Loading from './Loading'
// import SidebarMenu from './SidebarMenu/SidebarMenu'

// libraries
// import { urls, API } from '../libraries/global'
// import { isMobileSize, clickMenuButton } from '../libraries/utilities'
// import { intercom } from '../libraries/statistics'
import { LS } from '../libraries/localStorage'

import Navbar from './Navbar'
import Footer from './Footer'
// import { AC_changeLanguage } from '../actions/actionCreators'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ready: false,
      isOpen: true
    }
  }
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
    this.initLoadSequence();
  }
  initLoadSequence =()=>{
    // LS.getToken( (localTokenResponse)=>{
    //   if (localTokenResponse !== null){
    //     console.info('Token exists in local storage. Proceed to validate token')
    //     this.validateToken(localTokenResponse)
    //   }else{
    //     console.info('No token in local storage. Proceed to login.')
    //     this.setState({ready: true}); // no login session found, so no profile loaded. Proceed to login
    //     browserHistory.push('/'); // navigate to root, was once in a setTimeout, don't know if this still sometimes needed
    //   }
    // });
  }

  getLanguage =()=>{
    LS.getLanguage( (langResponse)=>{
      if (langResponse){
        console.info('Language preference « ' + langResponse + ' » exists in local storage. Declare app ready')
        this.Index.setState({lang: langResponse}, ()=>{
          this.declareAppReady()
        });
      }else{
        this.declareAppReady()
      }
    });
  }
  declareAppReady =()=>{
    this.setState({ready: true}); // moved here instead of in componendDidMount beacause was firing ready before createWI was loaded and did not assign ownder to new WI if accessing direct URL
  }
  componentDidMount(){

  }
  render() {


    return (
      <div className='Main'>
        <div
          id={ 'hidden-on-mobile' /* bootstrap will hide this on mobile, so detect if this has hidden to know if in mobile size*/}
          className='hidden-xs'>
        </div>

        <Navbar />

        <br/>
        <br/>

          {/* NOTE all content except menu bar rendered in div below, using react-router */}
          <div className='app-pages'>
            {/*this.props.children*/}
            {React.cloneElement(this.props.children, this.props)}
            {/* this cloneElement command makes props available to all child components*/}
          </div>
          <hr/>
            <Footer/>

      </div>
    )
  }

}
Main.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Main
