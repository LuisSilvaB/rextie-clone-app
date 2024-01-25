import TestimoniaslList from '@/components/organisms/testimonialsList/testimoniaslList';
import React from 'react'

interface ClientTestimonialsProps {
    isMobile: boolean; 
}
const ClientTestimonials:React.FC<ClientTestimonialsProps> = (props) => {
    const {isMobile} = props
  return (
    <div className='flex pb-7 flex-col lg:mx-60 lg:py-14 justify-center items-center'>
        <p className='font-poppins my-5 px-3 text-primaryBlue w-full text-center lg:text-4xl text-2xl font-semibold'>Descubre lo que dicen nuestros clientes</p>
        <p className='font-poppins my-4 w-full text-center text-xs'>Conoce de primera mano lo que es cambiar dinero con Rextie.</p>
        <TestimoniaslList isMobile = {isMobile} />
    </div>
  )
}

export default ClientTestimonials; 
