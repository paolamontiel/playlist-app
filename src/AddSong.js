import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const AddSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleAddSong = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'songs'), { title, artist, album, year });
    navigate('/songs');
  };

  return (
    <div className="container">
    <Header />
      <form onSubmit={handleAddSong}>
        <h2>Añadir nueva canción</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Canción" required />
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artista" required />
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} placeholder="Albúm" required />
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Año" required />
        <input type="submit" value="Añadir nueva canción" />
      </form>
      <Footer />
    </div>
  );
};

export default AddSong;
