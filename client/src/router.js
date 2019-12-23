import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Spinner from './components/common/Spinner'
const StreamList = React.lazy(() => import('./components/streams/StreamList'))
const StreamDelete = React.lazy(() => import('./components/streams/StreamDelete'))
const StreamNew = React.lazy(() => import('./components/streams/StreamNew'))
const StreamShow = React.lazy(() => import('./components/streams/StreamShow'))
const StreamView = React.lazy(() => import('./components/streams/StreamView'))

const Router = () => (
    <BrowserRouter>
        <Navigation />
        <Suspense fallback={ <Spinner /> }>
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
        </Suspense>
    </BrowserRouter>
)

export default Router