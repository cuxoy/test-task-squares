const initialState = {
  squares: [],
  formStatus: "hidden",
  formColor: "",
  squareId: "",
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "SQUARES_LOADED":
      return { ...state, squares: action.payload };

    case "SQUARE_CHANGED":
      const arr = state.squares.map((item) => {
        if (item.id == action.payload.id) {
          return (item = {
            id: action.payload.id,
            color: action.payload.color,
            title: action.payload.text,
          });
        } else return item;
      });
      return { ...state, squares: arr };

    case "FORM_VISIBLE":
      return {
        ...state,
        formStatus: action.payload.visibility,
        formColor: state.squares[action.payload.id].color,
        squareId: state.squares[action.payload.id].id,
      };
    case "FORM_HIDDEN":
      return { ...state, formStatus: action.payload };
    default:
      return state;
  }
};
export default reduser;
