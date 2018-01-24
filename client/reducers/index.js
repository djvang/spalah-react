import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const reducers = Object.assign(
    {
        form: formReducer,
    },
);

export default combineReducers(reducers);
