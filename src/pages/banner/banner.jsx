import React from 'react'
import classNames from "classnames";
import style from './banner.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/common/button/button';
import IconVideo from '../../assets/icons/iconVideo'
export const Banner = () => {
  return (
    <section className={classNames(style.banner, mainStyle.container)}>
        <div className={classNames(style.textSection)}>
        <h1 className={classNames(style.title)}>
        Master the Art of Cooking with 
        <span> Experts </span> 
        Worldwide 
        </h1>
        <p>
        Experience the joy of cooking in a whole 
        new way with our engaging online cooking 
        classes. Learn from the chefs, share your
         unique culinary knowledge, and join our
          growing foodie community. With COOK,
           learning, and teaching becomes a 
           shared passion.
        </p>
        <NavLink to={'/'}>
            <IconVideo /> Learn more in the Cook vidoe</NavLink>
        <div className={classNames(style.btnGroup)}>
            <Button className={classNames(mainStyle.btnFill)}>Find Your Tutor</Button>
            <Button className={classNames(mainStyle.btnSecondary)}>Join Our Chefs</Button>

        </div>
        </div>
        <div className={classNames(style.img)}></div>
    </section>
  )
}
