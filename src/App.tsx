import { useState } from 'react'
import ShowingTimes from './ShowingTimes'
import FilmDetails from './FilmDetails'
import { PickSeats } from './PickSeats';
import Checkout from './Checkout';
import Ticket from './Ticket';
import NavBar from './NavBar';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
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
        <ShowingTimes filmId="1" selectedDate="Mon"/>
        <PickSeats />
        <Checkout />
        <Ticket />
      </main>
      <footer>
        <p>Copyright Isaac and Marc &copy; 2025</p>
      </footer>
    </>
  )
}

export default App
