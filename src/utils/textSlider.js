const textSlide = (text) => {
  return text.length > 10 ? text.slice(0, 10) + "..." : text;
};
export default textSlide;
