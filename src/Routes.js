import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

export default (
    <>
        <Route path="/" exact component={ Home }></Route>
        <Route path="/login" exact component={ Login }></Route>
    </>
)