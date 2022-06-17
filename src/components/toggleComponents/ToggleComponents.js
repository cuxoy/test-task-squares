import { NavLink } from "react-router-dom";
import "./style.scss";
const ToggleComponents = () => {
  return (
    <div className="header">
      <NavLink
        end
        to="/"
        style={({ isActive }) => ({ "font-size": isActive ? "30px" : false })}
      >
        <div className="header__toggle">Functional Components</div>
      </NavLink>
      <NavLink
        end
        to="/class"
        style={({ isActive }) => ({ "font-size": isActive ? "30px" : false })}
      >
        <div className="header__toggle">Class Components</div>
      </NavLink>
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
