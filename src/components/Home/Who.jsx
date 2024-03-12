import React from 'react'
import img from '../../assets/who.webp'
import img2 from "../../assets/section.webp";
import img3 from "../../assets/vid.webp";

export default function Who() {
  return (
    <div className=" bg-[#4978B5]">
      <div className="container text-center py-14">
        <div>
          <div className='mb-5'>
            <img className='mx-auto w-[300px] md:' src={img} alt="" />
          </div>

          <div className="flex flex-col md:flex-row relative items-center ">
            <img className=' w-[350px] md:w-[600px] md:h-[540px]' src={img2} alt="" />
            <img className='w-[200px] md:w-[726px] md:h-[408px] absolute left-40  top-0 md:left-[35%] md:top-2  md:object-cover' src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
