import React from 'react'
import style from './advantages.module.scss'
import { TitleComponent } from '../../components/titleComponent/titleComponent'
import IconKnife from '../../assets/icons/iconKnife'
import IconHat from '../../assets/icons/iconHat'
import IconButerbrot from './../../assets/icons/iconButerbrot'

export const AdvatageList = () => {
  const list = [
    {id: 1, icon: <IconButerbrot />, title:'Diverse Range of Classes', description: 'Explore the culinary world with our vast array of online cooking classes. Whether youre a beginner or a seasoned cook, we have a class that suits your skill level and interests.'},
    {id: 2, icon: <IconHat />, title:'Opportunity to Teach', description: 'Share your culinary wisdom. If youre an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.'},
    {id: 3, icon: <IconKnife />, title:'Interactive Lessons', description: 'Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.'},

  ]
  return (
    <div className={style.item}>
      {list.map((item, key)=>
      <TitleComponent
      icon={item.icon}
      title={item.title}
      description = {item.description}
       />
      )}
    </div>
  )
}
