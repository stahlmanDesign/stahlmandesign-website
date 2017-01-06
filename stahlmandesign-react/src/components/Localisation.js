import React from 'react'

class Localisation extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  render (){

    return(
    <div className='container'>
      <pre>
      { JSON.stringify(this.Index.state.localisation, null, 2)}
      </pre>
    </div>
    )
  }
}
Localisation.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Localisation
