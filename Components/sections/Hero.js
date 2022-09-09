import React from 'react'

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col">
    <div className='relative'>
    <img src='./emoji.png' className='absolute -right-5 top-5' />
    <h4 className='text-center uppercase '>
    The Designer -
    </h4>
    <h3 className='text-center uppercase mt-[73px] mb-[48px] text-[52.62px]'>
     THE GIRL. THE BRAND
    </h3>
    <p className='text-center uppercase'>
    BRAND & GRAPHIC DESIGNER
    </p>
    </div>
  </section>
  )
}

export default Hero