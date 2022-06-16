import { Component } from "react";
import { connect } from "react-redux";
import { formHidden, squareChanged } from "../../actions/actions";
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
    const id = this.props.squareId;
    const color = this.state.colorState;
    const text = () => {
      return this.state.textState.length > 10
        ? this.state.textState.slice(0, 10) + "..."
        : this.state.textState;
    };
    console.log(id, color, text());
    this.props.squareChanged(id, color, text());
    this.onClose();
  };
  render() {
    return (
      <div
        className="form-container"
        style={{
          visibility: this.props.formStatus,
          "background-color": this.props.formColor,
        }}
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
              value={this.state.colorState}
              onChange={(e) => this.setState({ colorState: e.target.value })}
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
  return {
    formStatus: state.formStatus,
    squareId: state.squareId,
    formColor: state.formColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    squareChanged: (id, color, text) =>
      dispatch(squareChanged(id, color, text)),
    formHidden: () => dispatch(formHidden()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassSquareForm);
