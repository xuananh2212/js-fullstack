import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootRducer";
export default const store = createStore(rootReducer);