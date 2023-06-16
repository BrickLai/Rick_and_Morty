import Header from './components/Header';
import Characters from './pages/Characters';
import Ratings from './pages/Ratings';
import Savinglist from './pages/Savinglist';
import Footer from './components/Footer';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import './style/index.css';
import Account from './pages/Account';

function App() {
	
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Rick & Morty</title>
      </Helmet>
      <header>
        <div className='container'>
          <Header />
        </div>
      </header>
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Characters />} />
            <Route exact path='/Ratings' element={<Ratings />} />
            <Route exact path='/Saving-list' element={<Savinglist />} />
            <Route exact path='/Account' element={<Account />} />
          </Routes>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;