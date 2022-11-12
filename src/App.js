import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Courses from "./components/Courses/Courses";
import Contacts from "./components/Contacts/Contacts";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <HeaderMenu/>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/contacts" element={<Contacts />}/>
       </Routes>
   </div>
  );
}

export default App;
