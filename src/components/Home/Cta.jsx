import React from 'react'
import img from '../../assets/lastog.webp'
export default function Cta() {
  return (
    <div className="container flex justify-center py-20">
      <div>
        <div className="mb-10">
          <img className='w-[300px] mx-auto md:w-[800px]' src={img} alt="" />
        </div>

        <div>
          <div className="flex mb-10  gap-x-4 justify-center items-center ">
            <a href="/">
              <button className="rounded-full  transition-all hover:scale-105 text-black border-4 border-black   bg-[#57D1FE]  text-[14px] md:text-xl px-5 md:px-10 py-1">
                TELEGRAM
              </button>
            </a>

            <a href="/">
              <button className="rounded-full transition-all hover:scale-105 text-black border-4 border-black    bg-[#57D1FE]  text-[14px] md:text-xl px-5 md:px-10 py-1">
                X
              </button>
            </a>

            <a href="/">
              <button className="rounded-full transition-all hover:scale-105 text-black border-4 border-black    bg-[#57D1FE]  text-[14px] md:text-xl px-5 md:px-10 py-1">
                Buy Now
              </button>
            </a>
          </div>
          <div className='text-center'>
            <p className='text-sm md:text-2xl font-semibold'>CA: 0xf395680803b269b62702554723E05b373171b07b</p>
          </div>
        </div>
      </div>
    </div>
  );
}
