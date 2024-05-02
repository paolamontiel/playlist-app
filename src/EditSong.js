import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

const EditSong = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'songs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setArtist(data.artist);
        setAlbum(data.album);
        setYear(data.year);
      }
    };
    fetchData();
  }, [id]);

  const handleEditSong = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'songs', id);
    await updateDoc(docRef, { title, artist, album, year });
    navigate('/songs');
  };

  return (
    <div className="container">
        <Header />
      <form onSubmit={handleEditSong}>
        <h2>Editar Canción</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} required />
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        <input type="submit" value="Guardar" />
      </form>
      <Footer />
    </div>
  );
};

export default EditSong;
