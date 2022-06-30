import SquareForm from "../components/squareForm/SquareForm";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";
import SquareItemsList from "../components/squareItemsList/SquareItemsList";
import "./loading.scss";

const FunctionPage = () => {
  const loading = useSelector((state) => state.loadingStatus);
  if (loading === "loading") {
    return (
      <div className="loading">
        <PacmanLoader color="orange" size={60} />
      </div>
    );
  } else if (loading === "loaded") {
    return (
      <>
        <SquareItemsList />
        <SquareForm />
      </>
    );
  }
};
export default FunctionPage;
