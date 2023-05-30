import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
