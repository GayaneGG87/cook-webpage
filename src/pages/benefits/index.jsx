import classNames from 'classnames'
import React from 'react'
import style from './benefits.module.scss'
import mainStyle from './../../assets/styles/_classes.module.scss'
import { BenefitList } from './benefits'
import { TitleComponent } from '../../components/titleComponent/titleComponent'

export const Benefits = () => {
  return (
    
    <div className={classNames(style.benefits, mainStyle.container)}>
        <TitleComponent 
        title={'Our Unique Benefits'}
        description = {'Experience the perks of learning and teaching cooking on our platform'}
        />
        <BenefitList />
    </div>
  )
}
