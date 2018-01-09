import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import History from '../history';


import Course from 'Modules/course/routers';

export default (
    <ConnectedRouter history={ History }>
        <Switch>
            { Course }
        </Switch>
    </ConnectedRouter>
);