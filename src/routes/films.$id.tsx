import { createFileRoute, Link } from "@tanstack/react-router";
import type { Film } from "../Models/Film";

import "./FilmDetails.css";
import { getAsync } from "../services/ApiService";
import { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import useDateStore from "../Stores/DateStore";
import type { Showing } from "../Models/Showing";

export const Route = createFileRoute("/films/$id")({
  component: Films,
});

function Films() {
  const { id } = Route.useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [showings, setShowings] = useState<Showing[]>([]);
  const selectedDate = useDateStore((s: any) => s.selectedDate);

  useEffect(() => {
    getAsync<Film>(`http://localhost:3008/films/${id}`).then((res) => {
      setFilm(res);
    });
  }, []);

  useEffect(() => {
    getAsync<Showing[]>(
      `http://localhost:3008/showings/${id}/${(selectedDate ? new Date(selectedDate) : new Date()).toISOString()}`
    ).then((res) => {
      setShowings(res);
    });
  }, [id, selectedDate]);

  const content = () => {
    return (
      <div className="filmDetailsContainer">
        <div className="movieImage">
          <img
            src={
              film && film.poster_path
                ? `http://localhost:3008/${film.poster_path}`
                : "#"
            }
            alt="Movie Poster"
          />
        </div>
        <div className="movieInfo">
          <div className="title">
            <h1>{film?.title}</h1>
          </div>
          <div className="tagline">
            <h2>{film?.tagline}</h2>
          </div>
          <div className="description">{film?.overview}</div>
          <br />
          <div className="viewerRatings">
            Viewer's ratings: {film?.vote_average} / {film?.vote_count} votes
          </div>
          <br />
          <div className="releaseDate">
            Released:{" "}
            {film
              ? new Date(film.release_date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </div>
          <br />
          <div className="runtime">{film?.runtime} minutes</div>
          <br />
          <div className="movieUrl">
            <Link to=".">{film?.homepage}</Link>
          </div>
          <br />
          <DatePicker />
          <div className="showTimes">
            {showings.map((showing, i) => {
              const time = new Date(showing.showing_time);
              return (
                <div key={i} className="showTime">
                  <Link
                    to="/pick-seats/$showingId"
                    params={{ showingId: `${showing.id}` }}
                  >
                    {time.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  if (film) {
    return content();
  }
  return <>Loading...</>;
}
// export default FilmDetails
