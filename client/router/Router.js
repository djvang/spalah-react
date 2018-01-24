import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import History from '../history';

import Layout from '../common/layout';
import Course from 'Modules/course/routes';
import School from 'Modules/school/routes';

export default (
    <ConnectedRouter history={ History }>
        <Switch>
            <Layout>
                { Course }
                { School }
            </Layout>
        </Switch>
    </ConnectedRouter>
);
