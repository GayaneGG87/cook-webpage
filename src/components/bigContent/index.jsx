import React from 'react'
import style from './style.module.scss'

export const BigContent = ({img, children}) => {

  return (
    <section>
        <div className={style.img}>
            <img src={img} alt="" />
            <div className="number"></div>
        </div>
        <div className={style.dataContent}>
            {children}
        </div>
    </section>
  )
}
