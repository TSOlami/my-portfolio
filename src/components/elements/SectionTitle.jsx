/* eslint-disable react/prop-types */
import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-secondary-100 p-2 noselect"
      >
        <span
          className="text-secondary-200 opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-5xl sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'Orbitron', sans-serif"}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
