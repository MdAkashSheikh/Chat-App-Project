import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="first-div">
      <Router>
        <Routes>
          <Route index element={<h1>Homepage</h1>}></Route>
          <Route path='/chat/:roomName' element={<h1>chat room</h1>}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
