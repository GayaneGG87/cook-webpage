import React from 'react'
import classNames from 'classnames';
import style from './becomeStudent.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { TitleComponent } from '../../components/titleComponent/titleComponent';
import { BigContent } from '../../components/bigContent';
import imgurl from '../../assets/images/Rectangle32.png'
import { Button } from '../../components/common/button/button';
import { SmallContent } from '../../components/smallContent/smallContent';
import IconInfo from '../../assets/icons/iconInfo';
import IconMedal from '../../assets/icons/iconMedal';
import IconVideo from '../../assets/icons/iconVideo';
import IconCheck from '../../assets/icons/iconCheck';


export const BecomeStudent = () => {
    const list = [
        {id:1, title:'Build Your Brand.', text: 'Showcase your culinary skills and build your brand within our community.'},
        {id:2, title: 'Expand Your Reach. ', text:"Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits."},
        {id:3, title: 'Grow Your Business Faster.', text:"Utilize our platform's features and resources to accelerate your growth and increase your income."},
    ]
  return (
    <div className={classNames(style.becomeStudent)}>
       <BigContent
    img={imgurl}>
      <TitleComponent
       title= {'Become A Chef'}
       description={'Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.'} />
      
      <ul>
        {list.map((item, key)=>
                <li key={key}>
                    <IconCheck /> 
                    <p><strong>{item.title}</strong>{item.text}</p>
                </li>

        )}
      </ul>
       <Button className={mainStyle.btnBordered}>Sign Up</Button>
       <SmallContent
       text={'Learn how our platform works'}
       icon={<IconInfo />}
       side={'left'}
       type={'link'} />

    </BigContent>
    </div>
  )
}
