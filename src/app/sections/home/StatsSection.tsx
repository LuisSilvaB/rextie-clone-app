import StatsList from '@/components/organisms/statsList/statsList'
import React from 'react'

interface StatsSection {
    isMobile: boolean
}

const StatsSection:React.FC<StatsSection> = (props) => {
    const {isMobile} = props
    
  return (
    <div className='lg:flex lg:flex-row lg:py-14 lg:mx-20 lg:justify-center'>
      <div className='lg:w-5/12 flex flex-col justify-center items-center'>
        <p className='font-poppins lg:w-3/4 w-full lg:text-start lg:leading-10 text-center lg:text-3xl text-2xl text-primaryBlue my-6 font-semibold'>Somos la casa de cambio online líder del Perú</p>
        {isMobile? <StatsList isMobile = {isMobile}/> : <></>}
        <p className='w-3/4 lg:my-1 my-4 lg:text-sm text-xs lg:text-start text-center'>¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.</p>
      </div>
        {isMobile? <></> : <StatsList isMobile = {isMobile}/>}
    </div>
  )
}
export default StatsSection; 