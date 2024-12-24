import React from 'react'
import style from './info.module.scss';
import { TitleComponent } from '../../components/titleComponent/titleComponent';
import IconBant from '../../assets/icons/iconBant';


export const Info = () => {
  return (
    <div className={style.info}>
        <TitleComponent
        icon={<IconBant />}
        title={'Money-back guarantee'} 
        description={'We believe youll enjoy your first cooking lesson. However, weve got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.'}
        />
        <div className={style.line}></div>
    </div>
  )
}
