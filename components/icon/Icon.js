import Image from 'next/image'

import Reload from '../../public/icons/reload.png'
import Imdb from '../../public/icons/imdb.png'

import style from './icon.module.scss'

export default function Icon({iconTitle, width=25, height=25}) {
  const icons = {
    reload: Reload,
    imdb: Imdb
  } 

  return (
    //normally i would create this with svgs and without image but i could only find the icons as png
    <Image className={style.icon} src={icons[iconTitle].src} width={width} height={height} />
  );
}