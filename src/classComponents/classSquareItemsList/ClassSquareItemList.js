import { Component } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {ClassSquareItem} from "../classSquareItem"
import { squares } from "../../content";
import { squaresLoaded } from "../../actions/actions";
import "../../components/squareItemsList/style.scss";

class ClassSquareItemsList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const text = "text"
    return (
     <div className="squares-container">
      <div
        key={5}
        className="square-item"
        style={{ "background-color": `#fff` }}
        // onClick={onFormOpen}
      >
        {text}
      </div>
    </div>
    )
  }
}

export default ClassSquareItemsList;
