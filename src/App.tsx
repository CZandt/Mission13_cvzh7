import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MovieNavBar from './MovieNavBar';
import MovieCollection from './MovieCollection';
import Podcasts from './Podcasts';

function App() {
  return (
    <>
      <MovieNavBar />
      <MovieCollection />
    </>
  );
}

export default App;
