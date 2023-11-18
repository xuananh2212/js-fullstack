// kho chứa store
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { trelloList } from './reducers/trelloList';
import { trelloTask } from './reducers/trelloTask';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
     {

     }
)
console.log([rootReducer]);

//  composeWithDevTools(applyMiddleware(thunk)
export const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);