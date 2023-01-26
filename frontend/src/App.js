import axios from 'axios';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Home from './components/pages/Home';
import './App.css';

const API_URL = 'http://localhost:3000/api/v1/users';

const getUsers = () => {
  return axios.get(API_URL).then(response => response.data);
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;

    getUsers().then((data) => {
      if (mounted) {
        setUsers(data);
      }
    });
  
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <Banner users={users}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);