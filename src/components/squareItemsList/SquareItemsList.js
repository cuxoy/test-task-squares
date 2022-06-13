import { useEffect } from "react";
import SquareItem from "../squareItem/SquareItem";
import { squares } from "../../content";
import "./style.scss"

const SquareItemsList = () => {

  const squaresList = squares.map((item) =>{
      return (
      <SquareItem id={item.id} color={item.color} text={item.title}/>
      )   
    })

  return (
      <div className="squares-container">
          {squaresList}
      </div>
  )
};

export default SquareItemsList;
