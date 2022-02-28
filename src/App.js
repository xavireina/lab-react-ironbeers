import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import DetailsBeer from './components/DetailsBeer';

function App() {
  return (
<div> 
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/beers" element={<AllBeers />} />
  <Route path="/random-beer" element={<RandomBeer />} />
  <Route path="/new-beer" element={<NewBeer />} />
  <Route path="/beers/:id" element={<DetailsBeer />} />

</Routes> </div>
);
}

export default App;
