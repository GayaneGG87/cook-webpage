import React from 'react'
import style from './menu.module.scss'
import classNames from "classnames";

export const Menu = () => {
    const list = [
        {id:1, name: 'English', icon: 'en'},
        {id:2, name: 'German', icon: 'en'},
        {id:3, name: 'Chinese', icon: 'en'},
        {id:4, name: 'Italian', icon: 'en'},
        {id:5, name: 'Hebrew', icon: 'en'}
    ]
  return (
    <div className={classNames(style.menu)}>
        <div className={classNames(style.title)}>Select a language</div>
        { list.map(item =>
        <div 
        className={classNames(style.row)} 
        key={item.id}>{item.icon}{item.name}
        </div>
        )}
       
    </div>
  )
}
