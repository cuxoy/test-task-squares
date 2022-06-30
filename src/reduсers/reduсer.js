const initialState = {
  squares: {},
  componentType: null,
  loadingStatus: "idle",
  activeSquareId: null,
};

const reduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SQUARES_LOADING": {
      return { ...state, loadingStatus: "loading" };
    }
    case "SQUARES_LOADED":
      return {
        ...state,
        loadingStatus: "loaded",
        squares: payload.reduce((id, item) => {
          id[item.id] = item;
          return id;
        }, {}),
      };

    case "SQUARE_CHANGED":
      const changedSquares = {
        ...state.squares,
        [payload.id]: {
          id: payload.id,
          title: payload.text,
          color: payload.color,
        },
      };
      return { ...state, squares: changedSquares };

    case "FORM_VISIBLE":
      const visibleSquare = state.squares[payload.id];
      return {
        ...state,
        activeSquareId: visibleSquare.id,
      };
    case "FORM_HIDDEN":
      return { ...state, activeSquareId: null };
    default:
      return state;
    case "LOAD_COMPONENT":
      return { ...state, componentType: payload };
  }
};
export default reduser;
