import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'songs'));
      const songData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSongs(songData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta canción?")) {
      await deleteDoc(doc(db, 'songs', id));
      setSongs(songs.filter(song => song.id !== id));
    }
  };

  return (
    <div className="container">
      <header>
      <Header />
        <h1>Mi Playlist</h1>
        <nav>
          <Link to="/add" className="add-button">Añadir Canción</Link>
        </nav>
      </header>
      <table>
        <thead>
          <tr>
            <th>Nombre de la Canción</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Año</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.year}</td>
              <td>
                <Link to={`/edit/${song.id}`} className="edit-button">Editar</Link>
                <button className="delete-button" onClick={() => handleDelete(song.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default SongList;
