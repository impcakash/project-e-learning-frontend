import "./App.css";
import Navbar from "./components/navbar/components/Nav1.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
  
    </>
  );
}

export default App;
