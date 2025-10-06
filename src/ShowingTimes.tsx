import './ShowingTimes.css';
import MovieListItem from './MovieListItem';
interface ShowingTimesProps {
    filmId: string;
    selectedDay: string;
}

const ShowingTimes = ({filmId, selectedDay}: ShowingTimesProps) => {
    
    return (
        <>
            <div className="showingTimesContainer">
                <div className="showingTimesDay">
                    <header>
                        <h1>Showings for {selectedDay}</h1>
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

            <div className='movieList'>
                <MovieListItem id={1} tagline={'There\'s a war 100 meters below the English Channel.'} title={'Chunnel'} poster_path={''} runtime={147} showtimes={['12:00', '15:00', '18:00']}  />
                <MovieListItem id={2} tagline={'Movie 2'} title={'Second Movie'} poster_path={''} runtime={143} showtimes={['12:00', '15:00', '18:00']}  />
                <MovieListItem id={3} tagline={'Movie 3'} title={'Third Movie'} poster_path={''} runtime={143} showtimes={['12:00', '15:00', '18:00']} />
                <MovieListItem id={4} tagline={'Movie 4'} title={'Fourth Movie'} poster_path={''} runtime={143} showtimes={['12:00', '15:00', '18:00']}  />
            </div>
</>
    );
}

export default ShowingTimes;