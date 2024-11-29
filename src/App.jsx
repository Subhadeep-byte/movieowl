import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

//import MoviesCard from './components/MoviesCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'
function App() {

  return(
    <>
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
    </main>
    </MovieProvider>
    </>
  );
}


export default App
