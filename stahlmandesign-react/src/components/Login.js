import React from 'react';
import { urls, postLoginToDatabase, newLoginDefault, getSubDomainDotDomain, API } from '../libraries/global';
import InputFieldOrCheckbox from './GeneralInput/InputFieldOrCheckbox'
import { LS } from '../libraries/localStorage'
import { intercom } from '../libraries/statistics'
import { clickMenuButton, handleLoginButtonDisabled } from '../libraries/utilities'

import { Notification } from 'react-notification'; // https://github.com/pburtchaell/react-notification

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      numFailedLoginAttempts: 0,
      submitSuccess:false
    }
  }
  componentWillMount() {
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentWillUnmount(){
    if (this.successTimer) clearTimeout(this.successTimer);
  }
  componentDidMount(){
    handleLoginButtonDisabled(this.Index)
  }
  render() {
    return <div className="Login container">
      <h1>{ this.localisation.MemberLogin[this.Index.state.lang] }</h1>

      <form
        ref={ 'form' /* NOTE by wrapping in a form tag we can use the enter to on submit */ }
        name="memberForm">
        <InputFieldOrCheckbox
          inputType='email'
          refTag='email'
          stateKeyname='email'
          stateObject='login'
          localisationLabel={this.localisation.EnterTheEmailUsedToSignUp[this.Index.state.lang]}
          localisationPlaceholder={this.localisation.ExampleEmailLogin[this.Index.state.lang]}/>
        <div className="row"></div>

        <InputFieldOrCheckbox
          inputType='password'
          refTag='password'
          stateKeyname='password'
          stateObject='login'
          localisationLabel={this.localisation.Password[this.Index.state.lang]}
          localisationPlaceholder={this.localisation.ExamplePassword[this.Index.state.lang]}/>
        <div className="row"></div>

        <hr/>
        <div className="col-sm-6 col-sm-offset-3">

          <button
            id={'login-button'}
            ref={'login-button'}
            type="submit"
            className={'btn pull-right ' + (this.Index.state.wiHasRequiredFields === false ? ' btn-default disabled ' : ' btn-success ')  }
            onClick={this.handleSubmit}>
            { this.localisation.Login[this.Index.state.lang] }
          </button>
          <br/>
          <Notification
            isActive={ this.state.submitSuccess }
            message={<div className='text-center'><i className="fa fa-3x fa-check-circle" aria-hidden="true"></i></div> /* https://github.com/pburtchaell/react-notification */ }
            activeBarStyle={{ /* while active */ zIndex:'1', backgroundColor:'#5cb85c',position:'relative',width:'5em',height:'5em',borderRadius:'100%'}}
            barStyle={{ /* entering and exiting */ zIndex:'1', backgroundColor:'#5cb85c',top:'50%',height:'5em'}}
            />
          <Notification
            isActive={ this.state.error }
            message={<div className='text-center'><i className="fa fa-3x fa-minus-circle" aria-hidden="true"></i></div> /* https://github.com/pburtchaell/react-notification */ }
            activeBarStyle={{ /* while active */ zIndex:'1', backgroundColor:'firebrick',position:'relative',width:'5em',height:'5em',borderRadius:'100%'}}
            barStyle={{ /* entering and exiting */ zIndex:'1', backgroundColor:'firebrick',position:'relative',width:'5em',height:'5em',borderRadius:'100%'}}
            />
            { this.state.error
              ? <p style={{color:'firebrick'}}>{ this.localisation.IncorrectEmailPasswordCombination[this.Index.state.lang] }</p>
              : <span></span>
            }
            { this.state.error && this.state.numFailedLoginAttempts > 1
              ? <p style={{color:'firebrick'}}>{ this.localisation.ErrorLoggingInTo[this.Index.state.lang]}<strong> { getSubDomainDotDomain() }</strong></p>
              : <span></span>
            }
        </div>
      </form>
    </div>
  }
  // loadLatestMemberDetails =(token, callback)=>{
  //   const action = {
  //     type: 'LOAD_MEMBER_DETAILS',
  //     path: '/' + urls.server.membersGetMember,
  //     token: token,
  //     data: {}
  //   }
  //   API.readAction_NO_API_HEADER( action, (memberDetailsResponse)=>{
  //     if (memberDetailsResponse.error){
  //       console.error('API.readAction_NO_API_HEADER memberDetailsResponse.error', memberDetailsResponse.error)
  //     }else{
  //       console.info('API.readAction_NO_API_HEADER memberDetailsResponse success')
  //       if (callback) callback(memberDetailsResponse)
  //     }
  //   });
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    // TODO validation // https://prometheusresearch.github.io/react-forms/examples/basic.html

    if (this.Index.state.wiHasRequiredFields === false) { return }

    postLoginToDatabase( '/' + urls.server.membersLogin, this.Index.state.login, (tokenResponse)=> {
      if (!tokenResponse.id) {
        this.setState({error: true}); // show login error message, TODO show 'reset passord?'
        console.error('Either bad email or password, or logging into wrong sub domain. If server crashed, possibly wrong companyId / userId combination internally')
        this.setState({numFailedLoginAttempts : this.state.numFailedLoginAttempts + 1 })
        return;
      }
      const token = tokenResponse;
      this.setState({error: false}); // remove error warning even if we are about to redirect to logged in state
      this.Index.setState({ login: newLoginDefault }, ()=>{ // clear email and password because logged in
        LS.saveToken(token); // save token on machine in local storage so don't have to login in every time reload screen
        LS.saveLanguage(this.Index.state.lang); // save language preference at login in addition to each time it is changed


            this.setState({submitSuccess:true}, ()=>{
              this.successTimer = setTimeout( ()=> {
                this.setState({submitSuccess:false});
              },1200);
            });

            // To send user data to Intercom later, i.e. when a visitor signs up
            // or when a logged-out user signs in, call the update function with the user data:
            if (tokenResponse.member.email){
              intercom.update(tokenResponse)
            }

            const action = {
              type: 'LOAD_TEAM_TAGS',
              path: '/' + urls.server.tags,
              token: token
            }
            API.readAction( action, (loadTagsResponse)=> {
              if (loadTagsResponse.error){
                console.error('API.readAction loadTagsResponse.error', loadTagsResponse.error)
              }else{
                console.info('API.readAction loadTagsResponse success')
                this.Index.setState({tags: loadTagsResponse}, ()=>{
                  // finally set token to master state after waiting for local storage to save
                  setTimeout( ()=>{ // localStorage does not have a callback function so use setTimeout to wait for local storage to save
                    this.Index.setState({ token: token }, ()=>{ //save token last because will alter how Home is rendered
                      console.info('Token set in app state');
                        if (!this.Index.state.sidebarMenu.isOpen) {
                          console.log('this.Index.state.sidebarMenu.isOpen = ' + this.Index.state.sidebarMenu.isOpen)
                          console.log('Attempt to open because logged in')
                          clickMenuButton(this.Index.state.sidebarMenu,'open','Login set token in app state'); // simulate click to close
                        }
                      // NOTE now that authorized, view will change so no further steps needed to clear form or show success message etc.
                    });
                  },500);
                });
              }
            });
      });
    });
  }
}
Login.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Login
