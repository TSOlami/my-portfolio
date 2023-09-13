import { motion, m, LazyMotion, domAnimation } from "framer-motion";

import { styles } from "../styles";
import HeroText from "./elements/HeroText";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
        <LazyMotion features={domAnimation} strict>
          <m.div
            id="hero"
            className="relative w-full flex justify-center items-center min-h-[150px]"
          >
            <HeroText />
          </m.div>
        </LazyMotion>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary-200 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary-200 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
