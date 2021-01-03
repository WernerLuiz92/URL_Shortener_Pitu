import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// pitu.link/ -> HomePage
// pitu.link/:code -> RedirectPage
// pitu.link/:code/stats -> StatsPage

import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:code" component={RedirectPage} />
                <Route exact path="/:code/stats" component={StatsPage} />
                <Route exact path="/*" component={NotFoundPage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;