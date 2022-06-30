export const loadSquaresMiddleware = (squares) => async (next) => {
  setTimeout(() => {
    next(loadSquares(squares));
  }, 2000);
  next(squaresLoading());
};

const squaresLoading = () => {
  return {
    type: "SQUARES_LOADING",
  };
};

export const loadSquares = (squares) => {
  return {
    type: "SQUARES_LOADED",
    payload: squares,
  };
};

export const changeSquare = ({ id, color, text }) => {
  return {
    type: "SQUARE_CHANGED",
    payload: {
      id: id,
      color: color,
      text: text,
    },
  };
};
export const formVisible = (id) => {
  return {
    type: "FORM_VISIBLE",
    payload: { id: id },
  };
};

export const formHidden = () => {
  return {
    type: "FORM_HIDDEN",
    payload: false,
  };
};

export const componentLoad = (component) => {
  return {
    type: "LOAD_COMPONENT",
    payload: component,
  };
};
