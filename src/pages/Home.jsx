import Hero from "../components/Home/Hero";
import Narative from "../components/Home/Narative";
import Supply from "../components/Home/Supply";
import Who from "../components/Home/Who";
import AboutCoin from "../components/Home/AboutCoin";
import How from "../components/Home/How";
import Cta from "../components/Home/Cta";



export default function Home() {
  return (
    <div>
      <Hero />

     
      <Who />
      <Narative />

      <AboutCoin />
      <Supply />
      <How />
      <Cta />
    </div>
  );
}
