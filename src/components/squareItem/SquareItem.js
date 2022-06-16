import { useDispatch } from "react-redux";
import { formVisible } from "../../actions/actions";
import "./style.scss";

const SquareItem = ({ id, color, text }) => {
  const dispatch = useDispatch();

  const onFormOpen = () => {
    dispatch(formVisible(id));
  };

  return (
    <div
      key={id}
      className="square-item"
      style={{ "background-color": `${color}` }}
      onClick={onFormOpen}
    >
      {text}
    </div>
  );
};
export default SquareItem;
