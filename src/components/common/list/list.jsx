import React from 'react'
import style from './list.module.scss'
import { NavLink } from 'react-router-dom'

export const List = (props) => {
    const {item:{content, title}} = props
    console.log(List, content)
  return (
    <ul className={style.listWrapper}>
        <li className={style.title}>{title}</li>
        {content.map((item, key)=>
                <li key={key} 
                className={style.link}>
                    <NavLink to={item.link}>{item.name}</NavLink>
                </li>
        )}
    </ul>
  )
}
