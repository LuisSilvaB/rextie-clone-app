"use client"
import React, { useState, useEffect } from 'react';
import InfoCurrencyCalc from '@/app/sections/home/infoCurrencyCalc';
import "swiper/css";
import "./styles/swipe/swipe.css"
import BankInfo from './sections/home/BankInfo';
import ExchangeRateTable from './sections/home/ExchangeRateTable';
import Button from '@/components/atoms/button/button';
import StatsSection from './sections/home/StatsSection';
import AssociatedCompaniesCarousel from './sections/home/AssociatedCompaniesCarousel';
import ClientTestimonials from './sections/home/ClientTestimonials';
import MediaCoverageSection from './sections/home/MediaCoverageSection';
import DownloadLinks from './sections/home/downloadLinks';

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <div className="border-none w-full h-auto bg-white">
        <InfoCurrencyCalc />
        <BankInfo isMobile = {isMobile} />
        <ExchangeRateTable isMobile = {isMobile}/>
        <section className='w-full flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:gap-32 gap-3 lg:h-20 h-30 p-5 bg-primaryBlue'>
          <p className='font-poppins text-white font-semibold lg:text-2xl text-lg'>Cambia tu dinero rápido y seguro</p>
          <Button text='Cambia aquí' tailwindClass='font-poppins bg-white text-primaryBlue font-semibold'/>
        </section>
        <StatsSection isMobile = {isMobile}/>
        <AssociatedCompaniesCarousel isMobile = {isMobile}/>
        <ClientTestimonials isMobile = {isMobile}/>
        <MediaCoverageSection />
        <DownloadLinks />
      </div>
    )
  }

export default Home;

