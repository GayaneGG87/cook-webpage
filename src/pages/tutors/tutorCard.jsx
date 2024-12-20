import React from 'react';
import classNames from "classnames";
import style from './tutors.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import IconFire from '../../assets/icons/iconFire'
import IconBakery from '../../assets/icons/iconBakery';
import IconVegan from '../../assets/icons/iconVegan';
import IconFish from '../../assets/icons/iconFish';
import IconMeat from '../../assets/icons/iconMeat';
import IconGlass from '../../assets/icons/iconGlass';
import IconCake from '../../assets/icons/iconCake';
import IconArrow from '../../assets/icons/iconArrow';

export const TutorCard = (props) => {
    const {item, handleClick, isActive} = props
    const active = isActive == item.id
    const icons = [<IconBakery />, <IconVegan />,
                     <IconFish />, <IconMeat />,
                 <IconGlass/>, <IconCake/>  ]

  return (
    <div
     className={classNames(style.card, active ? style.active : '')}
     onClick={e=>props.handleClick(item.id)}>
        <div className={classNames(style.icon)}>
        {icons.map((icon, i)=> i+1 == item.id && icon)}
        </div>
        <div className={classNames(style.text)}>
            <p className={classNames(style.title)}>
                {item.title} {active ? <IconFire /> : <IconArrow /> }</p>
            <p className={classNames(style.description)}>{item.description}</p>
        </div>
    </div>
  )
}
