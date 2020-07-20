import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import { createReduxStore } from 'store';

export default ({children,initialState = {}}) => {
    return(
       <Provider store={createReduxStore(initialState)} >
           {children}
       </Provider> 
    )
}