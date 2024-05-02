import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const App = () => {
  const albumCovers = [
    'cover1.jpg', 'cover2.jpg', 'cover3.jpg', 'cover4.jpg',
    'cover5.jpg', 'cover6.jpg', 'cover7.jpg', 'cover8.jpg'
  ];

  return (
    <div className="container">
      <Header />
      <h1>Playlist semanal</h1>
      <h2>Los mejores éxitos de la semana del 22 al 28 de abril</h2>
      <nav>
        <Link to="/songs" className="list-button">Ver Canciones</Link>
        <Link to="/add" className="add-button">Añadir Canciones</Link>
      </nav>
      <div className="gallery">
        {albumCovers.map((cover, index) => (
          <img key={index} src={`/images/${cover}`} alt={`Álbum ${index + 1}`} className="album-cover" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
