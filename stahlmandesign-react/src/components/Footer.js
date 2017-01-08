import React from 'react'
// import { Link, browserHistory} from 'react-router'
// import { API, urls } from '../libraries/global'

// import './Footer.css'

class Footer extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {

    return (
      <footer className='Footer'>
        <div className="container">
          <p className="small">Infographics, 3D modelling, video games, animation, data visualisation, HTML5</p>
          <p className="small">Infographie, modélisation 3D, art, animation et visualisation des données</p>
          <p className="small">Проекты, 3Д-моделирование и анимация</p>
          Find me here:
          <a href="https://www.linkedin.com/in/justinstahlman"> LinkedIn, </a>
          <a href="https://github.com/stahlmanDesign">GitHub, </a>
          <a href="http://stackoverflow.com/users/5045055/stahlmandesign">StackOverflow, </a>
          <a href="http://impactjs.com/forums/user/stahlmanDesign">ImpactJS, </a>
          <a href="http://www.meetup.com/fr/members/96407332/">Meetup, </a>
          <a href="https://www.quora.com/Justin-Stahlman">Quora, </a>
          <a href="https://3dwarehouse.sketchup.com/by/stahlmandesign">3D Warehouse, </a>

          <a href="https://twitter.com/jstahlman">Twitter, </a>
          <a href="http://www.flickr.com/people/stahlmandesign/">Flickr, </a>
          <a href="https://soundcloud.com/jstahlman/">SoundCloud, </a>
          <a href="https://vimeo.com/stahlmandesign">Vimeo </a>

          <p>I accept Bitcoin: <strong>1CZM6wQrtt4biuomqNiv2zNEbFhyRjftuB</strong></p>

          <p>This website is a single-page application running on Node.js and MongoDB, made with React.js</p>

          <p>©2004-2017 Justin stahlman</p>
        </div>

      </footer>

  );
  }
}
Footer.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Footer;
