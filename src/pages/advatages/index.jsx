import React from 'react'
import classNames from 'classnames'
import style from './advantages.module.scss'
import mainStyle from './../../assets/styles/_classes.module.scss'
import { AdvatageList } from './advantageList'
import { SmallContent } from '../../components/smallContent/smallContent'
import { TitleComponent } from '../../components/titleComponent/titleComponent'
import IconArrowUp from './../../assets/icons/iconArrowUp'

export const Advantages = () => {
  return (
    <div className={classNames(style.advantages, mainStyle.container)}>
        <div className={style.img}>
            <div className={style.levelUp}>
                <div>Level up <IconArrowUp /></div>
                <p >Take your culinary
                     skills to new heights. Our platform provides 
                     you with the expert guidance you need to refine
                      your skills and cook like a pro                         
                       </p>
            </div>
        </div>
        <div className={style.list}>
            <h3>Other Advantages</h3>
            <AdvatageList />
        </div>
    </div>
  )
}
