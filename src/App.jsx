import "./App.css";
// import Comp1 from "./components/literature/components/Comp1";
// import {Demo1} from './components/navbar/Demo1';
import Footer from './components/footer/Footer.jsx';

function App(){
  return (
    <>
      {/* <Demo1 />
      <Comp1 /> */}
      <Footer />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E-Learning</h1>
  
    </>
  );
}

export default App;