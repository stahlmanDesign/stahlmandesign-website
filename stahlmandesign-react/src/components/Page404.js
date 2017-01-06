import React from 'react';
import iconEngrenages from '../images/engrenages.png';

class Page404 extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  render(){
    return <div className="text-center">
      <img src={ iconEngrenages } alt="icon engrenages" />
      <h1>{this.localisation.PageNotFound[this.Index.state.lang]}</h1>
      <p>{this.localisation.ThePageYouRequestedWasNotFound[this.Index.state.lang]}</p>
    </div>
  }
}

Page404.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Page404
