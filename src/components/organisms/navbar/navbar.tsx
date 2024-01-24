import React from 'react'
import RextieLogo from '@images/logo-rextie.svg'
import Image from 'next/image';
import Button from '../../atoms/button/button' 
import { BsList } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 box-border w-full bg-white border-none h-20 pl-5 pr-5 flex flex-row justify-center items-center gap-4 shadow-lg'>
        <section className='w-2/6 flex justify-center items-center'>
            <Image className='w-24' src={RextieLogo} alt="rextie-logo" />
        </section>
        <section className='w-4/6 flex justify-around items-center'>
            <Button tailwindClass='text-white bg-secondaryBlue' text='Crear Cuenta'/>
            <BsList className='text-primaryBlack' size={30}/>
        </section>
    </nav>
  )
}

export default Navbar;