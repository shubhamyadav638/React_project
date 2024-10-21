import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      
      {/* ----------------------------header start here-------------------- */}
  <header className='bg-slate-950 flex text-white justify-between px-6 py-6 capitalize text-2xl'>
       <div className="box flex gap-4 items-center">
        <div className="icon"><Link to='/' ><FaHome/></Link></div>
          <p><Link to='/Dashboard' >go to dashboard</Link></p>
          <div className='blink '></div>
          </div>

<nav>
  <ul className='flex gap-4 items-center'>
    <li><Link to='/Ecomm' >Ecomm</Link></li>
    <li><Link to='/Cart' ><FaCartArrowDown/></Link></li>
    <li><Link to='/About' >about</Link></li>
    <li><Link to='/Contect' >contect us</Link></li>
    <li><Link to='/signin' >sign in</Link></li>
    <li><Link to='/signup' >sign up</Link> </li>
  </ul>
</nav>

    </header>

    {/* ----------------------Header end here----------------- */}
    </div>
  )
}

export default Header
