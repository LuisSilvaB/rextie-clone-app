import React from 'react'

interface TestimonialsCardProps{
    text:string;
    autor:string;
}

const TestimonialsCard:React.FC<TestimonialsCardProps> = (props) => {
    const { text, autor } = props
  return (
    <div className='w-56 h-80 rounded-lg border border-solid flex flex-col justify-center items-center bg-cuaternaryLightBlue'>
        <p className='my-4 mx-5 text-center'>{text}</p>
        <p>{autor}</p>
    </div>
  )
}
export default TestimonialsCard; 
