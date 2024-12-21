import React from 'react'
import classNames from "classnames";
import style from './banner.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { Button } from '../../components/common/button/button';
import IconVideo from '../../assets/icons/iconVideo'
import { SmallContent } from '../../components/smallContent/smallContent';

export const Banner = () => {
  return (
    <section className={classNames(style.banner, mainStyle.container)}>
        <div className={style.textSection}>
        <h1>
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
        <SmallContent
        type={'link'}
        icon={<IconVideo />}
        text='Learn more in the Cook vidoe'
        side='left'
         />
        <div className={style.btnGroup}>
            <Button className={mainStyle.btnFill}>Find Your Tutor</Button>
            <Button className={mainStyle.btnSecondary}>Join Our Chefs</Button>
        </div>
        </div>
        <div className={style.img}></div>
    </section>
  )
}
