import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FunctionPage from "./pages/FunctionPage";
import ClassPage from "./pages/ClassPage";
import squares from "./mocks/content.json";
import { loadSquaresMiddleware } from "./actions/actions";
import ToggleComponents from "./components/toggleComponents/ToggleComponents";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSquaresMiddleware(squares.squares));
  }, []);
  const selectedPage = useSelector((state) => state.componentType);

  return (
    <>
      <Router>
        <ToggleComponents />
        <Routes>
          <Route
            path="/"
            element={
              selectedPage === "class" ? (
                <Navigate to="/class" />
              ) : (
                <FunctionPage />
              )
            }
          />
          <Route
            path="/class"
            element={
              selectedPage === "function" ? <Navigate to="/" /> : <ClassPage />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
