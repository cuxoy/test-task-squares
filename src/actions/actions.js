
export const squaresLoaded = (squares)=>{
    return{
        type:"SQUARES_LOADED",
        payload: squares
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