import React, { useContext, useEffect, useState } from 'react';
import style from './header.module.scss';
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

  return (
    <div className={style.section}>
      <div className={style.lang}
            onClick={e=>handleOpenMenu('lang')}>
            {selectedLang} 
            <IconDown 
            className={openLang ? style.show : ''} />
            {openLang &&  
            <Menu list={langList} 
                  handleClick={handleClick}
                  title="Select a Language"
              />} 
            </div>
      <div className={style.currency}
            onClick={e=>handleOpenMenu('curr')}>
            {selectedCurr} 
            <IconDown className={openCurr ? style.show : ''} />
            {openCurr &&  
            <Menu list={currList} 
                  handleClick={handleClick}
                  title="Select a Currency"
            />}
        </div>
       <div className={style.info}>
            <IconInfo/>
        </div>
      <Button className={mainStyle.btnFill}>
        Log In 
      <IconLogout/>
      </Button>     
    </div>
  )
})
