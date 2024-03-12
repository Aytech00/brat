import React from "react";
import img from "../../assets/buy.webp";
import img2 from "../../assets/og.webp";

export default function How() {
  return (
    <section className=" bg-[#4978B5]  flex justify-center ">
      <div className=" container py-14">
        <div className="">
          <img className="mx-auto w-[350px] md:w-[800px]" src={img} alt="" />
        </div>
        <div className="flex mt-10 flex-col md:flex-row  justify-center ">
          <div className=" md:w-[40%]  ">
            <img
              className=" -m-20 md:h-[700px] mx-auto w-[300px] h-[500px] md:w-[300px]"
              src={img2}
              alt=""
            />
          </div>
          <div className="  w-full  text-center md:text-left  px-5 md:w-[45%] ">
            <div className=" bg-[#9CAECB] mb-10 px-4 py-10 md:py-6 h-[120px] flex items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                1
              </h1>
              <span></span>

              <p className="text-[14px] text-white text-center">
                 Download and install phantom wallet on the appstore, or
                alternatively if you're on the desktop download and install the
                browser extension. Phantom wallet link: https://phantom.app/
              </p>
            </div>
            <div className="bg-[#9CAECB] mb-10 px-4 py-10 md:py-6 h-[120px] gap-x-6 flex  items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                2
              </h1>

              <p className="text-[14px] text-white text-center">
                Now all you have to do is buy your solana in the phantom app, or
                alternatively you can use an exchange and deposit using your
                wallet address. <br /> Binance: https://www.binance.com/ <br />{" "}
                Coinbase: https://www.coinbase.com/
              </p>
            </div>
            <div className="bg-[#9CAECB]  px-4 py-10 md:py-6 h-[120px] gap-x-6 flex  items-center w-full relative">
              <h1 className=" text-7xl md:text-9xl text-[#DEF709] font-semibold absolute -left-6 md:-left-10 -top-">
                3
              </h1>

              <p className="text-[14px] text-center md:ml-14 text-white">
                Go on to Raydium and paste the CA to swap your SOL for $BRATT{" "}
                <br /> Radium buy link:{" "}
                <a
                  className="text-blue-700 underline"
                  href=" https://raydium.io/swap/?inputCurrency=sol&outputCurrency=5uZbTHDkFcQVxf3cxXFuMMaAeNuXrW5MocfW5bKQ8ZrV&fixed=inons"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
