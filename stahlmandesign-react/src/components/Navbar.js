import React from 'react'
// import { Link, browserHistory} from 'react-router'
// import { API, urls } from '../libraries/global'

// import './Navbar.css'

class Navbar extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {

    return (
      <div id="navbar" className="Navbar navbar navbar-default navbar-fixed-top">
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
              <li id="blog"><a href="/cv">CV</a></li>
            </ul>
            <form className="navbar-form navbar-right"></form>
          </div>

        </div>
      </div>

  );
  }
}
Navbar.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Navbar;
