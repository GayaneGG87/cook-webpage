import React from 'react'
import style from './works.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { BigContent } from '../../components/bigContent';
import imgurl1 from '../../assets/images/Frame54.png'
import imgurl2 from '../../assets/images/Rectangle21.png'
import imgurl3 from '../../assets/images/Rectangle21-1.png'
import { Button } from '../../components/common/button/button';
import { TitleComponent } from '../../components/titleComponent/titleComponent';

export const WorksList = () => {
  return (
    <div className={style.list}>
    <BigContent
    img={imgurl1}>
      <TitleComponent
       title= {'Explore Our Culinary Experts'}
       description={'Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.'} />
       <Button className={mainStyle.btnFill}>Browse Tutors</Button>
    </BigContent>
    <BigContent
    img={imgurl2}>
      <TitleComponent
       title= {'Select Your Perfect Match'}
       description={'Once youve explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.'} />
    </BigContent>
    <BigContent
    img={imgurl3}>
      <TitleComponent
       title= {'Enjoy Your Interactive Lesson Experts'}
       description={'Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.'} />
       <Button className={mainStyle.btnFill}>Sign Up For Free</Button>
    </BigContent>
  </div>
  )
}
