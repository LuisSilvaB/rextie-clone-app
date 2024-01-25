import React from 'react'
import StatsCard from '@/components/molecules/statsCard/statsCard'
import MoneyBlue from '@images/money-blue-icon.svg'
import UserBlue from '@images/user-blue-icon.svg'
import SaveMoney from '@images/save-money-blue-icon.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface StatsListProps{
    isMobile: boolean
}


const StatsList:React.FC<StatsListProps> = (props) =>{
    const {isMobile} = props    
    if(isMobile){
        return (
        
        <Swiper slidesPerView={2} spaceBetween={-35} className="mySwiper lg:flex-1 flex justify-center items-center">
            <SwiperSlide className='flex justify-center items-center'>
                <StatsCard  img={MoneyBlue} principalText='+ 5 mil millones ' secondaryText='de dólares negociados'/>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>
                <StatsCard  img={UserBlue} principalText='+ 169 mil personas ' secondaryText='confía en nosotros'/>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>
                <StatsCard  img={SaveMoney} principalText='+ 276 millones ' secondaryText='de soles ahorrados'/>
            </SwiperSlide>
        </Swiper>
      )
    }
    return(
        <div className="flex justify-center items-center gap-5">
            <StatsCard  img={MoneyBlue} principalText='+ 5 mil millones ' secondaryText='de dólares negociados'/>
            <StatsCard  img={UserBlue} principalText='+ 169 mil personas ' secondaryText='confía en nosotros'/>
            <StatsCard  img={SaveMoney} principalText='+ 276 millones ' secondaryText='de soles ahorrados'/>
        </div>
    )
}
export default StatsList; 