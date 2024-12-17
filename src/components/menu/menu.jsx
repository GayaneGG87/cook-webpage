import React from 'react'
import style from './menu.module.scss'
import classNames from "classnames";

export const Menu = (props) => {
  const {list, title} = props
  return (
    <div className={classNames(style.menu)}>
        <div className={classNames(style.title)}>
          {title}
     </div>
        { list.map(item =>
        <div key={item.id}
            className={classNames(style.row)} 
            onClick={e=>props.handleClick(item)}>
             {item.name}
        </div>
        )}
    </div>
  )
}
