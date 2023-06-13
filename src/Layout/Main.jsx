import { Outlet } from "react-router-dom";
import Header from "../shared/header/header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
