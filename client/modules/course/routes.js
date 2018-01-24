import React from 'react';
import { Route } from 'react-router';
import List from './components/List';
import Item from './components/Item';

export default [
    <Route exact path="/courses" component={ List } key="index" />,
    <Route exact path="/courses/:id" component={ Item } key="item" />
];