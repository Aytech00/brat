import React from 'react'
import img from "../../assets/icon.webp";
import img2 from "../../assets/hug.webp";
export default function AboutCoin() {
  return (
    <section className=" bg-[#4978B5]  flex justify-center ">
      <div className=" container py-14">
        <div className="mb-10">
          <img className="mx-auto w-[300px] md:w-[800px]" src={img} alt="" />
        </div>
        <div className="flex items-center flex-col md:flex-row  justify-center ">
          <div className=" w-[40%]  ">
            <img className=" md:h-full w-[500px] md:w-[750px]" src={img2} alt="" />
          </div>
          <div className="  w-full  text-center md:text-left  px-5 md:w-[40%] text-[15px]  md:ml-20">
            <p className="mb-5 leading-loose">
              In the ever-evolving world of cryptocurrency, a new token emerges,
              promising not just innovation but a legacy. "Bratt," named after
              its progenitor's son, is the latest project to make waves on the
          Sol Chain. With a vision to transcend the success of its
              forebear, Bratt aims to capitalize on the momentum generated by
              Brett's unparalleled success in the crypto realm. But Bratt isn't
              just any token; it's a testament to the power of community and the
              brilliance of a team with a proven track record.
            </p>
            <p className="mb-5 leading-loose">
              At the heart of Bratt's ethos is its community-building
              initiatives. Recognizing the value of a strong, engaged community,
              the project focuses on fostering a sense of belonging and shared
              purpose among its holders. From interactive platforms to exclusive
              events, Bratt provides myriad opportunities for its community to
              connect, contribute, and grow together. This approach not only
              strengthens the project's foundation but also empowers its users,
              making them active participants in its journey to the top.
            </p>

            <p className="mb-5 leading-loose">
              Leading Bratt is a highly skilled and experienced incubation team,
              well-versed in the art of launching successful crypto projects.
              With a rich history of navigating the complexities of the crypto
              market, this team possesses the connections, knowledge, and
              expertise necessary to propel Bratt to new heights. Their
              strategic vision combines innovative technology with robust
              community engagement, ensuring Bratt is not just a token but a
              movement.
            </p>
            <p className="leading-loose">
              As Bratt continues to rise, it stands as a beacon of potential,
              guided by a team whose credentials promise a journey filled with
              achievement and purpose. In the world of cryptocurrencies, Bratt
              is not merely a token; it's a legacy in the making, driven by the
              power of its community and the unmatched prowess of its leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
