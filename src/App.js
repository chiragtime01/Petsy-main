import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pets from "./components/pets/Pets";
import Cart from "./components/Cart/Cart";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  exact path="/Cart" element={<Cart/>}/>
            <Route exact path="/Pets" element={<Pets/>}/>

          </Routes>
        
       

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
