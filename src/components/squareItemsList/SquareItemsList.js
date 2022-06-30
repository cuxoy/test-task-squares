import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SquareItem from "../squareItem/SquareItem";
import { loadSquaresS } from "../../actions/actions";
import "./style.scss";

const SquareItemsList = () => {
  const dispatch = useDispatch();

  const squaresState = useSelector((state) => state.squares);
  const squaresList = Object.values(squaresState).map(
    ({ id, color, title }) => {
      return <SquareItem id={id} key={id} color={color} text={title} />;
    }
  );

  return <div className="squares-container">{squaresList}</div>;
};

export default SquareItemsList;
