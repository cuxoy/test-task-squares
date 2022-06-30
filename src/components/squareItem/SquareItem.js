import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { formVisible } from "../../actions/actions";
import "./style.scss";

const SquareItem = ({ id, color, text }) => {
  const dispatch = useDispatch();

  const handleFormVisibility = () => {
    dispatch(formVisible(id));
  };

  return (
    <div
      id={id}
      className="square-item"
      style={{ "background-color": `${color}` }}
      onClick={handleFormVisibility}
    >
      {text}
    </div>
  );
};
export default SquareItem;
