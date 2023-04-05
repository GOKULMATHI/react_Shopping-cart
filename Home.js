import React from 'react'
import "../components/home.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section id="Home">
     <div className='div-main'>
        <nav className='nav-bar'>
      <div className='nav-links'>
      <ul>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#Product'>Product</a></li>
        <li><a href='#login'>Login/Signup</a></li>
        <li><a href='#header4'>Contact</a></li>
      </ul>
      </div>
      </nav>
           <h1>
           ELITE</h1><br/>
               <h2>It's time to Shop! 
                Why to Stop!</h2>
    
               
        </div>
    </section>
  )
}