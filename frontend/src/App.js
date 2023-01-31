// import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import './styles/App.scss';

const API_URL = 'http://localhost:3000/api/v1/users';

// const getUsers = () => {
//   return axios.get(API_URL).then(response => response.data);
// }

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   let mounted = true;

  //   getUsers().then((data) => {
  //     if (mounted) {
  //       setUsers(data);
  //     }
  //   });
  // 
  //   return () => (mounted = false);
  // }, []);

  return (
    <div id='main'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;