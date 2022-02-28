import React from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllBeers = () => {
   const [allBeers, setAllBeers] = React.useState([]);
   
   React.useEffect(() => {
      axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((results) => {
              setAllBeers(results.data);
              console.log(results.data);
          })
          .catch((err) => {
              console.error(err.message);
          })
  }, []);

return (
  <div>
     <Header />
     <h1>All Beers:</h1>
     {
        allBeers.map((beer) => {
           return (
              <div>
                <table>
                   <tr>
                      <th>
                         <img src={beer.image_url} alt={beer.name} height="150px" />
                      </th>
                      <th>
                         <ul>
                            <li>
                              {beer.name} 
                            </li>
                            <li>
                               {beer.tagline}
                            </li>
                            <li>
                               {beer.contributed_by}
                            </li>
                            <li>
                               <Link to = {`/beers/${beer._id}`} >Beer Details</Link>
                            </li>
                         </ul>
                      </th>
                   </tr>
                </table>
              </div>
           )
        })
     }
  </div>
 );
}

export default AllBeers;
