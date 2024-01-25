import React, { FC } from 'react'
import Adex from '@images/ADEX.png'
import Asep from '@images/ASEP.png'
import Ccl from '@images/CCL.png'
import FINTECH from '@images/FINTECH.png'
import SCALEUP from '@images/SCALEUP.png'
import SNI from '@images/SNI.png'

import iabMIXX from '@images/iabMIXX.png'
import Visa from '@images/VISA.png'
import SEEDSTARSWORLD from '@images/SEEDSTARSWORLD.png'
import Ministerio from '@images/MINISTERIO2.jpg'
import STARTUP from '@images/STARTUP.png'
import Iso from '@images/ISO.png'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import Image from 'next/image';

interface AssociatedCompaniesCarouselProps{
    isMobile: boolean;
}

const AssociatedCompaniesCarousel:React.FC<AssociatedCompaniesCarouselProps> = (props) => {
    const { isMobile } = props;
    SwiperCore.use([Autoplay]);
  return (
    <div className='h-20 w-full overflow-hidden mb-8'>
        <Swiper loop={true} centeredSlides={false} autoplay={{delay:2500, pauseOnMouseEnter:true }} speed={1000} slidesPerView={isMobile?1:3} spaceBetween={0} className='mySwiper ease-linear w-auto flex h-auto bg-primaryBlue overflow-hidden'>
            <SwiperSlide className='flex w-14'>
                <div className='flex-1 flex flex-row justify-center items-center gap-10'>
                    <p className='font-bold text-white lg:text-2xl text-lg lg:px-8 '>Somos ganadores</p>
                    <Image src={iabMIXX} alt='iabMIXX'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row justify-center items-center gap-10'>
                    <Image src={Visa} alt='Visa'/>
                    <Image src={SEEDSTARSWORLD} alt='SEEDSTARSWORLD'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row justify-center items-center gap-10'>
                    <Image src={Ministerio} alt='Ministerio'/>
                    <Image src={STARTUP} alt='STARTUP'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row gap-10 justify-center items-center'>
                    <Image src={Iso} alt='Iso'/>
                    <p className='font-bold text-white lg:text-2xl text-lg lg:px-0'>Somos asociados</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row gap-10 justify-center items-center'>
                    <Image src={Adex} alt='Adex'/>
                    <Image src={Asep} alt='Asep'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row gap-10 justify-center items-center'>
                    <Image src={Ccl} alt='Ccl'/>
                    <Image src={FINTECH} alt='FINTECH'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex-1 flex flex-row gap-10 justify-center items-center'>
                    <Image src={SCALEUP} alt='SCALEUP'/>
                    <Image src={SNI} alt='SNI'/>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AssociatedCompaniesCarousel;