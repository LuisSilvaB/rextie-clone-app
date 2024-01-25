import React, {useState} from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Forbes from '@images/mediaCoverage/forbes.jpg';
import Gestion from '@images/mediaCoverage/gestion.png';
import Nasdag from '@images/mediaCoverage/nasdag.jpg';
import Financialpost from '@images/mediaCoverage/financialpost.jpg';
import Comercio from '@images/mediaCoverage/el-comercio.svg';
import Reuters from '@images/mediaCoverage/reuters.jpg';
import Insider from '@images/mediaCoverage/mkt-INSIDER.jpg';
import Rpp from '@images/mediaCoverage/rpp.png';
import Businesswire from '@images/mediaCoverage/businesswire.jpg';
import Economica from '@images/mediaCoverage/semana-economica.png';
import Republica from '@images/mediaCoverage/la-republica.png';
import Peru21 from '@images/mediaCoverage/peru-21.png';

import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'

SwiperCore.use([Autoplay])

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const MediaCoverageList = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    return (
    <div className='lg:w-2/4 w-3/4'>
      <Swiper
        loop = {true}
        autoplay={{delay:2000, pauseOnMouseEnter:true }} 
        speed={1000}
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={false}
        watchSlidesProgress={false}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-11/12"
      >
        <SwiperSlide className='flex justify-center items-center'>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Forbes} alt='Forbes'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Gestion} alt='Gestion'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Nasdag} alt='Nasdag'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Financialpost} alt='Financialpost'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Comercio} alt='Comercio'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Reuters} alt='Reuters'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Insider} alt='Insider'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Rpp} alt='Rpp'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Businesswire} alt='Businesswire'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Economica} alt='Economica'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Republica} alt='Republica'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center h-16 w-full' >
                <Image src={Peru21} alt='Peru21'/>
            </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        loop = {true}
        autoplay={{delay:2000, pauseOnMouseEnter:true }} 
        speed={1000}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  w-11/12"
      >
        <SwiperSlide>
          <p> “Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco en tecnología financiera en América Latina. Con este capital, la fintech espera acumular 7.000 millones de dólares transaccionados en la plataforma hacia el 2024”. </p>
        </SwiperSlide>
        <SwiperSlide>
           <p> “Nuestro CEO, Mateu Batle, comparte sus conocimientos sobre los desafíos y oportunidades en el mercado de las fintech en Perú. Desde regulaciones hasta obstáculos operativos, este artículo arroja luz sobre el panorama financiero actual”. </p> 
        </SwiperSlide>
        <SwiperSlide>
          <p> La inversión y la integración de la tecnología FX de vanguardia de Citi, CitiFX Pulse e Instant Payments, impulsarán la expansión de Rextie, al tiempo que brindarán a sus clientes un servicio más rápido y tipos de cambio de divisas más competitivos. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Sobre la inversión de Citi en Rextie, David González, Jefe Regional de Ventas Corporativas y Soluciones para América Latina de Citi, dijo: “Esta es una transacción histórica para Citi en Perú. Estamos entusiasmados de ofrecer el poder de nuestra red FX global y nuestras soluciones tecnológicas”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> “Mateu Batle, CEO y Cofundador de Rextie, escribe sobre lo que ha pasado en el mundo de las startups, los capitales de inversión y qué podría pasar con estas empresas durante el año 2023”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Sobre la participación de Citigroup en Rextie, Aldo Álvarez, director de Inversiones Institucionales Estratégicas y Fintech para LATAM en Citi, dijo que el acuerdo crea oportunidades para ofrecer los productos del banco a los clientes de Rextie. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> “La fintech Rextie fue premiada como ‘Empresa exportada de servicios líder en política de equidad de género’ en el Perú Service Summit 2023. Este logro es fruto de nuestro programa de Equidad de Género que incentiva la participación de mujeres”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> “Rextie, la Fintech líder en el cambio de divisas, anunció el cierre de una nueva ronda de inversiones en la que logró obtener más de US$ 1.4 millones de dólares por parte de diversos inversores, siendo Grupo RPP el principal inversor”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> A través de CitiFX Pulse e Instant Payments, los clientes de Rextie experimentarán un servicio que se destaca por su automatización, pagos en tiempo real, mayor liquidez y tarifas altamente competitivas. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> “Rextie se convierte en la primera fintech de América Latina en recibir una inversión directa de uno de los bancos más grandes del mundo. Con la operación, sus clientes se beneficiarán de la integración de soluciones como CitiFX Pulse e Instant Payments”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> Citi realiza una inversión estratégica en Rextie.
      La integración de la tecnología de última generación en cambio de divisas de Citi impulsará la expansión de Rextie y podrá darle a sus clientes un servicio más rápido y un tipo de cambio más competitivo”. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p> “Rextie ha innovado el mercado Fintech peruano lanzando su aplicativo para relojes inteligentes o ‘smartwatches’, disponibles para Android y iOS, con el objetivo de que cada usuario pueda monitorear el tipo de cambio en cualquier momento del día”.. </p>
        </SwiperSlide>
        <SwiperSlide>
          <p></p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MediaCoverageList;