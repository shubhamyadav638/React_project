import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {  FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
       {/* ------------------footer start here-------------- */}

<footer className='bg-slate-950 text-white flex flex-col justify-between items-center gap-4 capitalize'>
  <div className="title text-5xl ">these are components{" "}</div>
  <div className='list flex justify-between w-full px-[100px] items-center text-2xl'>
    <ul className=' '>
      <li className='text-3xl'>Services</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
    </ul>

    <ul className=' '>
      <li className='text-3xl' >Company</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
    </ul>

    <ul className=''>
      <li className='text-3xl'>Let us help you</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
    </ul>

    <ul className=''>
      
      <li className='text-3xl'>Contect with </li>
      <li><Link to='https://www.linkedin.com/in/shubham-yadav-170b28237/' > Linkedin</Link></li>
      <li><Link to='https://www.instagram.com/__shubham__.45/' >instagram</Link></li>
      <li><Link to='https://www.facebook.com/shubham.yaduvanshi.7393' >facebook</Link></li>
      <li><Link to='https://x.com/Shubham08349826' >twitter</Link></li>
    </ul>
  </div>

  <div className="icon flex flex-col justify-center items-center gap-4 text-4xl">
  <div className='flex gap-4'>
  <Link to='https://www.facebook.com/shubham.yaduvanshi.7393' ><FaFacebook/></Link>
  <Link to='https://www.instagram.com/__shubham__.45/' ><FaInstagram/></Link>
  <Link to='https://www.linkedin.com/in/shubham-yadav-170b28237/' ><FaLinkedin/> </Link>
  <Link to='https://x.com/Shubham08349826' ><BsTwitterX/></Link>
  </div>
  <div>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
  </div>
</footer>


    {/* ------------------------footer end here--------------------- */}
    </div>
  )
}

export default Footer
