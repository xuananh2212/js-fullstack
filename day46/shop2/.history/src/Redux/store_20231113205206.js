import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootRducer";
export const store = createStore(rootReducer);