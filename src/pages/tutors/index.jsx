import React from 'react'
import classNames from 'classnames';
import style from './tutors.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { TutorsList } from './tutorsList';
import IconSearch from '../../assets/icons/iconSearch' 
import IconRectangle from '../../assets/icons/iconRectangle' 
import { TitleComponent } from '../../components/titleComponent/titleComponent';
import { SmallContent } from '../../components/smallContent/smallContent';
import IconDownArrow from '../../assets/icons/iconDownArrow';


export const TutorsComponent = () => {
  return (
   <div className={classNames(style.tutorsComponent, mainStyle.container)}>
    <div className={style.mainTitle}>
          <TitleComponent 
            icon={<IconRectangle/>}
            title= {'Explore & Learn'}
            description={'Dive into a range of cooking styles and techniques tailored to your interests'}/>
          <SmallContent
            icon={<IconSearch />}
            type={'input'}
            side={'left'}
            text={'Search tutors by category '} />
      </div>
      <TutorsList />
      <div className={style.more}>
        <SmallContent
            icon={<IconDownArrow />}
            type={'link'}
            side={'right'}
            text={'Show more '} />
      </div>
   </div>
  )
}

