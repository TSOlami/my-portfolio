/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import SectionTitle from "./elements/SectionTitle";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.9, 0.75)}>
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full">
          <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-secondary-50 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary-50 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1"></div>
				<div className="mt-3 flex justify-center items-center">
					<a
						className="text-secondary-50 shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={project_link}
						target="_blank"
            rel="noreferrer"
					>
						See the Project
					</a>
				</div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <SectionTitle title="PROJECTS" subtitle="WHAT I HAVE DONE SO FAR" />
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary-50 text-[17px] max-w-3xl leading-[30px]'
        >
          I built these projects to showcase my skills. Each project represents a journey of learning and creativity, reflecting my passion for technology and using it to solve real world problems. All of my projects are real world applications that are used by real people to improve their daily lives.

          <br /><br />

          Feel free to explore any of my projects using the account credentials provided below:

          <br />
          <strong>Email:</strong> demo@gmail.com
          <br />
          <strong>Password:</strong> demo1234

          <br /><br />
          I am always working on something new as I continue to evolve and create, so make sure to check back often! 
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
