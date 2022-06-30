import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduser from "../reduсers/reduсer";

const store = createStore(
  reduser,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
