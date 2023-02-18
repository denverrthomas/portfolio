import React from 'react'

function Hero() {
  return (
    <div className='select-none background flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img top-0 z-0'>
      {/* Overlay */}
      <div/>
      <div className='text-center w-3/5'>
        <h1 className='mb-8'>Hi, my name is <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700'>Denver</span></h1>
        <p className='mb-12 leading-8'>I build beautiful <span className="font-normal text-transparent text-1xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700">landing</span> pages, <span className='font-normal text-transparent text-1xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700'>portfolios</span>, and more!</p>
        <a href="#contact"><button className=' hover:bg-black hover:text-white py-2 px-5 border-2 border-black rounded-full'>Contact Me</button></a>
      </div>
      <div className='h-12 w-7'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="55" viewBox="0 0 27 55" className='mt-32'>
        <g id="Group_3" data-name="Group 3" transform="translate(-202 -711)">
          <g id="Group_2" data-name="Group 2">
            <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(202 711)" fill="none" stroke="#000" stroke-width="2.5">
              <rect width="27" height="55" rx="13.5" stroke="none"/>
              <rect x="2" y="2" width="23" height="51" rx="11.5" fill="none"/>
            </g>
          </g>
          <circle id="Ellipse-5" className="circle" data-name="Ellipse 5" cx="6.5" cy="6.5" r="6.5" transform="translate(209 717)"/>
        </g>
      </svg></div>
    </div>
    
  )
}

export default Hero