import logo from "../../assets/bratlogo.webp";

const Nav = () => {
  return (
    <>
      <div className="bg-[#306DA2]">
        <nav className="container py-5 md:py-3 flex justify-between items-center">
          <div>
            <img className="w-[100px] md:w-[200px]" src={logo} alt="" />
          </div>

          <div className="flex gap-1  items-center px-1">
            <a
              href="
https://t.me/bratt_on_sol"
            >
              <button className="rounded-full transition-all hover:scale-105 text-white border-4 border-black   bg-[#57D1FE]  text-[10px] md:text-xl px-4 md:px-10 py-1">
                TELEGRAM
              </button>
            </a>

            <a href="https://dexscreener.com/solana/5uZbTHDkFcQVxf3cxXFuMMaAeNuXrW5MocfW5bKQ8ZrV">
              <button className="rounded-full transition-all hover:scale-105 text-white border-4 border-black    bg-[#57D1FE]  text-[10px] md:text-xl px-5 md:px-10 py-1">
                BUY NOW
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
