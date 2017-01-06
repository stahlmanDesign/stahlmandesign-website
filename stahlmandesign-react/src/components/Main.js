// react
import React from 'react'
import { Link, browserHistory } from 'react-router'

// components
// import NavigationBar from './HorizontalMenus/NavigationBar'
import Loading from './Loading'
// import SidebarMenu from './SidebarMenu/SidebarMenu'

// libraries
import { urls, API } from '../libraries/global'
import { isMobileSize, clickMenuButton } from '../libraries/utilities'
import { intercom } from '../libraries/statistics'
import { LS } from '../libraries/localStorage'
// import { AC_changeLanguage } from '../actions/actionCreators'

import dataDiaryLogo from '../images/data-diary-logo.svg'

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

        <div id="navbar" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a id="home" className="navbar-brand" href="/">Stahlman Design</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">

                <li id="infographics" className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Infographics <b className="caret"></b></a>
                  <ul className="dropdown-menu">

                    <li><a href="/newsgraphics">News graphics</a></li>
                    <li><a href="/en5minutes/1">« En 5 minutes » old</a></li>
                    <li><a href="/en5minutes/2">« En 5 minutes » new</a></li>
                  </ul>
                </li>

                <li id="web" className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Web <b className="caret"></b></a>
                  <ul className="dropdown-menu">

                    <li><a href="/javascript">HTML5 (JavaScript, CSS, Node)</a></li>
                    <li><a href="/flash">Flash (Interactive graphics, AS3)</a></li>
                  </ul>
                </li>

                <li id="games"><a href="/games">Games</a></li>
                <li id="animation"><a href="/animation">Animation</a></li>
                <li id="illustration"><a href="/illustration">Illustration</a></li>
                <li id="music"><a href="/music">Music</a></li>
                <li id="blog"><a href="//blog.stahlmandesign.com">Blog</a></li>
              </ul>
              <form className="navbar-form navbar-right"></form>
            </div>

          </div>
        </div>

<br/>
<br/>

          {/* NOTE all content except menu bar rendered in div below, using react-router */}
          <div className='app-pages'>
            {/*this.props.children*/}
            {React.cloneElement(this.props.children, this.props)}
            {/* this cloneElement command makes props available to all child components*/}
          </div>
          <hr/>
            <footer>
          		<div className="container">
          			<p className="small">Infographics, 3D modelling, video games, animation, data visualisation, HTML5</p>
          			<p className="small">Infographie, modélisation 3D, art, animation et visualisation des données</p>
          			<p className="small">Проекты, 3Д-моделирование и анимация</p>
          			Find me here:
          			<a href="https://www.linkedin.com/in/justinstahlman">LinkedIn</a>,
          			<a href="https://github.com/stahlmanDesign">GitHub</a>,
          			<a href="http://stackoverflow.com/users/5045055/stahlmandesign">StackOverflow</a>,
          			<a href="http://impactjs.com/forums/user/stahlmanDesign">ImpactJS</a>,
          			<a href="http://www.meetup.com/fr/members/96407332/">Meetup</a>,
          			<a href="https://www.quora.com/Justin-Stahlman">Quora</a>,
          			<a href="https://3dwarehouse.sketchup.com/by/stahlmandesign">3D Warehouse</a>,

          			<a href="https://twitter.com/jstahlman">Twitter</a>,
          			<a href="http://www.flickr.com/people/stahlmandesign/">Flickr</a>,
          			<a href="https://soundcloud.com/jstahlman/">SoundCloud</a>,
          			<a href="https://vimeo.com/stahlmandesign">Vimeo</a>

          			<p>I accept Bitcoin: <strong>1CZM6wQrtt4biuomqNiv2zNEbFhyRjftuB</strong></p>

          			<p>This website is a single-page application running on Node.js and MongoDB, made with React.js</p>

          			<p>©2004-2017 Justin stahlman</p>
          		</div>

          	</footer>

      </div>
    )
  }

}
Main.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Main
