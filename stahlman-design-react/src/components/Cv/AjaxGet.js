import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import Header from '../jsx/Header.jsx';
import LangButtonGroup from '../jsx/LangButtonGroup.jsx';
import JobBox from '../jsx/JobBox.jsx';
// a component is similar to a JavaScript function
class AjaxGet extends React.Component {
    constructor() {
        // must call as first thing, like in other object-oriented languages, because we're extending a class and must execute parent functionality first
        super();
        // set inital state
        this.state = {
            data: {},
            name: "",
            title: {},
            email: {},
            phone: {},
            website: {},
            note: {},
            lang: "fr",
            jobs: [],
            skills: [],
            ajaxRequest: {} // save this to use componentWillUnmount to cancel any outstanding requests before the component is unmounted.
        };
    }
    render() {
        return <Header
          name={this.state.name}
          title={this.state.title}
          email={this.state.email}
          phone={this.state.phone}
          website={this.state.website}
          note={this.state.note}
          lang={this.state.lang}/>
    }
    componentDidMount() {
        $.ajax({
            method: 'GET',
            url: this.props.url,
            dataType: "json",
            cache: false,
            success: (data) => {
                this._gotData(data) // arrow function allows use of lexical this. No need to .bind(this) or set context:this in ajax params
                console.log("success")
            },
            error: (e) => {
                console.error(this.props.url, status, err.toString());
            }
        });
        // test that reactive state change works
        // setTimeout( () => {
        //     this.setState({lang: "fr"})
        // }, 2000)
    }
    _setLang(enOrFr){
      this.setState({lang:enOrFr})
    }
    _gotData(data) {
        this.setState({JobBox: data.JobBox});
        this.setState({name: data.name})
        this.setState({title: data.title})
        this.setState({email: data.email})
        this.setState({website: data.website})
        this.setState({phone: data.phone})
        this.setState({note: data.note})

        ReactDOM.render(
          <LangButtonGroup lang={this.state.lang} setLang={this._setLang.bind(this)}/>,document.getElementById('lang-button-group')
        );
        ReactDOM.render(
          <JobBox data={this.state.data.JobBox} setLang={this._setLang.bind(this)}/>,document.getElementById('JobBox')
        );
        console.log(data)
    }
    componentWillUnmount() {
        this.setState({ajaxRequest: null})
    }
}


export default AjaxGet
