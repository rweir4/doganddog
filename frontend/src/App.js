// import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import './App.css';

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
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;