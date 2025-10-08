import { createFileRoute } from '@tanstack/react-router';
import type { Film } from '../Models/Film';

import './FilmDetails.css'
import { getAsync } from '../Services/ApiService';
import { useEffect, useState } from 'react';


export const Route = createFileRoute('/films/$id')({
  component: Films,
})

function Films() {
    const { id } = Route.useParams()
    const [film, setFilm] = useState<Film | null>(null);
    
    useEffect(() =>{
        getAsync<Film>(`http://localhost:3008/films/${id}`).then((res) => {
            setFilm(res);
        })
    },[])

    const content = () => {
        return(<div className="filmDetailsContainer">
        <div className="movieImage">
            <img src={film && film.poster_path ? `http://localhost:3008/${film.poster_path}` : '#'} alt="Movie Poster" />
        </div>
        <div className="movieInfo">
            <div className="title">
                {film?.title}
            </div>
            <div className="tagline">
                {film?.tagline}
            </div>
            <div className="description">
                {film?.overview}
            </div>
            <div className="viewerRatings">
                {/* {props.viewerRatings} */}
            </div>
            <div className="releaseDate">
                {/* {props} */}
            </div>
            <div className="runtime">
                {film?.runtime}
            </div>
            <div className="movieUrl">
                <a href="#">Watch Trailer</a>
            </div>
        </div>
    </div>);
    };
  if(film){
    return content();
  }
  return (<>Loading...</>);
}
// export default FilmDetails