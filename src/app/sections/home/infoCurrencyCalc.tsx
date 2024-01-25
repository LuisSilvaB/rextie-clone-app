import React from 'react'
import Image from 'next/image';
import CityLogo from '@images/citi-home.svg'
import RppLogo from '@images/rpp-home.svg'
import VisaLogo from '@images/visa-home.svg'
import BannerHome from '@images/banner-home.jpg'
import CurrencyMate from '@/components/organisms/currencyMate/currencyMate';

const InfoCurrencyCalc = () => {
  return (
    <section className="lg:flex lg:mx-28 lg:pt-8 lg:gap-5 justify-center h-auto py-6 px-2.5">
        <div className='hidden lg:flex lg:w-1/3 justify-center items-center'>
          <Image src={BannerHome} alt='baerHome'/>
        </div>
        <div className='flex flex-col lg:justify-center lg:items-center lg:w-1/3'>
          <p className="mb-6 font-poppins lg:text-start lg:text-3xl text-center tracking-normal text-secondaryBlue text-xl font-semibold">¡Reafirmamos nuestro liderazgo como la primera 
          <span className="text-primaryBlue"> casa de cambio online que llega a los 5 mil millones de dólares</span>
          !</p>
          <div className="box-border mx-2.5 mb-6 py-4 lg:px-7 px-5 flex gap-2 flex-row rounded-xl border-2 border-secondaryBlue lg:w-10/12">
            <p className="
              w-auto
              justify-end
              items-center
              flex-1
              font-poppins 
              text-secondaryBlue
              font-semibold
              text-sm
              text-end
              ">Ahora, cerificados con</p> 
            <p className="
              flex
              items-center
              w-auto
              font-poppins 
              text-secondaryBlue
              font-extrabold
              text-4xl
              text-center
              ">ISO 27001</p> 
          </div>
          <div className="mb-6 lg:gap-4 flex justify-around">
            <div className="flex flex-col gap-2">
              <p className="
                font-poppins 
                font-bold
                text-secondaryBlue
                text-xs
                ">Inversionistas estratégicos:</p>
              <div className="flex flex-row justify-center">
                <Image src={CityLogo} alt='cityLogo'/>
                <Image src={RppLogo} alt='RppLogo'/>
              </div>
            </div>
            <div className='w-0.5 border border-solid bg-secondaryBlue' />
            <div className="flex flex-col gap-2">
              <p className="
                font-poppins 
                font-bold
                text-secondaryBlue
                text-xs
                ">Aliado estratégicos:</p>
              <div className="flex h-full justify-center items-end">
                <Image src={VisaLogo} alt='cityLogo'/>
              </div>
            </div>
          </div>
        </div>
        <CurrencyMate/>
      </section>
  )
}

export default InfoCurrencyCalc;