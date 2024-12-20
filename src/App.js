
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
import { TutorsComponent, TutorsList } from './pages/tutors';


export const App = observer(()=> {
  const {cook} = useContext(Context);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BigBanner />
        <StatisticComponent />
        <TutorsComponent />
      </div>
    </BrowserRouter>
  );
})

