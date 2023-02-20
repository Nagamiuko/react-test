import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Buttonbar from '../components/buttonbar/Buttonbar'
import './style.scss'
const Home = () => {
  return (
    <div>
      <div className='header'><Header/></div>
       <div className="container">
          Hello
       </div>
      <div className='footer'>
          <Buttonbar className='footbar' />
      </div>
    </div>
  )
}

export default Home