import { createStore } from "redux";
import reduser from "../reduсers/reduсer";

const store = createStore(
  reduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
