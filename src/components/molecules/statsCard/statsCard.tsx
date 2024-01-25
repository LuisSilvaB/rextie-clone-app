import React from 'react'
import Image from 'next/image';


interface StatsCardProps {
    img: string, 
    principalText:string,
    secondaryText:string,
    tailwindClass?:string
}

const StatsCard:React.FC<StatsCardProps> = (props) => {
    const { img, principalText, secondaryText, tailwindClass } = props; 
  return  (
    <div className='flex bg-cuaternaryLightBlue p-3.5 lg:h-60 w-40 h-52 rounded-lg justify-center items-center flex-col gap-5'>
        <Image src={img} alt='imgStats'/>
        <p className='font-poppins text-center text-sm'>
            <span className='text-primaryBlue font-semibold lg:text-lg '>{principalText}</span>
            <span className='text-primaryBlue lg:text-lg'>{secondaryText}</span>
        </p>
    </div>
  )
}

export default StatsCard;