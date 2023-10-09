import React, { useContext } from 'react';
import Heart from '../components/Heart';
import { MyContext } from '../context/MyContext';

const Favorites = () => {
  const { fotos } = useContext(MyContext);

  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);

    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;

    setFotos([...fotos]);
  };

  // Filtra las fotos marcadas como favoritas
  const favoriteFotos = fotos.filter((foto) => foto.liked);

  return (
    <div className="container">
      <div className="text-center m-5">
        <h2>Favorites</h2>
      </div>
      {favoriteFotos.length === 0 ? (
        <div className="text-center">
          <p>You have not yet selected your favorite photos, once you select them you will be able to see them in this gallery</p>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center col-sm-12">
          {favoriteFotos.map((foto) => (
            <div
              key={foto.id}
              style={{ backgroundImage: `url(${foto.src.medium})` }}
              className="foto m-3 d-flex flex-column"
            >
              <div onClick={() => handleClick(foto.id)}>
                <Heart color={foto.liked} />
              </div>
              <div className="text-light text-center">
                <p>{foto.alt}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
