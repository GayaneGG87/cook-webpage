import React from 'react'
import IconCalendar from '../../../assets/icons/iconCalendar'
import style from './blog.module.scss';
import mainStyle  from './../../../assets/styles/_classes.module.scss';
import imgurl from '../../../assets/images/Rectangle25-2.jpg'


export const ItemBlog = (props) => {
  return (
    <div className={style.itemBlog}>
        <div 
        className={style.img}
        style={{background: `url(${imgurl})`}}
        ></div>
        <div className={style.details}>
            <div className={style.date}><IconCalendar />dter tertert</div>
            <p>Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Voluptates, expedita.</p>
        </div>
    </div>
  )
}
