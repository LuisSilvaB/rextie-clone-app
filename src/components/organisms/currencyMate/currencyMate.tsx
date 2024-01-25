import React from 'react'
import Image from 'next/image'
import PeruFlag from '@images/peru-flag.svg'
import UsFlag from '@images/us-flag.svg'
import PigIcon from '@images/pig-icon.svg'
import Arrow from '@images/arrow.svg'
import Change from '@images/change.svg'
import Button from '@/components/atoms/button/button';
import ToggleButton from '@/components/molecules/toogleButton/toggleButton'

const CurrencyMate = () => {
  return (
        <div className='
          lg:w-96
          box-border
          pt-1.5
          px-5 
          pb-5
          bg-cuaternaryLightBlue
          rounded-xl
          '>
            <ToggleButton />
            {/*Container Inputs*/}
            <div className='relative w-auto box-border'>
  
              <Image className='absolute inset-1/3 active:rotate-180 transition-all' src={Change} alt='ChangeIcon'/>

              {/* Cambio1*/}
              <div className='
                  mb-2.5
                  py-2.5
                  px-3.5
                  rounded-lg
                bg-white
                  h-20
                  flex
                  flex-row
                '>
                <div className='w-2/6 flex flex-row gap-2 justify-start items-center'>
                  <Image src={ PeruFlag } alt='PeruFlag'/>
                  <p className='text-black font-poppins'>PEN</p>
                </div>
                <div className='h-full w-4/6 flex flex-col'>
                  <p className='w-full font-poppins text-primaryGray text-xs text-end'>Recibes soles</p>
                  <div className='h-full flex flex-row'>
                    <span className='w-3/6 flex justify-end items-center text-end text-primaryBlue text-2xl font-semibold font-poppins'>S/</span>
                    <input type='number' placeholder='1000' className='w-3/6 justify-center text-end text-black text-2xl font-semibold font-poppins' />
                  </div>
                </div>
              </div>
              {/* Cambio2*/}
              <div className='
                  mb-2.5
                  py-2.5
                  px-3.5
                  rounded-lg
                bg-white
                  h-20
                  flex
                  flex-row
                '>
                <div className='w-2/6 flex flex-row gap-2 justify-start items-center'>
                  <Image src={ UsFlag } alt='PeruFlag'/>
                  <p className='text-black font-poppins'>USD</p>
                </div>
                <div className='w-4/6 flex flex-col '>
                  <p className='w-full font-poppins text-primaryGray text-xs text-end'>Recibes soles</p>
                  <div className='h-full flex flex-row'>
                    <span className='w-3/6 flex justify-end items-center text-end text-primaryBlue text-2xl font-semibold font-poppins'>$.</span>
                    <input type='number' placeholder='264.48' className='w-3/6 text-end text-black text-2xl font-semibold font-poppins' />
                  </div>
                </div>
              </div>
            </div>
            <Button text='Usar un cupón o código' tailwindClass='mb-2.5 w-full bg-white font-poppins rounded-xl border-none text-primaryBlue font-semibold'/>
            <div className='mb-2 h-6 flex flex-row justify-center items-end gap-1'>
              <Image className='flex h-auto justify-center items-center pb-1' src={PigIcon} alt='pigIcon'/>
              <span className='p-0 flex justify-end items-end text-black font-poppins text-sm'>Ahorro promedio:</span>
              <span className='flex h-full justify-end text-black font-poppins font-semibold'>S/ 98.20</span>
            </div>
            <Button tailwindClass='w-full flex gap-2 text-white bg-primaryBlue rounded-xl'>
              <p className='text-white font-poppins font-semibold'>
                Iniciar una operación 
              </p>
              <Image src={Arrow} alt='ArrowSvg'/>
            </Button>
        </div>
  )
}

export default CurrencyMate;