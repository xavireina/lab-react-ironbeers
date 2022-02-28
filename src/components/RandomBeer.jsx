import React from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RandomBeer = () => {

  const [beer, setBeer] = React.useState([]);
   
  React.useEffect(() => {
     axios
         .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
         .then((results) => {
             setBeer(results.data);
             console.log(results.data);
         })
         .catch((err) => {
             console.error(err.message);
         })
 }, []);


return (
  <div>
    <Header /> 
    <div>
        <img src={beer.image_url} alt={beer.name}/>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>First brewed on: {beer.first_brewed}</p>
        <p>Attentuation Level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
    </div>
  </div>
 );
}

export default RandomBeer;