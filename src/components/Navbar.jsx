import React from 'react'
import { Logo } from './Logo'
import { Btn } from './Btn'
import { Searvices } from './Searvices'

export const Navbar = () => {
  return (
      <>
      <div className='Nav'>
        
        <Logo/>
        <Searvices/>
        <Btn/>
        
      </div>
      </>
  )
}
