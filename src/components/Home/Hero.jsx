import gif from '../../assets/gif.webp'
import img from "../../assets/hero.webp";
export default function Hero() {

  return (
    <section className="container py-10 md:py-20">
      <div className="flex justify-center flex-col md:flex-row ">
        <div>
          <img className="w-[500px] md:w-[691px] md:h-[691px] md:object-cover " src={gif} alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl text-center md:text-left font-semibold  md:ml-20 secfont">Introducing</h2>
          <div className='mb-3 flex justify-center md:justify-start'>
            <img className=" w-[300px] md:w-[647px] md:h-[282px]  md:object-cover" src={img} alt="" />
          </div>
          <div className="mb-10  ">
            <p className=" text-center leading-loose md:text-2xl md:w-[85%]">
              brett's totally illegitimate kid has landed on  the SOL network
              with all credentials that are just too legit to ignore.
            </p>
          </div>

          <div className="flex justify-center md:justify-start  gap-x-4 items-center md:mx-28">
            <a href="/">
              <button className="rounded-full  transition-all hover:scale-105 text-black border-4 border-black   bg-[#57D1FE]  text-[14px] md:text-xl px-5 md:px-10 py-1">
                VISIT HIS CRIB
              </button>
            </a>

            <a href="/">
              <button className="rounded-full transition-all hover:scale-105 text-black border-4 border-black    bg-[#57D1FE]  text-[14px] md:text-xl px-5 md:px-10 py-1">
                FEED HIS VICES
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
