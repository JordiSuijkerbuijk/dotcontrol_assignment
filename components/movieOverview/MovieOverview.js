import { useEffect, useState } from 'react'

import Button from '../button/Button'

import router, {useRouter} from 'next/router'

import style from './movieOverview.module.scss'

export default function MovieOverview() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  const [page, setPage] = useState(1)
  const router = useRouter()
  const gradient = 'linear-gradient(180deg, rgba(14,14,14,0.00) 43%, #0E0E0E 100%)'
 
  useEffect(() => {
    //The search api does not return genres or rating, this could not be created according to the design (while maintaning decent code)
    //Uses the search api to get first 10 movies with the superhero keyword.
    //When extra movies need to be loaded the page state will be updated which will get and add 10 more movies.
    const api_key = process.env.apiKey;
    fetch(`http://www.omdbapi.com/?apikey=${api_key}&s='superhero'&page=${page}`).then(res => res.json()).then(data => (setMovies([...movies, ...data.Search]), movieHandler(data.Search[0].Title)))
  }, [page])

  function movieHandler(title) {
    //Get movie by title, this endpoint does return more information.
    const api_key = process.env.apiKey;
    fetch(`http://www.omdbapi.com/?apikey=${api_key}&t='${title}'`).then(res => res.json()).then(data => setSelectedMovie(data))

    console.log(selectedMovie)

    //scroll to top to see the selected movie
    window.scroll({top: 0, behavior: 'smooth' })
  }

  function formatImageSize(size, url) {
    //images returned by the api are very small, wrote this function to get bigger images (looks a little nicer)
    const urlWithoutSize = url.split('_')
    const newUrl = urlWithoutSize[0] + urlWithoutSize[1] + `SX${size}.jpg`

    return newUrl
  }

  return (
    <div className={style.container}>
      <div className={style.selectedMovieWrapper} style={selectedMovie.Poster ? {'backgroundImage': `${gradient}, url(${formatImageSize(2000, selectedMovie.Poster)})`} : {}}>
        {selectedMovie.Title && (
          <div className={style.title}>
            {selectedMovie.Title}
          </div>
        )}
        {selectedMovie.Plot && (
          <div className={style.plot}>
            {selectedMovie.Plot}
          </div>
        )}
        <div className={style.button}>
          <Button 
            title={'More information'} 
            onClick={() => router.push('https://www.imdb.com')}
            customStyle={{backgroundColor: '#FF2345', border: '2px solid #FF2345'}} 
            iconTitle='imdb' 
            iconWidth={42} 
            iconHeight={20} 
            iconRight 
          />
        </div>
      </div>
      
      <div className={style.movieWrapper}>
        {movies && movies.map((item, key) => (
          <div key={key} className={style.movie} style={{'backgroundImage': `${gradient}, url(${formatImageSize(500, item.Poster)})`}} onClick={() => movieHandler(item.Title)}>
            <div className={style.title}>{item.Title}</div>
          </div>
        ))}
      </div>
      
      <div className={style.buttonWrapper}>
        <Button title={'Read more'} onClick={() => setPage(page + 1)} iconTitle='reload' />
      </div>
    </div>
  );
}