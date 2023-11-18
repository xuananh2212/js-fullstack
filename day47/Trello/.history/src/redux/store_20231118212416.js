// kho chứa store
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import trelloList from './reducers/trelloList';
import trelloTasks from './reducers/trelloTasks';
import trelloApi from './reducers/trelloApi';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
     {
          trelloList,
          trelloTasks,
          trelloApi,

     }
)
export const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);