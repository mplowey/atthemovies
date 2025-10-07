import type { Film } from './Models/Film';

import './FilmDetails.css'

const FilmDetails = (props: Film) => {
  return (
    <div className="filmDetailsContainer">
        <div className="movieImage">
            <img src={props.poster_path} alt="Movie Poster" />
        </div>
        <div className="movieInfo">
            <div className="title">
                {props.title}
            </div>
            <div className="tagline">
                {props.tagline}
            </div>
            <div className="description">
                {props.overview}
            </div>
            <div className="viewerRatings">
                {/* {props.viewerRatings} */}
            </div>
            <div className="releaseDate">
                {/* {props} */}
            </div>
            <div className="runtime">
                {props.runtime}
            </div>
            <div className="movieUrl">
                <a href="#">Watch Trailer</a>
            </div>
        </div>
    </div>
  )
}

export default FilmDetails