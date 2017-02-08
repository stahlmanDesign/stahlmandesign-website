import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Infographics from './components/Infographics'
import NewsGraphics from './components/NewsGraphics'
import En5Minutes from './components/En5Minutes'
import JavaScript from './components/JavaScript'
import Flash from './components/Flash'
import Games from './components/Games'
import Animation from './components/Animation'
import Illustration from './components/Illustration'
import Music from './components/Music'
import December from './components/December'
import Nyt from './components/Nyt'
import Cv from './components/Cv/Cv'
import GoogleAllowIndexReact from './components/GoogleAllowIndexReact'

// import { urls } from './libraries/global'

import Page404 from './components/Page404'


export default(
    <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>

        <Route path={ '/infographics' } component={ Infographics } />
        <Route path={ '/newsgraphics' } component={ NewsGraphics } />
        <Route path={ '/en5minutes/1' } component={() => (<En5Minutes era='2005-2008' />)}/>
        <Route path={ '/en5minutes/2' } component={() => (<En5Minutes era='2006-2016' />)}/>
        <Route path={ '/javascript' } component={() => (<JavaScript/>)}/>
        <Route path={ '/javascript' } component={ JavaScript } />
        <Route path={ '/flash' } component={ Flash } />
        <Route path={ '/games' } component={ Games } />
        <Route path={ '/animation' } component={ Animation } />
        <Route path={ '/illustration' } component={ Illustration } />
        <Route path={ '/music' } component={ Music } />
        <Route path={ '/december' } component={ December } />
        <Route path={ '/nyt' } component={ Nyt } />
        <Route path={ '/cv' } component={ Cv } />
        <Route path={ '/googlee042d9479118b231.html' } component={ GoogleAllowIndexReact } />


        {/*
        <Route component={ CreateMember }>
          <Route path={ '/' + urls.client.membersCreate } />
        </Route>
        <Route component={ CreateCompany }>
          <Route path={ '/' + urls.client.companiesCreate } />
        </Route>
        <Route component={() => (<WiPrepareCRUD presentationType='create' />)}>
          <Route path={ '/' + urls.client.workInstructionsCreate } />
        </Route>

        <Route path={ '/' + urls.client.members } component={ MembersList } />
        <Route path={ '/' + urls.client.membersIdEdit } component={ EditMember } />

        <Route path={ '/' + urls.client.companies } component={ CompaniesList } />
        <Route path={ '/' + urls.client.companiesIdEdit } component={ EditCompany } />

        <Route path={ '/' + urls.client.teamsIdEdit } component={ EditTeams } />

        <Route path={ '/' + urls.client.workInstructions } component={ WiList } />
        <Route path={ '/' + urls.client.workInstructionsId } component={() => (<WiPrepareCRUD presentationType='view' />)}/>
        <Route path={ '/' + urls.client.workInstructionsIdEdit } component={() => (<WiPrepareCRUD presentationType='edit' />)}/>

        <Route path={ '/' + urls.client.login } component={ Login }/>

        <Route path={ '/' + urls.client.upload } component={ Upload }/>
        <Route path={ '/' + urls.client.video } component={ Video }/>
        <Route path={ '/' + urls.client.dnd } component={ SortableComponent }/>
        <Route path={ '/' + urls.client.icons } component={ Icons }/>
        <Route path={ '/' + urls.client.localisation } component={ Localisation }/>
        <Route path={ '/' + urls.client.editImage } component={ EditImage }/>

        */}
        <Route path='*' component={ Page404 }/>
  </Route>


)
// NOTE be very careful with react-router -- it does not work as you might think
// when a path has slashes such as /user/create it works differently than expected
// make sure to define component and then nested inside, the full url
// otherwise will attempt relative url, assigning different view than expected
