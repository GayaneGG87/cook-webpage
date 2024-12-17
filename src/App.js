
import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/index.scss'
import { Header } from './pages/header';
import { observer } from 'mobx-react-lite';
import { Context } from '.';

export const App = observer(()=> {
  const {cook} = useContext(Context);
console.log('cook observer', cook.selectedLang)
  return (
    <div className="App">
     <Header />
    </div>
  );
})

