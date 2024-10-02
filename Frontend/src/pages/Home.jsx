import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row vh-100 p-3" style={{ gap: "20px" }}>
        <div className="bg-primary text-white p-3 h-100 shadow-sm"
             style={{
               width: "100%",
               maxWidth: "280px", 
               borderRadius: "20px", 
               borderRight: "3px solid rgba(255, 255, 255, 0.15)" 
             }}>
          <Sidebar />
        </div>

        <div className="flex-grow-1 bg-white p-4 shadow-sm"
             style={{
               borderRadius: "20px", 
               borderLeft: "3px solid rgba(0, 0, 0, 0.1)" 
             }}>
         <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Home;
