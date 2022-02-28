import React from 'react';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import HomeSection from './HomeSection';


const Home = () => {
return (
  <div>
     <HomeSection image = {allBeersImage} title = {"All Beers"} link = {"/beers"} />
     <HomeSection image = {randomBeerImage} title = {"Random Beer"} link = {"/random-beer"} />
     <HomeSection image = {newBeerImage} title = {"New Beer"} link = {"/new-beer"} />
  </div>
 );
}

export default Home;