import React, { useContext } from 'react'
import classNames from "classnames";
import style from './statistics.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { toJS } from 'mobx';
import IconStar from '../../assets/icons/iconStar'

export const Statistics = observer(() => {
    const {cook} = useContext(Context);
      const statistics = toJS(cook._statistics);
    

  return (
    <>
    <div className={classNames(style.statistics)}>
        {statistics.map(item=>
            <div className={classNames(style.card)}>
            <div className={classNames(style.data)}>
            {item.data}{item.text!='Rating' ? '+' : <IconStar/>}</div>
            <div className={classNames(style.text)}>{item.text}</div>
        </div>
        )}    
    </div>
    <div className={classNames(style.line)}></div>
    </>
  )
})
