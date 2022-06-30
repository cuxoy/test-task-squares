import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { formHidden, changeSquare } from "../../actions/actions";
import textSlide from "../../utils/textSlider";
import "./squareForm.scss";
import { DebounceInput } from "react-debounce-input";

const SquareForm = () => {
  const dispatch = useDispatch();

  const activeSquareId = useSelector((state) => state.activeSquareId);
  const selectedSquare = useSelector((state) => state.squares)[activeSquareId];

  let isFormVisible = useSelector((state) => selectedSquare)
    ? "visible"
    : "hidden";

  let color = selectedSquare ? selectedSquare.color : null;
  let text = selectedSquare ? textSlide(selectedSquare.title) : null;

  const [textState, setTextState] = useState("");
  const [colorState, setColorState] = useState("#fff");

  const onClose = () => {
    dispatch(formHidden());
    setTextState("");
    setColorState(color);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = activeSquareId;
    text = textSlide(textState);
    color = colorState;
    const squareChanged = { id, color, text };
    dispatch(changeSquare(squareChanged));
    onClose();
  };

  return (
    <div
      className="form-container"
      style={{ visibility: isFormVisible, "background-color": color }}
    >
      <div className="subheader">functional</div>
      <h3 className="form-header">Modify this square:</h3>
      <form onSubmit={onSubmit}>
        <div className="wrapper">
          <label htmlFor="color">choose the color:</label> <br />
          <DebounceInput
            minLength={1}
            ebounceTimeout={300}
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
          <DebounceInput
            element="textarea"
            className="form-textarea"
            minLength={1}
            ebounceTimeout={300}
            type="text"
            name="text"
            id="text"
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
