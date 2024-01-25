import React from 'react'
import RextieLogo from '@images/downloadLinks/rextie-logo.png'
import AppsRexie from '@images/downloadLinks/apps-rextie.png'
import AppStore from '@images/downloadLinks/app-store.png'
import GooglePlay from '@images/downloadLinks/google-play.png'
import AppGalllery from '@images/downloadLinks/app-gallery.png'
import Image from 'next/image'

import { FaStar } from "react-icons/fa6";




const DownloadLinks = () => {
  return (
    <div className='relative w-full flex justify-center'>      
      <div className='lg:w-4/6 lg:py-10 lg:px-28 w-11/12 rounded-lg bg-cuaternaryLightBlue flex gap-3 flex-col my-36 py-5 px-2.5'>
        <div className='lg:flex lg:flex-col flex flex-col lg:gap-4 gap-3'>
          <div className='lg:justify-start w-full flex flex-col justify-center items-center gap-3'>
            <div className='flex lg:w-full justify-start flex-row gap-2'>
              <Image src={RextieLogo} alt='RextieLogo'/>
              <div className='flex flex-col lgjustify-start lg:items-start lg:w-full  gap-0'>
                <div className='flex flex-row  justify-start items-center gap-1'>
                  <FaStar color='#ffcc49'/>
                  <p className='font-bold font-poppins text-base'>4.8</p>
                </div>
                <p className='font-poppins text-xs'>Rextie en App Store</p>
              </div>
            </div>
            <p className='font-poppins lg:text-2xl text-base font-semibold lg:w-full lg:text-start'>¡Cambia dinero desde cualquier lugar!</p>
          </div>
          <div className='flex lg:w-full lg:justify-start justify-center items-center flex-row lg:gap-6 gap-2'>
            <Image className='lg:w-auto w-24' src={AppStore} alt='AppStore'/>
            <Image className='lg:w-auto w-24' src={GooglePlay} alt='AppStore'/>
            <Image className='lg:w-auto w-24' src={AppGalllery} alt='AppStore'/>
          </div>
        </div>
        <Image className='hidden lg:flex lg:absolute lg:right-96 lg:top-24 lg:w-44' src={AppsRexie} alt='AppsRexie'/>
      </div>
    </div>
  )
}

export default DownloadLinks;