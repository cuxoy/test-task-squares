
import { useDispatch, useSelector } from "react-redux";
import SquareItem from "../squareItem/SquareItem";
import { squares } from "../../content";
import { squaresLoaded } from "../../actions/actions";
import "./style.scss";

const SquareItemsList = () => {
  const dispatch = useDispatch();

  dispatch(squaresLoaded(squares))

  const squaresState = useSelector((state) => state.squares);

  console.log(squaresState);

  const squaresList = squaresState.map((item) => {
    return <SquareItem id={item.id} color={item.color} text={item.title} />;
  });

  return ( 

  <div className="squares-container">
      {squaresList}
  </div>
  )
};

export default SquareItemsList;
