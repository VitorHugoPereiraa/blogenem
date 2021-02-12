import './App.css'

import Navbar from '../components/Navbar'
import Caroussel from "../components/Caroussel"
import Content from "../components/Content"
import Youtube from "../components/Youtube"

function Info() {
  return (
    <div className='app'>
      <Navbar />
      <Caroussel />
      <Content />
      <Youtube />
    </div>
  );
}

export default Info;
