import { Component } from "react";
import { connect } from "react-redux";
import { formHidden, changeSquare } from "../../actions/actions";
import { DebounceInput } from "react-debounce-input";
import textSlide from "../../utils/textSlider";
import "../../components/squareForm/squareForm.scss";

class ClassSquareForm extends Component {
  state = {
    textState: "",
    colorState: this.props.formColor,
  };
  onClose = () => {
    this.props.formHidden();
    this.setState({
      textState: "",
      colorState: this.props.formColor,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.activeSquareId;
    const color = this.state.colorState;
    const text = textSlide(this.state.textState);
    const squareChanged = { id, color, text };
    this.props.changeSquare(squareChanged);
    this.onClose();
  };
  render() {
    return (
      <div
        className="form-container"
        style={{
          visibility: this.props.isFormVisible,
          "background-color": this.props.formColor,
        }}
      >
        <div className="subheader">class</div>
        <h3 className="form-header">Modify this square:</h3>
        <form onSubmit={this.onSubmit}>
          <div className="wrapper">
            <label htmlFor="color">choose the color:</label> <br />
            <DebounceInput
              type="color"
              name="color"
              id="color"
              className="color-panel"
              value={this.state.colorState}
              onChange={(e) => this.setState({ colorState: e.target.value })}
            />
            <br />
          </div>
          <div className="wrapper">
            <label htmlFor="text">enter the text:</label>
            <br />
            <DebounceInput
              element="textarea"
              className="form-textarea"
              type="text"
              name="text"
              id="text"
              placeholder="enter the text"
              value={this.state.textState}
              onChange={(e) => this.setState({ textState: e.target.value })}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn">
              Submit
            </button>
            <div className="btn" onClick={this.onClose}>
              Close
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const activeSquareColor = state.activeSquareId
    ? state.squares[state.activeSquareId].color
    : null;
  return {
    isFormVisible: state.activeSquareId ? "visible" : "hidden",
    activeSquareId: state.activeSquareId,
    formColor: activeSquareColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSquare: (squareChanged) => dispatch(changeSquare(squareChanged)),
    formHidden: () => dispatch(formHidden()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassSquareForm);
