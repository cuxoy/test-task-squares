
const initialState = {
    squares : [],
    formStatus: "hidden",
    formColor: ""
}

const reduser = (state = initialState, action) =>{
    switch(action.type){
        case "SQUARES_LOADED":
            return{...state,squares:action.payload}
        case "FORM_VISIBLE":
            return{...state,formStatus:action.payload.visibility,
            formColor:state.squares[action.payload.id].color
        }
        case "FORM_HIDDEN":
            return{...state,formStatus:action.payload}
        default:
             return state
    }
}
export default reduser