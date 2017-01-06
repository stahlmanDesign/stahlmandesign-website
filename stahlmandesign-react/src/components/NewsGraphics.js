import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr, loadGoogleAnalytics } from '../libraries/utilities'
import $ from 'jquery'
import ReactGA from 'react-ga'; // https://www.npmjs.com/package/react-ga
ReactGA.initialize('UA-25169855-1'); //Unique Google Analytics tracking number

// import './NewsGraphics.css'

class NewsGraphics extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){
    // NOTE this is a hack because unveil is not loading in normal <script> tag in index.html, probably because of meteor. Used to work in Meteor 1.2.1, but not after upgrade to 1.3.4.2

    $.getScript( "http://cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js", function( data, textStatus, jqxhr ) {
      // console.log( data ); // Data returned
      // console.log( textStatus ); // Success
      // console.log( jqxhr.status ); // 200
      // console.log( "Load was performed." );

      $(".unveil-img").unveil(0, function () {
          $(this).load(function () {
              this.style.opacity = 1;
          });
      });
    });

  //$("#newsgraphics").addClass('active'); // #en5minutes = active
  getFlickr("72157600073936574"); // photoset id
  }

  render() {

    return (
      <div className='NewsGraphics '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>News graphics</h1>
      			<p>Most of these infographics were published in <em>The San Antonio Express-News, The Montreal Gazette, Toronto Star, Le Soleil, La Presse,</em> and the book <em>The Rescue of Jerusalem</em>, by Henri Aubin.</p>
      		</div>
      	</div>

      	<div className="container">
      		<div className="main-content">
      			<img className="loader" src="../img/loader.gif" />
      		</div>
      	</div>

      </div>

  );
  }
}
NewsGraphics.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default NewsGraphics;
