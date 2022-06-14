import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SquareItem from "../squareItem/SquareItem";
import { squares } from "../../content";
import { squaresLoaded, stateUpdate } from "../../actions/actions";
import "./style.scss";

const SquareItemsList = () => {

  const dispatch = useDispatch();

  const squaresState = useSelector((state) => state.squares);

  useEffect(()=>{
    dispatch(squaresLoaded(squaresState))
  },[])

  if(squaresState.length<1){
    dispatch(squaresLoaded(squares));
  }else{
    dispatch(squaresLoaded(squaresState));
  }

  const squaresList = squaresState.map((item) => {
    return <SquareItem id={item.id} color={item.color} text={item.title} />;
  });

  return(
  <div className="squares-container">{squaresList}</div>
  ) ;
};

export default SquareItemsList;
