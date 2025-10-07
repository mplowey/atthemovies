import './FilmListItem.css'
import type {Film} from './Models/Film'
import type {Showing} from './Models/Showing';

const FilmListItem = (props: {film: Film, showings: Showing[]}) => {
    return (
        <>
            <div className="movieCard">
                <div className="movieInfo">
                    <div className="movieImage">
                        <img src={`http://localhost:3008/${props.film.poster_path}`}></img>
                    </div>
                    <div className="movieNameDescription">
                        <div className="movieName">{props.film.title}</div>
                        <div className="movieDescription">{props.film.tagline}</div>
                    </div>
                </div>
                <div className="movieShowtimes">
                    <div className="ShowingTimesHeader">Showing times for #</div>
                    <div className="showTimes">
                        {props.showings.map(showing => {
                            const time = new Date(showing.showing_time);
                            return <div className="showTime">{time.getHours()}:{time.getMinutes()}</div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilmListItem;