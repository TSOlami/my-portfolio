/* eslint-disable react-refresh/only-export-components */
import { m, LazyMotion, domAnimation } from "framer-motion";

import SectionTitle from "./elements/SectionTitle";
import { memoji, introduction } from "../constants";
import ImageSlider from "./elements/ImageSlider";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-secondary-50 p-6 text-center flex flex-col gap-6"
              >
                <span className="text-secondary-200">{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[65%] h-[400px] sm:h-[450px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
