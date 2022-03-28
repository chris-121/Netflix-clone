import React from 'react'
import Navbar from './components/Navbar/navbar';
import Banner from "./components/banner/banner";
import './App.css';
import RowPost from './components/rowPost/rowPost';
import { actionUrl, comedy, originals } from './constants/urls';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actionUrl} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>         
    </div>
  );
}

export default App;
