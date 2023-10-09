import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Home from '../views/Home';
import Favorites from '../views/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';

const App = () => {
  const [fotos, setFotos] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('./src/data/data.json');
      const data = await res.json();
      const { photos } = data;
      setFotos(photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={{ fotos, setFotos }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
