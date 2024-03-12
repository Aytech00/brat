import React from 'react'
import img from "../../assets/koken.webp"
import img2 from "../../assets/tokenomic.webp";
export default function Supply() {
  return (
    <div className="container flex justify-center py-10">
      <div>
        <img className="mx-auto w-[300px] mb-10 md:mb-0 md:w-[800px]" src={img2} alt="" />
        <div className="flex text-center md:text-left justify-center flex-col md:flex-row md:items-center ">
          <div className="w-full md:w-[400px]">
            <div className="mb-6">
              <h1 className=" text-6xl md:text-8xl font-extrabold">10m</h1>
              <p className="text-xl font-semibold">TOTAL SUPPLY</p>
            </div>
            <div className="mb-5">
              <h1 className="text-6xl md:text-8xl font-extrabold">ZERO </h1>
              <p className="text-xl font-semibold">TAXES</p>
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-extrabold">100% </h1>
              <p className="text-xl font-semibold">
                SAFU.LP LOCKED.CA RENOUNCED
              </p>
            </div>
          </div>
          <img className="w-[653px] h-[703] object-fit" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
