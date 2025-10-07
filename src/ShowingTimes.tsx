import './ShowingTimes.css';
import FilmListItem from './FilmListItem';
import type { Film } from './Models/Film';
interface ShowingTimesProps {
    filmId: string;
    selectedDate: string;
}

const ShowingTimes = ({filmId, selectedDate}: ShowingTimesProps) => {  
    const film: Film = {
        id: 1,
        title: 'Chunnel',
        poster_path: '',
        runtime: 147,
        tagline: 'There\'s a war 100 meters below the English Channel.',
        homepage: '',
        release_date: '',
        overview: '',
        popularity: 0,
        imdb_id: '',
        vote_average: 0,
        vote_count: 0
    };
    return (
        <>
            <div className="showingTimesContainer">
                <div className="showingTimesDay">
                    <header>
                        <h1>Showings for {selectedDate}</h1>
                    </header>
                </div>
                <div className="showingTimesDayPicker">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
            </div>

            <div className='filmList'>
                <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem  film={film} showings={[]} />
            </div>
</>
    );
}

export default ShowingTimes;