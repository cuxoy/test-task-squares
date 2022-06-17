import { Component } from "react";
import { connect } from "react-redux";
import { squares } from "../../content";
import { squaresLoaded, formVisible } from "../../actions/actions";
import "../../components/squareItemsList/style.scss";
import "../../components/squareItem/style.scss";

class ClassSquareItemsList extends Component {
  componentDidMount() {
    this.props.loaded();
  }
  onFormOpen = (e) => {
    this.props.formVisible(e.target.id);
  };

  render() {
    const { squaresList } = this.props;
    const itemList = squaresList.map((item) => {
      return (
        <div
          id={item.id}
          key={item.id}
          className="square-item"
          style={{
            "background-color": `${item.color}`,
            "border-radius": "10px",
          }}
          onClick={this.onFormOpen}
        >
          {item.title}
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
    loaded: () => dispatch(squaresLoaded(squares)),
    formVisible: (id) => dispatch(formVisible(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassSquareItemsList);
