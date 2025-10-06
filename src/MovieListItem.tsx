import './MovieListItem.css'

interface Movie {
    id: number,
    title: string,
    poster_path: string,
    runtime: number,
    tagline: string,
    showtimes: string[]
}

const MovieListItem = (props: Movie) => {
    return (
        <>
            <div className="movieCard">
                <div className="movieInfo">
                    <div className="movieImage">
                        <img src={props.poster_path}></img>
                    </div>
                    <div className="movieNameDescription">
                        <div className="movieName">{props.title}</div>
                        <div className="movieDescription">{props.tagline}</div>
                    </div>
                </div>
                <div className="movieShowtimes">
                    <div className="ShowingTimesHeader">Showing times for #</div>
                    <div className="showTimes">
                        {props.showtimes.map(showtime => {
                            return <div className="showTime">{showtime}</div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieListItem;