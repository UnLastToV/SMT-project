import logo from './logo.svg';
import './App.css';
import Login from './component/Login/login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/" element={<Login />} /> */}
            </Routes>
        </Router>
    );
}

export default App;