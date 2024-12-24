import React from 'react';
import classNames from 'classnames';
import style from './popular.module.scss';
import mainStyle  from './../../assets/styles/_classes.module.scss';
import { TitleComponent } from '../../components/titleComponent/titleComponent';
import IconRectangle from '../../assets/icons/iconRectangle';
import { Button } from '../../components/common/button/button';
import { ItemBlog } from '../../components/common/blog/blog';

export const Popular = () => {
    const categories = [
        {id: 1, name:  'Bakery'},
        {id: 2, name: 'Japanese Sushi Making'},
        {id: 3, name: 'Vegan'},
        {id: 4, name: 'Thai'},
        {id: 5, name: 'SeaFood'},
        {id: 6, name: 'Italian Cuisine'},
        {id: 7, name: 'BBQ & Grilling'},
    ]
    const countries = [
        {id: 1, name:  'USA'},
        {id: 2, name: 'Spain'},
        {id: 3, name: 'France'},
        {id: 4, name: 'Mexiko'},
        {id: 5, name: 'Germany'},
        {id: 6, name: 'Armenia'},
    ]

  return (

    <div className={style.popular}>
        <div className={style.wrapper}>
            <TitleComponent 
            title={'Popular online classes'}
            icon={<IconRectangle />}/>

            <div className={style.article}>            
                <h4>Find a tutor by category</h4>
                <div className={style.list}>
                    {categories.map((item, key)=>
                    <Button 
                    className={mainStyle.badge} 
                    key={key}>
                        {item.name}
                    </Button>)}
                </div>
            </div>
            <div className={style.article}>
            <h4>Find a tutor by country</h4>
            <div className={style.list}>
                    {countries.map((item, key)=>
                    <Button 
                    className={mainStyle.badge} 
                    key={key}>
                        {item.name}
                    </Button>)}
                </div>
            </div>
        </div>
        <div className={style.blogsContent}>
        <TitleComponent 
            title={'Popular online classes'}
            icon={<IconRectangle />}/>
            <div className={style.blogsList}> 
            <ItemBlog />
            <ItemBlog />
            <ItemBlog />
            <ItemBlog />
            </div>
        </div>
    </div>
  )
}
