import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Favorites from '../views/Favorites';
import NotFound from '../views/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';

// Importa el archivo JSON de datos
import data from '../data/data.json';

const Data = () => {
  const [fotos, setFotos] = useState([]);

  const getData = async () => {
    // Utiliza los datos importados directamente
    const { photos } = data;
    setFotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={{ fotos, setFotos }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Images />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default Data;
