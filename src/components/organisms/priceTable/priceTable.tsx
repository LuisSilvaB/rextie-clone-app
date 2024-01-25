import React from 'react'
import Image from 'next/image';
import SunnatLogo from '@images/sunatLogo.svg'
import RextieLogoWhite from '@images/rextie-white.svg'
import Bank from '@images/Bank.svg'

const PriceTable = () => {
  return (
    <table className='w-72 rounded-lg overflow-hidden'>
    <thead>
      <tr className='bg-primaryBlue h-16'>
        <th className='w-auto flex h-16 justify-center items-center'>
          <Image src={RextieLogoWhite} className='text-white w-24' alt='RextieLogo'/>
        </th>
        <th className='text-white font-poppins'>
          <p className='font-normal'>Compra:</p>
          <p>S/ 3.7440</p>
        </th>
        <th className='text-white font-poppins'>
          <p className='font-normal'>Venta:</p>
          <p>S/ 3.7810</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className='bg-cuaternaryWhite h-12'>
        <td className='w-auto flex h-12 justify-center items-center'>
          <Image src = {SunnatLogo} alt='SunnatLogo'/>
        </td>
        <td>
          <p>S/ 3,7360</p>
        </td>
        <td>
          <p>S/ 3,7460</p>
        </td>
      </tr>
      <tr className='bg-cuaternaryWhite h-12'>
        <td className='w-auto flex h-12 justify-center items-center'>
          <Image src={Bank} alt='Banklogo'/>
          <p className='font-poppins'>Bancos*</p>
        </td>
        <td>
          <p className='font-poppins'>S/3,7240</p>
        </td>
        <td>
          <p className='font-poppins'>S/3,7980</p>
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default PriceTable;