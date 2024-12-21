import React from 'react'
import style from './header.module.scss'
import IconCook from '../../assets/icons/iconCook'
import IconPan from '../../assets/icons/iconPan'
import IconTomato from '../../assets/icons/iconTomato'
import { SmallContent } from '../../components/smallContent/smallContent';


export const Navbar = () => {
  const list = [
    {id: 1, icon:'' , text : 'COOK'},
    {id: 2, icon: <IconCook />, text : 'Cooking Classes'},
    {id: 3, icon: <IconPan />, text : 'Become a Chef' },
    {id: 4, icon: <IconTomato />, text : 'Group Cooking'},
  ]
  return (
    <nav className={style.navbar}>
        { list.map((item, key)=>
            < SmallContent 
            key={key}
            icon={item.icon}
            text={item.text}
            side={'left'}
            type={'link'}
            />
        )}
    </nav>
  )
}
