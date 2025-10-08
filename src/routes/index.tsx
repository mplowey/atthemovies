import { createFileRoute } from '@tanstack/react-router'
import ShowingTimes from '../ShowingTimes'
import useFilmStore from '../Stores/FilmStore'
import { useEffect } from 'react'
import { getAsync } from '../Services/ApiService'
import type { Film } from '../Models/Film'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
    

  const setFilms = useFilmStore((state: any) => state.setFilms)

  useEffect(() => {
    getAsync<Film[]>('http://localhost:3008/films').then((res:Film[]) => {
     setFilms(res);
    });
  }, [])
  return (
    <ShowingTimes filmId="1" selectedDate="Mon" />
  )
}