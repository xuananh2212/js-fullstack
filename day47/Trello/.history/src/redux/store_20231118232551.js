// kho chứa store
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import listReducer from './reducers/listReducer';
import tasksReducer from './reducers/tasksReducer';
import apiReducer from './reducers/apiReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
     {
          list: listReducer,
          tasks: tasksReducer,
          api: apiReducer

     }
)
export const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);