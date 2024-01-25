import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image';

import RapidClock from '@images/rapid-orange.svg'
import Bcp from '@images/bcp.svg'
import Interbank from '@images/interbank.svg'
import BancoPichincha from '@images/banco-pichincha.svg'
import BanBif from '@images/banbif.svg'
import Clock from '@images/clock-orange.svg'
import Bbva from '@images/bbva.svg'
import Scotiabanck from '@images/scotiabank.svg'
import Comercio from '@images/banco-de-comercio-logo.svg'
import MiBanco from '@images/mibanco-logo.svg'

import "swiper/css";
import "../../styles/swipe/swipe.css"

interface BankInfoprops {
  isMobile: boolean;
}

const BankInfo:React.FC <BankInfoprops> = (props) => {
  const { isMobile } = props; 
  if(isMobile) {    
    return (
      <Swiper slidesPerView={'auto'} spaceBetween={30} className='mySwiper bg-cuaternaryLightBlue'>
      <SwiperSlide className='flex flex-col p-6'>
        <div className='flex flex-row justify-start items-center gap-2 lg'>
          <Image className='w-9' src={RapidClock} alt='rapicClock'/>
          <p className='font-poppins text-black font-semibold text-sm '>Transferencias inmediatas - 15min</p>
        </div>
        <div className='flex flex-row gap-5'>
          <Image className='w-14' src={Bcp} alt='bcpLogo'/>
          <Image className='' src={Interbank} alt='interbancLogo'/>
          <Image className='w-14' src={BancoPichincha} alt='bancoPichinchaLogo'/>
          <Image className='w-14' src={BanBif} alt='BanBifLogo'/>
        </div>
        <p className='font-poppins text-black text-xs'>Cobertura en todo el Perú</p>
      </SwiperSlide>
      <SwiperSlide className='flex flex-col p-6'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <Image className='w-7' src={Clock} alt='Clock'/>
          <p className='font-poppins text-black font-semibold text-sm '>Transferencias interbancarias - 24h</p>
        </div>
        <div className='flex flex-row gap-5'>
          <Image className='w-14' src={Bbva} alt='bcpLogo'/>
          <Image className='' src={Scotiabanck} alt='interbancLogo'/>
          <Image className='w-14' src={Comercio} alt='bancoPichinchaLogo'/>
          <Image className='w-14' src={MiBanco} alt='BanBifLogo'/>
        </div>
        <p className='font-poppins text-black text-xs'>Cobertura en todo el Perú</p>
      </SwiperSlide>
    </Swiper>
    )
  }
  return(
    <section className='z-0 flex flex-row justify-around items-center bg-cuaternaryLightBlue'>
      <div className='flex flex-col gap-4 p-6'>
        <div className='flex flex-row justify-start items-center gap-2 lg'>
          <Image className='w-9' src={RapidClock} alt='rapicClock'/>
          <p className='font-poppins text-black font-semibold text-sm '>Transferencias inmediatas - 15min</p>
        </div>
        <div className='flex flex-row gap-5'>
          <Image className='w-14' src={Bcp} alt='bcpLogo'/>
          <Image className='' src={Interbank} alt='interbancLogo'/>
          <Image className='w-14' src={BancoPichincha} alt='bancoPichinchaLogo'/>
          <Image className='w-14' src={BanBif} alt='BanBifLogo'/>
        </div>
        <p className='font-poppins text-black text-xs'>Cobertura en todo el Perú</p>
      </div>
      <div className='h-24 w-0.5 border border-solid border-gray-300'/>
      <div className='flex flex-col gap-4 p-6'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <Image className='w-7' src={Clock} alt='Clock'/>
          <p className='font-poppins text-black font-semibold text-sm '>Transferencias interbancarias - 24h</p>
        </div>
        <div className='flex flex-row gap-5'>
        <Image className='w-14' src={Bbva} alt='bcpLogo'/>
          <Image className='' src={Scotiabanck} alt='interbancLogo'/>
          <Image className='w-14' src={Comercio} alt='bancoPichinchaLogo'/>
          <Image className='w-14' src={MiBanco} alt='BanBifLogo'/>
        </div>
        <p className='font-poppins text-black text-xs'>Cobertura en todo el Perú</p>
      </div>
    </section>
  )
}

export default BankInfo;