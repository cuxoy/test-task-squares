import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { formHidden, squareChanged } from "../../actions/actions";
// import "./squareForm.scss";

class ClassSquareForm extends Component {
    state = {
        textState:"",
        colorState:this.color
    }
  visibility = useSelector((state) => state.formStatus);
  squareId = useSelector((state) => state.squareId);
  color = useSelector((state) => state.formColor);

  //    [textState, setTextState] = useState("");
  //    [colorState, setColorState] = useState(color);
  dispatch = useDispatch();

  onClose = () => {
    this.dispatch(formHidden());
    this.setState({textState:"",
                    colorState:this.color
  })
  };

  onSubmit = (e) => {
    e.preventDefault();

    const color = e.target.color.value;
    const text =
      e.target.text.value.length > 10
        ? e.target.text.value.slice(0, 10) + "..."
        : e.target.text.value;

    this.dispatch(squareChanged(this.squareId, this.color, this.text));
    this.onClose();
  };

  return() {
    <div
      className="form-container"
      style={{ visibility: this.visibility, "background-color": this.color }}
    >
      <h3 className="form-header">Modify this square:</h3>
      <form onSubmit={this.onSubmit}>
        <div className="wrapper">
          <label htmlFor="color">choose the color:</label> <br />
          <input
            type="color"
            name="color"
            id="color"
            className="color-panel"
            value={this.colorState}
            onChange={(e) => this.setState(e.target.value)}
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
            value={this.textState}
            onChange={(e) => this.setState(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn">
            Submit
          </button>
          <div className="btn" onClick={() => this.onClose()}>
            Close
          </div>
        </div>
      </form>
    </div>;
  }
}
export default ClassSquareForm;
