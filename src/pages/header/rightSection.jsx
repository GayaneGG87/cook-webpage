import React, { useState } from 'react';
import classNames from "classnames";
import style from './style.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss'
import { Button } from '../../components/common/button/button';
import IconCook from '../../assets/icons/iconCook';
import IconDown from '../../assets/icons/iconDown';
import IconInfo from '../../assets/icons/iconInfo';
import IconLogout from '../../assets/icons/iconLogout';
import { Menu } from '../../components/common/menu/menu';

export const RightSection = () => {
  const [langList, setLangList] = useState(false)
  const [currList, setCurrList] = useState(false)
  return (
    <div className={classNames(style.section)}>
      <div className={classNames(style.lang)}
      onClick={e=>setLangList(!langList)}
      >Eng <IconDown />
      {langList &&  <Menu />}</div>
      <div className={classNames(style.currency)}
      onClick={e=>setCurrList(!currList)}>USD <IconDown />
       {currList &&  <Menu />}</div>
      <div className={classNames(style.info)}><IconInfo/></div>
      <Button className={classNames(mainStyle.btnFill)}>
        Log In <IconLogout/> </Button>
      
     
    </div>
  )
}
