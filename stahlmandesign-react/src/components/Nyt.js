import React from 'react'
import { Link } from 'react-router'
import { LS } from '../libraries/localStorage'
// import { UT, getFlickr } from '../libraries/utilities'

import './Nyt.css'

class Nyt extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      savedLinks: [],
      url:''
    }
  }
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){
    LS.getSavedLinks( (data)=>{
      console.log("loaded data",data)
      this.setState({ savedLinks: data })
    })
  }
  handleUrl =(e)=>{
    console.log(e.target.value)
    this.setState({ url: e.target.value })
  }
  handleSubmit =(e)=>{
    e.preventDefault()

    let copiedState = JSON.parse(JSON.stringify(this.state.savedLinks))
    copiedState.push(this.state.url)
    this.setState({ savedLinks:copiedState })
    console.log('submitted',this.state.url)
    this.setState({ url:'' })
    LS.saveSavedLinks( copiedState)

    // LS.getSavedLinks( (data)=>{
    //   console.log("loaded data",data)
    //   this.setState({ savedLinks: data })
    // })
  }
  handleRemoveLink =(index, e)=>{
    let copiedState = JSON.parse(JSON.stringify(this.state.savedLinks))
    copiedState.splice(index,1)
    this.setState({ savedLinks:copiedState })
    LS.saveSavedLinks( copiedState)
    // LS.getSavedLinks( (data)=>{
    //   console.log("loaded data",data)
    //   this.setState({ savedLinks: data })
    // })
  }
  render() {
    // if (this.state.savedLinks.length === 0) return <div></div>
    const processedUrls = this.state.savedLinks.map( (link,i)=>
      <li key={i}>
        <i className="fa fa-times-circle fa-lg remove-button" aria-hidden="true" onClick={ this.handleRemoveLink.bind(this,i) }></i>
        &nbsp;<Link to={ link } target='_blank'>{ link }</Link>
      </li>
    )

    return (
      <div className='Nyt '>
        <p>&nbsp;</p>
      	<div className="container">
      		<div id="content">
      			<form>
      				<div className="form-group">
      					<label htmlFor="url" id="urllabel">URL</label>
      					<input id="url" name="submittedUrl" className="form-control" placeholder="http://..." onChange={ this.handleUrl }/>
      				</div>
      				<div className="form-group">
      					<div className="checkbox">
      						<label>

      							<input id="urlparams" name="urlparams" type="checkbox" defaultChecked={ true } onChange={ this.handleHasUrlParams }/>
                    {'Sans params'}
                </label>
      					</div>

      					<div className="checkbox">
      						<label>

      							<input id="pagewantedall" name="pagewantedall" type="checkbox" defaultChecked={ true } onChange={ this.handlePageWantedAll }/>
                    {'?pagewanted=all'}
                </label>
      					</div>
      					<button type="submit" className="btn btn-warning" id="savebutton" onClick={ this.handleSubmit }>OK</button>
      				</div>
      			</form>
      		</div>

          <h3>RESULTS:</h3>
          <ul>{ processedUrls.reverse() }</ul>

      	</div>
      </div>

  );
  }
}
Nyt.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Nyt;
