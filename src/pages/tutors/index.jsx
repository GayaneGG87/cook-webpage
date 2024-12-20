import React, { useContext, useEffect, useState } from 'react'
import { TutorCard } from './tutorCard'
import { observer } from 'mobx-react-lite'
import { Context } from '../..';
import { toJS } from 'mobx';
import classNames from 'classnames';
import style from './tutors.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { TutorsList } from './tutorsList';
import IconSearch from '../../assets/icons/iconSearch' 
import IconRectangle from '../../assets/icons/iconRectangle' 


export const TutorsComponent = observer(() => {
  return (
   <div className={classNames(style.tutorsComponent, mainStyle.container)}>
    <div className={classNames(style.mainTitle)}>
        <div className={classNames(style.text)}>
            <div className={classNames(style.icon)}><IconRectangle /></div>
            <div className={classNames(style.content)}>
                <div className={classNames(style.header)}>Explore & Learn</div>
                <p className={classNames(style.description)}>
                Dive into a range of cooking styles and techniques tailored to your interests
                </p>
            </div>
        </div>
        <div className={classNames(style.search)}>
            <IconSearch />
            <input 
            type="search"
            placeholder='Search tutors by category ' />
            </div>
    </div>
    <TutorsList />
   </div>
  )
})
