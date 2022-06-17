import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { formHidden, squareChanged } from "../../actions/actions";
import "./squareForm.scss";

const SquareForm = () => {
  const visibility = useSelector((state) => state.formStatus);
  const squareId = useSelector((state) => state.squareId);
  let color = useSelector((state) => state.formColor);

  const [textState, setTextState] = useState("");
  const [colorState, setColorState] = useState("#111");
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(formHidden());
    setTextState("");
    setColorState(color);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = squareId;
    color = colorState;
    const text = () => {
      return textState.length > 10 ? textState.slice(0, 10) + "..." : textState;
    };
    dispatch(squareChanged(id, color, text()));
    onClose();
  };

  return (
    <div
      className="form-container"
      style={{ visibility: visibility, "background-color": color }}
    >
      <div className="subheader">functional</div>
      <h3 className="form-header">Modify this square:</h3>
      <form onSubmit={onSubmit}>
        <div className="wrapper">
          <label htmlFor="color">choose the color:</label> <br />
          <input
            type="color"
            name="color"
            id="color"
            className="color-panel"
            value={colorState}
            onChange={(e) => setColorState(e.target.value)}
          />
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
            value={textState}
            onChange={(e) => setTextState(e.target.value)}
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
