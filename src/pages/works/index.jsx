import React from 'react'
import classNames from 'classnames';
import style from './works.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { TitleComponent } from '../../components/titleComponent/titleComponent';
import { SmallContent } from '../../components/smallContent/smallContent';
import IconSearch from '../../assets/icons/iconSearch';
import IconEye from '../../assets/icons/iconEye';
import { WorksList } from './works';


export const WorksComponent = () => {
  return (
    <div className={classNames(style.works, mainStyle.container)}>
        <div className={style.mainTitle}>
          <TitleComponent 
            icon={<IconEye/>}
            title= {'How It Works'}
            description={'Getting Started with the COOK Platform'}/>
          <SmallContent
            icon={<IconSearch />}
            type={'input'}
            side={'left'}
            text={'Search tutors by category '} />
      </div>
    <WorksList />
    </div>
  )
}
