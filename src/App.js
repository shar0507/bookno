import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Books from "./components/Books"
import Add from "./components/Add"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/add" element={<Add />}></Route>

        </Routes>
      </Router>
     
    </div>
  );
  
}

export default App;
