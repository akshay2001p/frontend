
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import User from './components/User';
import Admin from './components/Admin';
import Ucomplaint from './components/Ucomplaint';
import './index.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/login/user" element={<User />} />
        <Route path="/login/admin" element={<Admin />} />
        <Route path="/login/user/complaint" element={<Ucomplaint />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
