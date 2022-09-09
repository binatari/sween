import React from 'react'

const VertCard = ({link}) => {
  return (
    <div className='bg-[#0A0909] border bottom-1 border-[#363535] vertical text-[#363535] font-[700] text-[33px] h-[200px]  md:h-[447px] w-[257px]  md:w-[234px]'>
     <p className='py-10'>
     {link} 
     </p>
    </div>
  )
}

export default VertCard