import React, { useContext } from 'react';
import Heart from '../components/Heart';
import { MyContext } from '../contexts/MyContext';


const Images = () => {
  const { fotos, setFotos } = useContext(MyContext);

  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);

    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;

    setFotos([...fotos]);
  };

  return (
    <div className="container">
      <div className="text-center m-5">
        <h2>Photo Gallery</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center col-sm-12">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            style={{
              backgroundImage: `url(${foto.src.medium})`,
              transition: 'transform 0.3s', // Agregar transición de 0.3 segundos
            }}
            className='foto m-3 d-flex flex-column '
          >
            <div
              onClick={() => handleClick(foto.id)}
              style={{
                transform: 'scale(1.0)', // Escalado inicial
              }}
              className="foto-hover"
            >
              <Heart color={foto.liked} />
            </div>
            <div className="text-light text-center">
              <p>{foto.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
