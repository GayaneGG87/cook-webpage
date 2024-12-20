import React, { useContext, useEffect, useState } from 'react'
import { TutorCard } from './tutorCard'
import { observer } from 'mobx-react-lite'
import { Context } from '../..';
import { toJS } from 'mobx';
import classNames from 'classnames';
import style from './tutors.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';


export const TutorsList = observer(() => {
    const {cook} = useContext(Context)
      const tutors = toJS(cook._tutors);
      const [isActive, setIsActive] = useState(null)

      useEffect(()=>{
      },[isActive])

      const handleClick = (id)=>{
        setIsActive(id)
      }
  return (
    <div className={classNames(style.tutorsList)}>
        {tutors.map(item=>
            <TutorCard 
            item={item} 
            isActive={isActive}
            handleClick = {handleClick} />
        )}
    </div>
  )
})
