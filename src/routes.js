import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Main from './pages/Main'
import Box from './pages/Box'

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/box/:id' component={Box}/>
            <Route component={() => (<div>404 Not found </div>)} />

        </Switch>
    </BrowserRouter>
)

export default Routes