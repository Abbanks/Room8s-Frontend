import React from 'react'

function Navbar() {
  return (
    <div className='pl-6 pr-11 py-2 shadow-[0_4px_8px_0px_rgba(0,0,0,0.04)]'>
        <div className="flex justify-between items-center">
        <div className="text-[#7FDBCA] text-2xl font-'Oxygen' leading-7">Room8s</div>
        <div className="hidden sm:flex justify-center items-center gap-4 ">
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">Home</div>
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">About Us</div>
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">Services </div>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
          <div className=" px-6 py-1.5 border rounded-full border-[#7FDBCA] justify-center items-center gap-2.5 flex">
            <div className="text-[#7FDBCA] text-base font-normal font-['Acumin Pro'] leading-7">Log In</div>
          </div>
          <div className=" bg-[#7FDBCA]  rounded-full justify-center items-center gap-2.5 flex">
            <div className=" px-6 py-1.5 text-white text-base font-normal font-['Acumin Pro'] leading-7">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
