import SquareItemsList from "./components/squareItemsList/SquareItemsList";
import SquareForm from "./components/squareForm/SquareForm";
import ClassSquareItemsList from "./classComponents/classSquareItemsList/ClassSquareItemList";
import ClassSquareForm from "./classComponents/classSquareForm/ClassSquareForm";
import "./App.css";

function App() {
  return (
    <>
      {/* <SquareItemsList />
      <SquareForm /> */}
      <ClassSquareItemsList/>
      <ClassSquareForm/>
    </>
  );
}

export default App;
