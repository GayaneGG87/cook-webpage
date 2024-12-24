
import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/index.scss'
import { Header } from './pages/header';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { BigBanner } from './pages/banner';
import {BrowserRouter} from 'react-router-dom'
import { StatisticComponent } from './pages/statistics';
import { TutorsComponent } from './pages/tutors';
import { Benefits } from './pages/benefits/index';
import { Advantages } from './pages/advatages';
import { WorksComponent } from './pages/works/index';
import { Info } from './pages/info/info';
import { BecomeChef } from './pages/becomeChef/becomeChef';
import { BecomeStudent } from './pages/becomeStudent/becomeStudent';
import { Popular } from './pages/popular/popular';
import { Footer } from './pages/footer/footer';


export const App = observer(()=> {
  const {cook} = useContext(Context);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BigBanner />
        <StatisticComponent />
        <TutorsComponent />
        <Benefits />
        <Advantages />
        <WorksComponent/>
        <Info />
        <BecomeChef />
        <BecomeStudent/>
        <Popular />
        <Footer />
      </div>
    </BrowserRouter>
  );
})

