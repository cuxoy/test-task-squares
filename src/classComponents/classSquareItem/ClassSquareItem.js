// import { useDispatch} from "react-redux";
import { Component } from "react";
import { formVisible } from "../../actions/actions";
import "../../components/squareItem/style.scss";

class ClassSquareItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        key={5}
        className="square-item"
        style={{ "background-color": `#fff` }}
        // onClick={onFormOpen}
      >
        {"asdasdasd"}
      </div>
    );
  }
}
export default ClassSquareItem;
