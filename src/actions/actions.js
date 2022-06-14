
export const squaresLoaded = (squares)=>{
    return{
        type:"SQUARES_LOADED",
        payload: squares
    }

}
export const stateUpdate = () =>{
    return{
        type: "STATE_UPDATE"
    }
}
export const squareChanged = (id,color,text) =>{
    return{
        type: "SQUARE_CHANGED",
        payload:{
            id:id,
            color:color,
            text:text
        }
    }
}
export const formVisible = (id)=>{
    return{
        type:"FORM_VISIBLE",
        payload: {visibility:"visible",
                    id:id}
    }
}
export const formHidden = ()=>{
    return{
        type:"FORM_HIDDEN",
        payload: "hidden"
    }
}