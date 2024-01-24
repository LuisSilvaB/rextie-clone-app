import React from 'react'
import Button from '@/components/atoms/button/button';

const ToggleButton = () => {
  return (
            <div className='
                my-5
                p-2.5
              bg-white
                rounded-xl
                flex
                flex-row
                gap-1
              '>
                <Button text='Compra: S/ 3.7440' tailwindClass='rounded-lg h-9 border-none text-primaryGray bg-cuaternaryWhite p-0 text-sm focus:font-semibold focus:text-primaryBlue focus:border-primaryBlue focus:border-solid focus:border-2 focus:bg-cuaternaryLightBlue ' />
                <Button text='Venta: S/ 3.7810'  tailwindClass='rounded-lg h-9 border-none text-primaryGray bg-cuaternaryWhite p-0 text-sm focus:font-semibold focus:text-primaryBlue focus:border-primaryBlue focus:border-solid focus:border-2 focus:bg-cuaternaryLightBlue'/>
            </div>
  )
}

export default ToggleButton;