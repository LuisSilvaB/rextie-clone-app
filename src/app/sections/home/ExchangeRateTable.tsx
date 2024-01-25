import React from 'react'
import Button from '@/components/atoms/button/button';
import Image from 'next/image';
import RextieLogo from '@images/logo-rextie.svg'
import SunnatLogo from '@images/sunatLogo.svg'
import RextieLogoWhite from '@images/rextie-white.svg'
import Bank from '@images/Bank.svg'
import PriceTable from '@/components/organisms/priceTable/priceTable';
interface ExchangeRateTableProps{
    isMobile: boolean;
}

const ExchangeRateTable:React.FC<ExchangeRateTableProps> = (props) => {
    const { isMobile } = props
  return (
    <section className='flex lg:py-16 lg:px-52 justify-center items-center'>
    {isMobile ? (<></>):(             
      <div className='flex flex-1 justify-center items-center flex-col'>
          <PriceTable />
          <p className='w-1/2 pt-1 text-start font-poppins text-xs text-gray-400'>*Precios referenciales</p>
      </div>)}
    <div className='flex lg:flex-1 flex-col justify-center items-center py-5 px-2.5 lg:gap-4 gap-6'>
      <div className='flex w-full justify-center gap-4'>
        <div className='flex flex-col lg:w-full w-3/4 lg:gap-2 gap-4'>
          <div className='flex flex-row gap-3 lg:justify-start justify-center lg:items-center'>
            <div className='w-4 h-4 bg-primaryLightBlue rounded-full'/>
            <p className='font-poppins font-semibold lg:text-lg text-sm text-primaryBlue'>REXTIE BUSINESS</p>
          </div>
          <p className='font-poppins text-primaryBlue font-semibold lg:text-4xl lg:text-start text-2xl text-center'>Tenemos un tipo de cambio exclusivo</p>
        </div>
      </div>
      {isMobile?(
        <div className='flex justify-center items-center flex-col'>
          <PriceTable />
          <p className='w-full font-poppins text-xs text-gray-400'>*Precios referenciales</p>
        </div>
      ):(<></>)}
        <div className='lg:w-full w-4/5 flex flex-col lg:items-start justify-center items-center gap-4'>
          <p className='font-poppins lg:text-start text-center lg:text-sm text-xs'>Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online</p>
          <Button text='Conocer más' tailwindClass='border-none bg-primaryBlue text-white font-poppins font-semibold' />
        </div>
    </div>

  </section>
    )
}

export default ExchangeRateTable;