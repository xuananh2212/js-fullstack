import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootRducer";
const store = createStore(rootReducer);
export { store }