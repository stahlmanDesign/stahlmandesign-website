import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './Games.css'

class Games extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const { era } = this.props;

    return (
      <div className='Games '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Games</h1>
      			<p>I've always loved computer games that could be made by one person, which includes the classics like Pac-Man and Space Invaders, but also the more complex adventure games on home computers in the 80s. Making retro games isn't <em>just</em> about nostalgia.
      				It means you constrain yourself to some basic technology in order to stay focused on the game. What I do doesn't require a whole team of programmers, artists, musicians and writers.</p>
      			<p>Most of these games are <a href="http://impactjs.com">ImpactJS</a> (JavaScript) remakes originally programmed in <a href="http://en.wikipedia.org/wiki/QuickBASIC">Microsoft QuickBasic</a> and on the Apple IIe using <a href="http://en.wikipedia.org/wiki/Apple_ProDOS">ProDOS</a>				and the <a href="http://lostclassics.apple2.info/downloads/">Beagle Compiler</a> from 1988-1992. Some are incomplete.</p>
      			<p>The Dreamsong is the exception. It is a new game done in the style of <a href="http://blog.stahlmandesign.com/below-the-root-a-story-a-computer-game-and-my-lifelong-obsession/">Below the Root.</a> </p>
      			<p>These games mostly use the arrow keys, and X and C for action. They are not optimized for touch screens!</p>
      		</div>
      	</div>

      	<div className="container">
      		<div className="row">
      			<div className="col-xs-12 text-center">
      				<a href="http://www.thedreamsong.com/"><img className="game-img-preview" src="../img/dreamsong.png" /></a>
      				<h3><a href="http://www.thedreamsong.com">The Dreamsong</a> (2015) - beta v0.12.*</h3>
      			</div>
      		</div>
      		<hr/>
      		<div className="row">
      			<div className="col-sm-6 col-md-4">
      				<a href="http://www.justinstahlman.com/ffff.html"><img className="game-img-preview" src="../img/ffff.png" /></a>
      				<h4>Fee-Fi-Fo-Fum (<a href="http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=49932">Ludum Dare 33</a>, 2015)</h4>
      			</div>
      			<div className="col-sm-6 col-md-4">
      				<a href="http://www1.journaldemontreal.com/2014/04/jeu/"><img className="game-img-preview" src="../img/election.png" /></a>
      				<h4>Élections Québec (2014)</h4>
      			</div>
      			<div className="col-sm-6 col-md-4">
      				<a href="http://www1.journaldemontreal.com/2015/04/sauterelles/"><img className="game-img-preview" src="../img/sauterelles.png" /></a>
      				<h4>Sauterelles (2012)</h4>
      			</div>
      			<div className="col-sm-6 col-md-4">
      				<a href="../games/ttal/index.html"><img className="game-img-preview" src="../img/ttal.png" /></a>
      				<h4>To Tame A Land (1992/2012)</h4>
      			</div>
      			<div className="col-sm-6 col-md-4">
      				<a href="../games/sacredLamps/index.html"><img className="game-img-preview" src="../img/sacredLamps.png" /></a>
      				<h4>The Sacred Lamps (1990/2012)</h4>
      			</div>
      			<div className="col-sm-6 col-md-4">
      				<a href="../games/mountainbike/index.html"><img className="game-img-preview" src="../img/mountainbike.png" /></a>
      				<h4>Mountain Bike (2012)</h4>
      			</div>
      		</div>
      	</div>
      </div>

  );
  }
}
Games.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Games;
