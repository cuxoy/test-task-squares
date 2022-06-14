import { useDispatch, useSelector } from "react-redux";
import {
  formHidden,
  squareChanged
} from "../../actions/actions";
import "./squareForm.scss";

const SquareForm = () => {
  const dispatch = useDispatch();

  const visibility = useSelector((state) => state.formStatus);
  const squareId = useSelector((state) => state.squareId );
  const color = useSelector((state) => state.formColor);
  const state = useSelector((state) => state);

  const onClose = () => {
    dispatch(formHidden());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const color = e.target.color.value;
    const text =
      e.target.text.value.length > 10
        ? e.target.text.value.slice(0, 10) + "..."
        : e.target.text.value;
    dispatch(squareChanged(squareId,color,text));
    // onClose()
  };

  return (
    <div
      className="form-container"
      style={{ visibility: visibility, "background-color": color }}
    >
      <h3 className="form-header">Modify this square:</h3>
      <form onSubmit={onSubmit}>
        <div className="wrapper">
          <label htmlFor="color">choose the color:</label> <br />
          <input type="color" name="color" id="color" className="color-panel" />
          <br />
        </div>
        <div className="wrapper">
          <label htmlFor="text">enter the text:</label>
          <br />
          <textarea
            className="form-textarea"
            type="text"
            name="text"
            id="text"
            placeholder="enter the text"
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn">
            Submit
          </button>
          <div className="btn" onClick={() => onClose()}>
            Close
          </div>
        </div>
      </form>
    </div>
  );
};
export default SquareForm;
