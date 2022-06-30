import { Component } from "react";
import { connect } from "react-redux";
import { loadSquares, formVisible } from "../../actions/actions";
import "../../components/squareItemsList/style.scss";
import "../../components/squareItem/style.scss";

class ClassSquareItemsList extends Component {
  handleFormVisibility = (e) => {
    this.props.formVisible(e.target.id);
  };

  render() {
    const { squaresList } = this.props;
    const itemList = Object.values(squaresList).map(({ id, color, title }) => {
      return (
        <div
          id={id}
          key={id}
          className="square-item"
          style={{
            "background-color": `${color}`,
            "border-radius": "10px",
          }}
          onClick={this.handleFormVisibility}
        >
          {title}
        </div>
      );
    });
    return <div className="squares-container">{itemList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    squaresList: state.squares,
    squaresId: state.squaresId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formVisible: (id) => dispatch(formVisible(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassSquareItemsList);
