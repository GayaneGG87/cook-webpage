import React from 'react'
import classNames from "classnames";
import style from './style.module.scss'
import IconCook from '../../assets/icons/iconCook'


export const Navbar = () => {
  return (
    <nav className={classNames(style.navbar)}>
        <div className={classNames(style.item, style.logo)}>COOK</div>
        <div className={classNames(style.item)}> <IconCook />Cooking Classes</div>
        <div className={classNames(style.item)}><IconCook /> Become a Chef</div>
        <div className={classNames(style.item)}><IconCook /> Group Cooking</div>
    </nav>
  )
}
