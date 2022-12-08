import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Header, Home, MovieDetail, Footer, PageNotFound } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
