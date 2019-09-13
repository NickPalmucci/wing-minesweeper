import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer, null);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
