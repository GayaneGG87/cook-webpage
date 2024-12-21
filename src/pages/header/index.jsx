import React from 'react'
import { Navbar } from './navbar'
import { RightSection } from './rightSection'
import mainStyle  from './../../assets/styles/_classes.module.scss'
import style from './header.module.scss'
import classNames from "classnames";
import IconBars from '../../assets/icons/iconBars';


export const Header = () => {
  return (
    <header className={classNames(style.header, mainStyle.container)}>
    <Navbar />
    <RightSection />
    <IconBars className={style.menuBar} />
    </header>
  )
}
