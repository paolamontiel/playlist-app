import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SongList from './SongList';
import AddSong from './AddSong';
import EditSong from './EditSong';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/songs" element={<SongList />} />
      <Route path="/add" element={<AddSong />} />
      <Route path="/edit/:id" element={<EditSong />} />
    </Routes>
  </Router>
);
