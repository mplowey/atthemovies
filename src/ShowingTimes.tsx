import './ShowingTimes.css';
import { type Film } from './Models/Film';
import { type Showing } from './Models/Showing';
import FilmListItem from './FilmListItem';
import useFilmStore from './Stores/FilmStore';
import { useEffect, useState } from 'react';
import { getAsync } from './Services/ApiService';

interface ShowingTimesProps {
    filmId: string;
    selectedDate: string;
   // films: Film[];
}

const ShowingTimes = ({filmId, selectedDate}: ShowingTimesProps) => {  

    const [showings, setShowings] = useState<Showing[]>([])

    useEffect(() => {
        getAsync<Showing[]>('http://localhost:3008/showings').then((res:Showing[]) => {
        setShowings(res);
        });
    }, [])

    const films = useFilmStore((state: any) => state.films)

    const dispalyShowTimes = () => {
        const today = new Date();
        if(films && films.length){
            return films.map((film:Film) => {
                    const shows = showings.filter((showing:Showing) => {
                        return showing.film_id === film.id && today.getDay() === new Date(showing.showing_time).getDay();
                    });
                    return (<FilmListItem key={film.id} film={film} showings={shows} />);
        })
        }
        return (<div>Loading...</div>)
    }

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
                { dispalyShowTimes()}
                {/* <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem film={film} showings={[]} />
                <FilmListItem  film={film} showings={[]} /> */}
            </div>
</>
    );
}

export default ShowingTimes;