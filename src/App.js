import React from 'react';
import './assets/css/app.css';
import { NavBar } from './components/NavBar';
import { ContentWrapper } from './components/ContentWrapper';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
        <NavBar />
        <ContentWrapper />
        <Footer />
    </div>
  );
}

export default App;
