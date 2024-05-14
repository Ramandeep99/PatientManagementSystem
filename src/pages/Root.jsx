import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/topbar";
import './root.css';
import Sidebar from "../components/sidebar/Sidebar";

function RootLayout() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div> 
    </>
  );
}

export default RootLayout;
