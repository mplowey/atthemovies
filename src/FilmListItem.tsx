import "./FilmListItem.css";
import type { Film } from "./Models/Film";
import type { Showing } from "./Models/Showing";
import { Link } from "@tanstack/react-router";

const FilmListItem = (props: { film: Film; showings: Showing[] }) => {
  return (
    <>
      <div className="movieCard">
        <div className="movieInfo">
          <div className="movieImage">
            <Link to="/films/$id" params={{ id: `${props.film.id}` }}>
              <img
                src={`http://localhost:3008/${props.film.poster_path}`}
              ></img>
            </Link>
          </div>
          <div className="movieNameDescription">
            <div className="movieName">
              <h2>{props.film.title}</h2>
            </div>
            <div className="movieDescription">{props.film.tagline}</div>
          </div>
        </div>
        <div className="movieShowtimes">
          <div className="showTimesCol">
            <div className="ShowingTimesHeader">
              <strong>Showing times for #</strong>
            </div>
            <div className="showTimes">
              {props.showings.map((showing, i) => {
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
      </div>
    </>
  );
};

export default FilmListItem;
