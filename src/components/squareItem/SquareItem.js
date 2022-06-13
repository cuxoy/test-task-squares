import "./style.scss"
const SquareItem = ({id,color,text})=>{
    return(
        <div className="square-item" style={{"background-color":`${color}`}}>
                {text}
        </div>
    )
}
export default SquareItem