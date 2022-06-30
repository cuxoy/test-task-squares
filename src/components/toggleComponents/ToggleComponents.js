import { useDispatch } from "react-redux";
import { componentLoad } from "../../actions/actions";
import FunctionPage from "../../pages/FunctionPage";
import ClassPage from "../../pages/ClassPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";

const ToggleComponents = () => {
  const dispatch = useDispatch();

  const onToggleComponents = (e) => {
    if (e.target.id === "function") {
      dispatch(componentLoad("function"));
    } else {
      dispatch(componentLoad("class"));
    }
  };

  return (
    <div className="header">
      <label htmlFor="class">class</label>
      <input
        type="radio"
        name="radio"
        id="class"
        onChange={(e) => onToggleComponents(e)}
      />
      <label htmlFor="function">function</label>

      <input
        type="radio"
        name="radio"
        id="function"
        defaultChecked
        onChange={(e) => onToggleComponents(e)}
      />
      <a
        href="https://github.com/cuxoy/test-task-squares"
        className="header__link"
        target="_blank"
      >
        Check Repository
      </a>
    </div>
  );
};
export default ToggleComponents;
