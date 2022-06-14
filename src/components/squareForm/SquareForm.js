import { useDispatch, useSelector } from "react-redux";
import { formHidden } from "../../actions/actions";
import "./squareForm.scss";

const SquareForm = () => {
  const  dispatch = useDispatch()
    let visibility = useSelector(state => state.formStatus)
    const color = useSelector(state => state.formColor)
    
    const onClose = () =>{
        dispatch(formHidden())
    }
    
  return (
    <div className="form-container" style={{"visibility":visibility,"background-color":color}}>
      <h3 className="form-header">Modify this square:</h3>
      <form action="">
        <div className="wrapper">
            <label htmlFor="color" >choose the color:</label> <br/>
            <input type="color" name="color" id="color" className="color-panel" /><br />
        </div>
        <div className="wrapper">
            <label htmlFor="text">enter the text:</label><br />
            <textarea className="form-textarea" type="text" name="text" id="text"
            placeholder="enter the text" />
        </div>
        <div className="buttons">
            <button type="submit" className="btn">Submit</button>
            <button className="btn" onClick={()=>onClose()}>Close</button>
        </div>
      </form>
    </div>
  );
};
export default SquareForm;
