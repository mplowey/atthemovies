import { useState, useEffect } from 'react'
import ShowingTimes from './ShowingTimes'
import FilmDetails from './routes/films.$id'
import { PickSeats } from './PickSeats';
import Checkout from './Checkout';
import Ticket from './Ticket';
import NavBar from './NavBar';
import { getAsync } from './Services/ApiService'
import { type Film } from './Models/Film'
import useFilmStore from './Stores/FilmStore'

import './App.css';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      
      <main>
        <FilmDetails id={1} title={'Chunnel'}
    homepage={''}
    release_date={''}
    overview={''}
    poster_path={''}
    runtime={147}
    tagline={''}
    popularity={1}
    imdb_id={''}
    vote_average={1}
    vote_count={1}/>
        
        <PickSeats />
        <Checkout />
        <Ticket />
      </main>
    </>
  )
}

export default App
