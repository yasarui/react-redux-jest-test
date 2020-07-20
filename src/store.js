import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
export const createReduxStore = (intialState) => {
    return createStore(reducers,intialState, composeWithDevTools(applyMiddleware(thunk)));
}