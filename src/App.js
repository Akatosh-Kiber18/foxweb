import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Courses from "./components/Courses/Courses";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
       <HeaderMenu />
       <Home />
       <About />
       <Courses />
       <Contacts />
   </div>
  );
}

export default App;
