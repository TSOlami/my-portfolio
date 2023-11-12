import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../../constants";

const SkillsCards = () => {
  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => (
        <m.div
          initial={{ scale: 0.8 }}
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center bg-secondary-50 rounded-xl border-4 border-secondary-100 cursor-pointer"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col"> 
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-secondary-50 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl text-black"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-secondary-50 text-black rounded-xl text-m p-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
      ))}
    </LazyMotion>
    </div>
  );
};

export default SkillsCards;