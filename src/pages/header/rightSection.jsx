import React, { useContext, useEffect, useState } from 'react';
import classNames from "classnames";
import style from './style.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { Button } from '../../components/common/button/button';
import IconDown from '../../assets/icons/iconDown';
import IconInfo from '../../assets/icons/iconInfo';
import IconLogout from '../../assets/icons/iconLogout';
import { Menu } from '../../components/menu/menu';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Context } from '../..';

 export const RightSection = observer(() => {
  const {cook} = useContext(Context)
  const langList = toJS(cook._languages);
  const currList = toJS(cook._currency);
  const {selectedCurr, selectedLang} = cook
  const [openLang, setOpenLang] = useState(false)
  const [openCurr, setOpenCurr] = useState(false)

  useEffect(()=>{
  },[])

  const handleClick = (value)=>{
    openLang && cook.setSelectedLang(value.name);
    openCurr && cook.setSelectedCurr(value.name)
  }
  const handleOpenMenu = (type)=>{
    if(type==='lang'){
      setOpenLang(!openLang)
      openCurr && setOpenCurr(false)
    }else{
      setOpenCurr(!openCurr)
      openLang && setOpenLang(false)
    }

  }
  const handleLogin = () => {

  }
  return (
    <div className={classNames(style.section)}>
      <div className={classNames(style.lang)}
            onClick={e=>handleOpenMenu('lang')}>
              {selectedLang} 
              <IconDown className={classNames(openLang ? style.show : '')} />
                {openLang &&  
                <Menu list={langList} 
                      handleClick={handleClick}
                      title="Select a Language"/>
              } </div>
      <div className={classNames(style.currency)}
            onClick={e=>handleOpenMenu('curr')}>
              {selectedCurr} 
              <IconDown className={classNames(openCurr ? style.show : '')} />
                {openCurr &&  
                <Menu list={currList} 
                      handleClick={handleClick}
                      title="Select a Currency" />
               }</div>
       <div className={classNames(style.info)}>
        <IconInfo/></div>
      <Button className={classNames(mainStyle.btnFill)}
                onClick={e=>handleLogin}>
        Log In <IconLogout/>
      </Button>     
    </div>
  )
})
