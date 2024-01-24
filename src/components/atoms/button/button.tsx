import React from 'react'

interface ButtonProps {
    tailwindClass?:string;
    text?:string; 
    children?:React.ReactNode; 
}

const Button:React.FC<ButtonProps> = (props) => {
  const {tailwindClass, text, children} = props;
  return (
    <button className={`flex justify-center items-center font-poppins w-36 text-sm p-1 text-black border border-solid h-12 rounded-md bg-secondaryblue ${tailwindClass}`}>
        {text ? text : children}
    </button>
  )
}

export default Button;