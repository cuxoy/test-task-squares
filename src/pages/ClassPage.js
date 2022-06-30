import ClassSquareForm from "../classComponents/classSquareForm/ClassSquareForm";
import ClassSquareItemList from "../classComponents/classSquareItemsList/ClassSquareItemList";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";
import "./loading.scss";

const ClassPage = () => {
  const loading = useSelector((state) => state.loadingStatus);
  if (loading === "loading") {
    return (
      <div className="loading">
        <PacmanLoader color="orange"size={60}/>
      </div>
    );
  } else if (loading === "loaded") {
    return (
      <>
        <ClassSquareItemList />
        <ClassSquareForm />
      </>
    );
  }
};
export default ClassPage;
