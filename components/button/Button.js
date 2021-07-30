import Image from 'next/image'

import Icon from '../../components/icon/Icon'

import style from './button.module.scss'

import clsx from 'clsx'

export default function Button({title, iconTitle, iconRight, iconWidth, iconHeight, onClick, customStyle = {}}) {
  return (
    <div className={clsx([style.button, iconRight ? style.right : style.left])} onClick={onClick} style={customStyle}>
      {iconTitle && (
        <div className={style.icon}>
          <Icon iconTitle={iconTitle} width={iconWidth} height={iconHeight} />
        </div>
      )}
      <div className={style.title}>
        {title}
      </div>
    </div>
  )
}