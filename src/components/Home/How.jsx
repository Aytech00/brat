import React from "react";
import img from "../../assets/buy.webp";
import img2 from "../../assets/og.webp";

export default function How() {
  return (
    <section className=" bg-[#4978B5]  flex justify-center ">
      <div className=" container py-14">
        <div className="">
          <img className="mx-auto w-[300px] md:w-[800px]" src={img} alt="" />
        </div>
        <div className="flex mt-10 flex-col md:flex-row  justify-center ">
          <div className=" md:w-[40%]  ">
            <img
              className=" -m-24 md:h-[700px] mx-auto w-[300px] h-[500px] md:w-[300px]"
              src={img2}
              alt=""
            />
          </div>
          <div className="  w-full  text-center md:text-left  px-5 md:w-[45%] ">
            <div className=" bg-[#9CAECB] mb-10 px-4 py-6 h-[100px] flex items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                1
              </h1>
              <span></span>

              <p className="text-[14px] text-center">
                Buy ETH from your favorited CEX such as Binance or coinbase.
                Bridge your eth from ethereum to base using Orbiter.finance .
              </p>
            </div>
            <div className="bg-[#9CAECB] mb-10 px-4 py-6 h-[100px] gap-x-6 flex  items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                2
              </h1>

              <p className="text-[14px] text-center">
                Connect your wallet to Uniswap. Make Sure you're using the Base
                Network. Paste our official CA
              </p>
            </div>
            <div className="bg-[#9CAECB]  px-4 py-6 h-[100px] gap-x-6 flex  items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                3
              </h1>

              <p className="text-[14px] text-center">
                Buy ETH from your favorited CEX such as Binance or coinbase.
                Bridge your eth from ethereum to base using Orbiter.finance .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
