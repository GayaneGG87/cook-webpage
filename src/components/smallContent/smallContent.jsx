import classNames from 'classnames'
import React from 'react'
import style from './smallContent.module.scss'
import { NavLink } from 'react-router-dom'

export const SmallContent = ({icon, text, side, type}) => {
  return (
    <div className={style.content}>
        {side =='left' && icon}
        {type=='text' &&  <p>{text}</p>}
        {type=='link' &&  <NavLink  to={'/'}>{text}</NavLink>}
        {type=='input' &&  <input type="search" placeholder={text} /> }
        {side == 'right' && icon}
    </div>
  )
}
