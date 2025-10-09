import "./ShowingTimes.css";
import { type Film } from "./Models/Film";
import { type Showing } from "./Models/Showing";
import FilmListItem from "./FilmListItem";
import useFilmStore from "./Stores/FilmStore";
import { useEffect, useState } from "react";
import { getAsync } from "./services/ApiService";
import DatePicker from "./DatePicker";
import useDateStore from "./Stores/DateStore";

interface ShowingTimesProps {
  filmId: string;
  selectedDate: string;
  // films: Film[];
}

const ShowingTimes = ({ filmId }: ShowingTimesProps) => {
  //const [selectedDay, setSelectedDay] = useState(selectedDate);
  const [showings, setShowings] = useState<Showing[]>([]);
  const selectedDate = useDateStore((s: any) => s.selectedDate);

  useEffect(() => {
    getAsync<Showing[]>("http://localhost:3008/showings").then(
      (res: Showing[]) => {
        setShowings(res);
      }
    );
  }, []);

  const films = useFilmStore((state: any) => state.films);

  const displayShowTimes = () => {
    if (films && films.length) {
      return films.map((film: Film) => {
        const shows = showings.filter((showing: Showing) => {
          return (
            showing.film_id === film.id &&
            new Date(selectedDate).getDay() ===
              new Date(showing.showing_time).getDay()
          );
        });
        return <FilmListItem key={film.id} film={film} showings={shows} />;
      });
    }
    return <div>Loading...</div>;
  };

  return (
    <div className="showingTimesContainer">
      <div className="showingTimesDayPicker">
        <div className="showingTimesHeader">
          <header>
            <h1>
              Showings for{" "}
              {new Date(selectedDate).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h1>
          </header>
        </div>
        <DatePicker />
      </div>

      <div className="filmList">{displayShowTimes()}</div>
    </div>
  );
};

export default ShowingTimes;
