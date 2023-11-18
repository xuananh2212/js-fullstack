// kho chứa store
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import listReducer from './Reducers/listReducer';
import tasksReducer from './Reducers/tasksReducer';
import apiReducer from './Reducers/apiReducer';
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