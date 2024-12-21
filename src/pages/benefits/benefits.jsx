import React from 'react'
import style from './benefits.module.scss'
import IconMedal from './../../assets/icons/iconMedal'
import IconChef from './../../assets/icons/iconChef'
import IconMoney from './../../assets/icons/iconMoney'
import { TitleComponent } from '../../components/titleComponent/titleComponent'

export const BenefitList = () => {
    const benefitsList = [
        {id: 1,icon: <IconChef />,  title:'Expert Chefs' , description:'Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.' },
        {id: 2, icon:<IconMoney /> , title: 'Save Time and Money', description:'Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.' },
        {id: 3, icon: <IconMedal /> , title:'Accessible Cooking' , description: 'Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.'},
    ]

  return (
   <div className={style.benefitsList}>
    {benefitsList.map((item, key)=>
        <div key={key} 
        className={style.item}>
            <div className={style.cyrcle}> 
                {item.icon}
                </div>
            <TitleComponent
            title={item.title}
            description={item.description}/>
        </div>
    )}
   </div>
  )
}
