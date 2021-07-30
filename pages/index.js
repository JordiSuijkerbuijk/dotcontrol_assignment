import Image from 'next/image'

import logo from '../public/images/dotcontrol.png'

import MovieOverview from '../components/movieOverview/MovieOverview'

import style from './index.module.scss'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image src={logo} width='59px' height='51px' />
      </div>
      <MovieOverview />
    </div>
  )
}
