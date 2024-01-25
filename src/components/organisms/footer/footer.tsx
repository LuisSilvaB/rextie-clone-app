"use client"
import React, {useState} from 'react'
import { IoIosArrowDropupCircle, IoIosArrowDown } from "react-icons/io";
import Book from '@images/footer/book.png'
import Linkedin from '@images/footer/linkedin.svg'
import Facebook from '@images/footer/facebook.svg'
import Youtube from '@images/footer/youtube.svg'
import TikTok from '@images/footer/tiktok.svg'
import Instagram from '@images/footer/instagram.svg'
import RextieLogo from '@images/logo-rextie.svg'
import Image from 'next/image';

const Footer = () => {
  const [isOpenSevices, setIsOpenSevices] = useState<boolean>(false);
  const [isOpenRecurses, setIsOpenRecurses] = useState<boolean>(false);
  const [isOpenSupport, setIsOpenSupport] = useState<boolean>(false);
  return (
    <div className='flex flex-col'>
      <div className='relative z-0  lg:px-48 px-8 bg-white w-auto h-auto pb-16'>
        <div className='flex justify-center items-center relative border-t-2 border-primaryBlue'>
          <IoIosArrowDropupCircle className='absolute z-10 text-primaryBlue w-14 h-14 -top-9 lg:right-1/2 '/>
          <div className='mt-11 w-full lg:flex'>
          <div className='lg:flex lg:w-full hidden'>
              <div className='my-5 w-full flex flex-col justify-start items-center gap-5 border-b-2 lg:border-none border-b-gray-200 '>
                <div className='w-full flex flex-col justify-start gap-3'>
                  <Image className='w-20 h-7' src={RextieLogo} alt='RextieLogo'/>
                  <div className='flex flex-col'>
                    <p className='font-poppins text-xs text-gray-400'>Rextie S.A.C.</p>
                    <p className='font-poppins text-xs text-gray-400 font-semibold'>RUC 20601030013</p>
                  </div>
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-5 pb-3 '>
                  <p className='font-poppins text-xs text-gray-400'>Autorizado por la SBS N° 684-2017</p>
                </div>
                <div className='w-full flex flex-row justify-start items-start gap-3'>
                  <Image src={Linkedin} alt='Linkedin'/>
                  <Image src={Facebook} alt='Facebook'/>
                  <Image src={Youtube} alt='Youtube'/>
                  <Image src={TikTok} alt='TikTok'/>
                  <Image src={Instagram} alt='Instagram'/>
                </div>
              </div>
            </div>
            <div className='w-full lg:border-none border-b-2 border-b-gray-200 my-5'>
              <div onClick={()=>setIsOpenSevices(!isOpenSevices)} className='w-full flex mb-6 justify-between items-center font-poppins font-semibold text-base hover:cursor-pointer'>
                <p className='font-poppins font-semibold text-base'>Servicios</p>
                <IoIosArrowDown className={` lg:hidden lg:rotate-0 ${isOpenSevices?'':'rotate-180'}`} />
              </div>
              <ul className={`flex-col mb-6 gap-1 lg:flex ${isOpenSevices?'flex':'hidden'} `}>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Rextie Business</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Rextie Factoring</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Confirming</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Visa</li>
              </ul>
            </div>
            <div className='w-full lg:border-none border-b-2 border-b-gray-200 my-5'>
              <div onClick={()=>setIsOpenRecurses(!isOpenRecurses)} className='w-full flex mb-6 justify-between items-center font-poppins font-semibold text-base hover:cursor-pointer'>
                <p className='font-poppins font-semibold text-base'>Recursos</p>
                <IoIosArrowDown className={` lg:hidden lg:rotate-0 ${isOpenRecurses?'':'rotate-180'}`} />
              </div>
              <ul className={`flex-col mb-6 gap-1 lg:flex ${isOpenRecurses?'flex':'hidden'} `}>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Blog</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Tipo de cambio</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Cambio de Dólar a Soles</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Precio del Dólar</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Dólar Hoy</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Dólar</li>
              </ul>
            </div>
            <div className='w-full lg:border-none border-b-2 border-b-gray-200 my-5'>
              <div onClick={()=>setIsOpenSupport(!isOpenSupport)} className='w-full flex mb-6 justify-between items-center font-poppins font-semibold text-base hover:cursor-pointer'>
                <p className='font-poppins font-semibold text-base'>Soporte</p>
                <IoIosArrowDown className={` lg:hidden lg:rotate-0 ${isOpenSupport?'':'rotate-180'}`} />
              </div>
              <ul className={`flex-col mb-6 gap-1 lg:flex ${isOpenSupport?'flex':'hidden'} `}>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Preguntas frecuentes</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Cómo cambiar dolares con REXTIE</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Términos y Condiciones</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Política de Cookies</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Política de Privacidad</li>
                <li className='font-poppins text-gray-400 text-xs hover:cursor-pointer '>Mapa del sitio</li>
              </ul>
            </div>
            <div className='lg:py-0 w-full flex flex-col gap-5 py-6 lg:border-none  mt-5'>
              <p className='font-poppins font-semibold text-base lg:text-start text-center'>Contacto</p>
              <div className='flex flex-col gap-1'>
                <p className='font-poppins lg:text-start text-center text-primaryBlue'>info@rextie.com</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>T. 01 700 3301</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>C. 963 896 793</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>Lunes a Viernes:</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>8:00 am. - 8:00 pm.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>Sábados:</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>9:00 am. - 3:00 pm.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>Av. José Gálvez</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>Barrenechea 566, Of. 101,</p>
                <p className='font-poppins lg:text-start text-center text-xs text-gray-400'>Urb. Corpac, San Isidro, Lima.</p>
              </div>
              <div className=' lg:flex hidden w-full flex-col lg:justify-start lg:items-start justify-center items-center gap-5 lg:py-2 py-6 lg:border-none '>
                <Image src={Book} alt='book'/>
              </div>
            </div>
            <div className='lg:hidden'>
              <div className='w-full flex flex-col justify-center items-center gap-5 py-6 border-b-2 border-b-gray-200 '>
                <Image src={Book} alt='book'/>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-5 py-6  '>
                <div className='flex flex-row justify-center items-center gap-3'>
                  <Image src={Linkedin} alt='Linkedin'/>
                  <Image src={Facebook} alt='Facebook'/>
                  <Image src={Youtube} alt='Youtube'/>
                  <Image src={TikTok} alt='TikTok'/>
                  <Image src={Instagram} alt='Instagram'/>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image className='w-20 h-7' src={RextieLogo} alt='RextieLogo'/>
                  <div className='h-ful border border-solid'/>
                  <div className='flex flex-col'>
                    <p className='font-poppins text-xs text-gray-400'>Rextie S.A.C.</p>
                    <p className='font-poppins text-xs text-gray-400 font-semibold'>RUC 20601030013</p>
                  </div>
                  </div>
                  <div className='w-full flex flex-col justify-center items-center gap-5 pb-7 border-b-2 border-b-gray-200'>
                    <p className='font-poppins text-xs text-gray-400'>Autorizado por la SBS N° 684-2017</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <section className='w-full bg-secondaryBlue p-2'>
          <p className='font-poppins text-white text-xs text-center'>©2024 Rextie: La casa de cambio online, Líder del Perú. Todos los derechos reservados.</p>
      </section>
    </div>
  )
}
export default Footer; 
