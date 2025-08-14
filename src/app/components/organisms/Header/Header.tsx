"use client";
import React from 'react'
import Logo from '../../molecules/Logo/Logo'
import NavActions from '../../molecules/NavActions/NavActions'

const Header = () => {
  return (
    <div className='border-b bg-white/80 backdrop-blur-sm flex items-center justify-between p-2'>
      <Logo/>
      <NavActions/>
    </div>
  )
}

export default Header