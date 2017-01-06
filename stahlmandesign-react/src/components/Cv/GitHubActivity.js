import React from 'react';
import $ from 'jquery'

class GitHubActivity extends React.Component {
  constructor(){
    super();
    this.state = {
      svgString:''
    }
  }
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: process.env.PUBLIC_URL + '/scrapedSVG.svg',
      dataType: "text",
      cache: false,
      success: (data) => {
        this.setState({svgString:data})
        console.log("success loading svg string")
      },
      error: (e) => {
        console.error(this.props.url, status, e.toString());
      }
    });


    // test that reactive state change works
    // setTimeout( () => {
    //     this.setState({lang: "fr"})
    // }, 2000)
  }
  render() {
    // explicitly build the SVG to be rendered here so we don't lose the NS
    const stringifiedSvg = this.state.svgString;
    return <div dangerouslySetInnerHTML={{
      __html: stringifiedSvg
    }}/>
  }
}
export default GitHubActivity
