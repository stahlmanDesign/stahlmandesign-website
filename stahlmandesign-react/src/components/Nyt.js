import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './Nyt.css'

class Nyt extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const processedUrl = ''

    return (
      <div className='Nyt '>
        <p>&nbsp;</p>
      	<div className="container">
      		<div id="content">
      			<form>
      				<div className="form-group">
      					<label htmlFor="url" id="urllabel">URL</label>
      					<input id="url" name="submittedUrl" className="form-control" placeholder="http://..." ></input>
      				</div>
      				<div className="form-group">
      					<div className="checkbox">
      						<label>

      							<input id="urlparams" name="urlparams" type="checkbox" checked={ true } onChange={ this.handleHasUrlParams }/>
                    {'Sans params'}
                </label>
      					</div>

      					<div className="checkbox">
      						<label>

      							<input id="pagewantedall" name="pagewantedall" type="checkbox" checked={ true } onChange={ this.handlePageWantedAll }/>
                    {'?pagewanted=all'}
                </label>
      					</div>
      					<button type="submit" className="btn btn-warning" id="savebutton">OK</button>
      				</div>
      			</form>
      		</div>

      		<Link to={ processedUrl }>{ processedUrl }</Link>

      	</div>
      </div>

  );
  }
}
Nyt.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Nyt;
