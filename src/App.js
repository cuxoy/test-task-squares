import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SquareItemsList from "./components/squareItemsList/SquareItemsList";
import SquareForm from "./components/squareForm/SquareForm";
import ClassSquareItemsList from "./classComponents/classSquareItemsList/ClassSquareItemList";
import ClassSquareForm from "./classComponents/classSquareForm/ClassSquareForm";
import ToggleComponents from "./components/toggleComponents/ToggleComponents";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ToggleComponents />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SquareItemsList />
                <SquareForm />
              </>
            }
          />
          <Route
            path="/class"
            element={
              <>
                <ClassSquareItemsList />
                <ClassSquareForm />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
