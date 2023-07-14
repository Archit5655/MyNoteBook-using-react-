import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <> 
    <NoteState>

    <Router>
      <Navbar />
      <Alert message="Alert"/>
      <div className="container">

      <Routes> 
        <Route exact path="/home" element={<Home/>}>
  
        </Route>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}>
        </Route>
        
      


      </Routes>

      </div>

    </Router>
    </NoteState>
    </>
  );
}

export default App;
