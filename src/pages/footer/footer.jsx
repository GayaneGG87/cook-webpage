import React from 'react'
import classNames from 'classnames';
import style from './footer.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { List } from '../../components/common/list/list';

export const Footer = () => {
   const  infoList = [
        
        {title:'About US',
          content: [
            {id: 1, name:'Who we are', link: '/'}, 
            {id: 2, name:'How it works', link: '/'}, 
            {id: 3, name:'COOK reviews', link: '/'}, 
          ]  
        },
        {title:'For Students',
            content: [
              {id: 1, name:'COOK blog', link: '/'}, 
              {id: 2, name:'Find a tutor', link: '/'}, 
            ]  
          },
          {title:'For Tutors',
            content: [
              {id: 1, name:'Become an online chef', link: '/'}, 
              {id: 2, name:'Teach cooking online', link: '/'}, 
            ]  
          },
          {title:'Supports',
            content: [
              {id: 1, name:'Need a help?', link: '/'},  
            ]  
          }
    ]
    const socialList = [
        {title:'',
            content: [
              {id: 1, name:'USA', link: '/'}, 
              {id: 2, name:'Your address goes there', link: '/'}, 
              {id: 3, name:'+000000000', link: '/'}, 
            ]  
          },{title:'COOK’s Socials',
            content: [
              {id: 1, name:'Who we are', link: '/'}, 
             
            ]  
          },{title:'LEGAL',
            content: [
              {id: 1, name:'Terms Of Serivce', link: '/'}, 
              {id: 2, name:'How it works', link: '/'}, 
              {id: 3, name:'Privacy Policy', link: '/'}, 
            ]  
          },
    ]
  return (
    <div className={classNames(style.footer)}>
        <div className={style.top}>
            <div className={style.logo}>COOK</div>
            {
            infoList.map((item, key)=>
            <List key={key}
            item={item}
            />)
            }
        </div>
        <hr />
        <div className={style.bottom}>
        {
            socialList.map((item, key)=>
            <List key={key}
            item={item}
            />)
            }
        </div>
    </div>
  )
}
