import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './config/history'
import Navigation from './components/layout/Navigation'
import Spinner from './components/common/Spinner'
const StreamList = React.lazy(() => import('./components/streams/StreamList'))
const StreamDelete = React.lazy(() => import('./components/streams/StreamDelete'))
const StreamNew = React.lazy(() => import('./components/streams/StreamNew'))
const StreamShow = React.lazy(() => import('./components/streams/StreamShow'))
const StreamView = React.lazy(() => import('./components/streams/StreamView'))

const AppRouter = () => (
    <Router history={ history }>
        <Navigation />
        <Suspense fallback={ <Spinner /> }>
            <Switch>
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
                    path="/edit/:id"
                    component={ StreamView }
                />
                <Route
                    exact
                    path="/show/:id"
                    component={ StreamShow }
                />
                <Route
                    exact
                    path="/delete/:id"
                    component={ StreamDelete }
                />
            </Switch>
        </Suspense>
    </Router>
)

export default AppRouter