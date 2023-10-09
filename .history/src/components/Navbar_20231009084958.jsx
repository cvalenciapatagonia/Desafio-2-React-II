import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='justify-content-center'>
          <div className="d-flex justify-content-center align-items-center">
            <NavLink className='nav-link text-light fs-3 mx-3' to="/">Images</NavLink>
            <div className="navbar-divider"></div>
            <NavLink className='nav-link text-light fs-3 mx-3' to="favorites">Favorites</NavLink>
          </div>
        </Container>
      </Navbar>
      <style>
        {`
          .navbar-divider {
            width: 1px;
            height: 40px; /* Altura deseada de la línea vertical */
            background-color: white; /* Color de la línea vertical */
            margin: 0 20px; /* Espacio entre los enlaces y la línea vertical */
          }
        `}
      </style>
    </>
  );
}

export default NavBar;
