
"use client"
import React, {useEffect, useState} from 'react'
import RextieLogo from '@images/logo-rextie.svg'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../atoms/button/button' 
import { BsList } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

interface mouseEvent{
  type:string
}

const Navbar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  useEffect(()=>{
    console.log(dropDown);
  },[dropDown, setDropDown]);
  const handleDropDown = (e:mouseEvent) => {
    console.log(e.type);
    if(e.type === 'mouseenter'){
      setDropDown(true)
    }
    if(e.type === 'mouseleave'){
      setDropDown(false)
    }
  }
  return (
    <nav className='sticky top-0 z-10 w-full bg-white shadow-lg'>
      <div className='hidden lg:flex w-full bg-cuaternaryLightBlue'>
        <div className='hidden lg:flex gap-4 mx-28 w-fullx h-10 px-5 py-1 items-center underline-offset-2 '>
          <Button tailwindClass='rounded-none font-poppins h-6 border-none w-20 text-base text-secondaryBlue hover:cursor-pointer p-0 focus:font-semibold focus:border focus:border-solid focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-2 border-secondaryOrange'>Personas</Button>
          <Button tailwindClass='rounded-none font-poppins h-6 border-none w-20 text-base text-secondaryBlue hover:cursor-pointer p-0 focus:font-semibold focus:border focus:border-solid focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-2 border-secondaryOrange'>Empresas</Button>
        </div>
      </div>
      <div className=' lg:px-32 box-border w-full bg-white border-none h-20 pl-5 pr-5 flex flex-row justify-center items-center gap-4'>
        <section className='w-2/6 flex gap-1 justify-center items-center'>
            <Image className='lg:w-26 w-28' src={RextieLogo} alt="rextie-logo" />
            <div className='mt-0.5 lg:flex hidden flex-row gap-1 justify-center items-center'>
              <div className='h-3 w-0 border border-blue-700 bg-blue-700'/>
              <p className='mt-0.5 font-poppins text-secondaryBlue text-sm'> La casa de cambio online, <span className='font-bold'>Líder del Perú</span></p>
            </div>
        </section>
        <section className='lg:gap-6 w-4/6 flex justify-around items-center'>
            <ul className='hidden lg:flex gap-4 w-full justify-end'>
              <li className='hover:cursor-pointer hover:bg-gray-100 px-2.5 py-1.5 rounded-lg'>
                <Link href={'/'} className='font-poppins text-secondaryBlue text-sm'>Nosotros</Link>
              </li>
              <li className='hover:cursor-pointer hover:bg-gray-100 px-2.5 py-1.5 rounded-lg'>
                <Link href={'/'} className='font-poppins text-secondaryBlue text-sm'>Blog</Link>
              </li>
              <li onMouseEnter={(e)=>handleDropDown(e)} onMouseLeave={(e)=>handleDropDown(e)} className='relative flex justify-center items-center gap-1 hover:cursor-pointer hover:bg-gray-100 px-2.5 py-1.5 rounded-lg'>
                <Link href={'/'} className='font-poppins text-secondaryBlue text-sm'>Servicios</Link>
                <MdKeyboardArrowDown className='text-secondaryOrange' size={22}/>
                <ul className={`mt-20 bg-white w-28 absolute flex-col -top-11 -bottom-28 left-0 shadow-lg ${dropDown? 'flex':'hidden'}`}>
                  <li className='font-poppins text-secondaryBlue text-sm p-2 hover:cursor-pointer hover:bg-gray-100'>Factoring</li>
                  <li className='font-poppins text-secondaryBlue text-sm p-2 hover:cursor-pointer hover:bg-gray-100'>Visa</li>
                  <li className='font-poppins text-secondaryBlue text-sm p-2 hover:cursor-pointer hover:bg-gray-100'>Empresas</li>
                </ul>
              </li> 
            </ul>
            <div className='hidden lg:flex h-3 w-0 border border-blue-700 bg-blue-700'/>
            <div className='flex flex-1 justify-end items-center gap-4'>
              <Button tailwindClass='text-white bg-secondaryBlue lg:w-36' text='Crear Cuenta'/>
              <BsList className='lg:hidden text-primaryBlack' size={30}/>
            </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar;