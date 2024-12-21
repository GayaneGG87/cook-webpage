import React, { useContext } from 'react'
import style from './statistics.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { toJS } from 'mobx';
import IconStar from '../../assets/icons/iconStar'

export const Statistics = observer(() => {
    const {cook} = useContext(Context);
      const statistics = toJS(cook._statistics);
    

  return (
    <>
    <div className={style.statistics}>
        {statistics.map(item=>
            <div className={style.card}>
                <div className={style.data}>
                   {item.data}{item.text!='Rating' ? '+' : <IconStar/>}
                </div>
                <p>{item.text}</p>
            </div>
        )}    
    </div>
    <div className={style.line}></div>
    </>
  )
})
