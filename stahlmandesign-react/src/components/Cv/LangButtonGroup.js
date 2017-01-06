import React from 'react';
import $ from 'jquery';
class LangButtonGroup extends React.Component {
  constructor() {
    // must call as first thing, like in other object-oriented languages, because we're extending a class and must execute parent functionality first
    super();
    // set inital state
    this.state = {
      activeKeyword: {
        en: 'active',
        fr: ''
      }
    };
  }
  render() {
    // instead of passing arguments, read properties using this.Header
    // NOTE: if props contain markup, there is a way to render it, although it is considered a potential security risk
    // https://facebook.github.io/react/tips/dangerously-set-inner-html.html
    // NOTE: onClick has to call local method to invoke parent prop method setLang.
    // if you trying to call this.props.setLang from onClick, you are trying to change state while it's trying to render
    return <div className="LangButtonGroup col-sm-3">
      <br/>
      <br/>
      <div className="btn-group sticky-button">
        <button
          type="button"
          className={"btn btn-default button-lang " + this.state.activeKeyword.en}
          onClick={this._handleClickEn.bind(this)}>EN</button>
        <button
          type="button"
          className={"btn btn-default button-lang " + this.state.activeKeyword.fr}
          onClick={this._handleClickFr.bind(this)}>FR</button>
      </div>
      <p className='LangButtonGroup-about'>
        {this.props.about.desc[this.props.lang]}
      </p>
      <p className='LangButtonGroup-about'>
        <strong>
        {this.props.about.stack.title[this.props.lang]}
        </strong>
      </p>
      <div className='LangButtonGroup-about'>
        {this.props.about.stack.list.map((item, i) => {
          return <li key={'LangButtonGroup-list-' + i}
              dangerouslySetInnerHTML={{__html:item.name[this.props.lang] + ": " + item.type[this.props.lang]}}>

          </li>
        })}
      </div>
    </div>
  }
  componentDidMount() {
    if (this.props.lang === 'en')
    this._handleClickEn(null); // null because calling dynamically without click
    if (this.props.lang === 'fr')
    this._handleClickFr(null); // null because calling dynamically without click


  }
  _handleClickEn(e) { // could eliminate e and just have () but showing how event can be detected
    //console.log(e.target)
    // NOTE could be refactored to require only one function that detects button-id
    // but could break if id changed to something else or eliminated
    // right now, no button ids needed
    this.setState({
      activeKeyword: {
        en: 'active',
        fr: ''
      }
    });
    this.props.setLang('en')
  }
  _handleClickFr() {
    this.setState({
      activeKeyword: {
        en: '',
        fr: 'active'
      }
    });
    this.props.setLang('fr')
  }
}
export default LangButtonGroup
