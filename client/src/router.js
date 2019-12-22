import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import {
    StreamList,
    StreamNew,
    StreamView,
    StreamShow,
    StreamDelete
} from './components/streams'

const Router = () => (
    <BrowserRouter>
        <Navigation />
        <Route
            exact
            path="/"
            component={ StreamList }
        />
        <Route
            exact
            path="/new"
            component={ StreamNew }
        />
        <Route
            exact
            path="/view"
            component={ StreamView }
        />
        <Route
            exact
            path="/show"
            component={ StreamShow }
        />
        <Route
            exact
            path="/delete"
            component={ StreamDelete }
        />
    </BrowserRouter>
)

export default Router