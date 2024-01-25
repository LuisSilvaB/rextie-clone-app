import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaCircleArrowLeft,FaCircleArrowRight  } from "react-icons/fa6";

import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialsCard from '../../molecules/testimonialsCard/testimonialsCard';

interface ClientTestimonialsProps {
    isMobile: boolean;
}

SwiperCore.use([Navigation]);

const TestimoniaslList:React.FC<ClientTestimonialsProps> = (props) => {
    const { isMobile } = props;
    if (isMobile) {        
        return (
          <Swiper  navigation = {true} modules={[Navigation]} centeredSlides = {true}  className='mySwiper flex w-full justify-center items-center'>
              <SwiperSlide className='flex w-full justify-center items-center'>
                  <TestimonialsCard text={`“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado”.`} autor='Chanel Ramos'></TestimonialsCard>
              </SwiperSlide>
              <SwiperSlide className='flex w-full justify-center items-center'>
                  <TestimonialsCard text={`“La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido”.`} autor='Grecia Retamozo'></TestimonialsCard>
              </SwiperSlide>
              <SwiperSlide className='flex w-full justify-center items-center'>
                  <TestimonialsCard text={`“Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.`} autor='Jorge Suarez'></TestimonialsCard>
              </SwiperSlide>
              <SwiperSlide className='flex w-full justify-center items-center'>
                  <TestimonialsCard text={`“Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online”.`} autor='Reni Ravina'></TestimonialsCard>
              </SwiperSlide>
              
          </Swiper>
        )
    }
    return(
        <div  className='mySwiper flex w-full justify-center items-center'>
            <div className='flex w-full justify-center items-center'>
                <TestimonialsCard text={`“Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado”.`} autor='Chanel Ramos'></TestimonialsCard>
            </div>
            <div className='flex w-full justify-center items-center'>
                <TestimonialsCard text={`“La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido”.`} autor='Grecia Retamozo'></TestimonialsCard>
            </div>
            <div className='flex w-full justify-center items-center'>
                <TestimonialsCard text={`“Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.`} autor='Jorge Suarez'></TestimonialsCard>
            </div>
            <div className='flex w-full justify-center items-center'>
                <TestimonialsCard text={`“Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online”.`} autor='Reni Ravina'></TestimonialsCard>
            </div>
        </div>
    )
}
export default TestimoniaslList; 