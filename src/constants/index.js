/* eslint-disable no-mixed-spaces-and-tabs */
import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	avatar,
  } from "../assets";

  import {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
  } from '../assets';
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'skills',
		title: 'Skills',
	  },
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const memoji = {
	image: [avatar],
  };

  const services = [
	{
	  title: "Web Developer",
	  icon: web,
	},
	{
	  title: "React Native Developer",
	  icon: mobile,
	},
	{
	  title: "Backend Developer",
	  icon: backend,
	},
	{
	  title: "Content Creator",
	  icon: creator,
	},
  ];
  
  const technologies = [
	{
	  name: "HTML 5",
	  icon: html,
	},
	{
	  name: "CSS 3",
	  icon: css,
	},
	{
	  name: "JavaScript",
	  icon: javascript,
	},
	{
	  name: "TypeScript",
	  icon: typescript,
	},
	{
	  name: "React JS",
	  icon: reactjs,
	},
	{
	  name: "Redux Toolkit",
	  icon: redux,
	},
	{
	  name: "Tailwind CSS",
	  icon: tailwind,
	},
	{
	  name: "Node JS",
	  icon: nodejs,
	},
	{
	  name: "MongoDB",
	  icon: mongodb,
	},
	{
	  name: "Three JS",
	  icon: threejs,
	},
	{
	  name: "git",
	  icon: git,
	},
	{
	  name: "figma",
	  icon: figma,
	},
	{
	  name: "docker",
	  icon: docker,
	},
  ];
  
  const experiences = [
	{
	  title: "React.js Developer",
	  company_name: "Starbucks",
	  icon: starbucks,
	  iconBg: "#383E56",
	  date: "March 2020 - April 2021",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "React Native Developer",
	  company_name: "Tesla",
	  icon: tesla,
	  iconBg: "#E6DEDD",
	  date: "Jan 2021 - Feb 2022",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "Web Developer",
	  company_name: "Shopify",
	  icon: shopify,
	  iconBg: "#383E56",
	  date: "Jan 2022 - Jan 2023",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
	{
	  title: "Full stack Developer",
	  company_name: "Meta",
	  icon: meta,
	  iconBg: "#E6DEDD",
	  date: "Jan 2023 - Present",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
  ];
  
  const testimonials = [
	{
	  testimonial:
		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
	  name: "Sara Lee",
	  designation: "CFO",
	  company: "Acme Co",
	  image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	  testimonial:
		"I've never met a web developer who truly cares about their clients' success like Rick does.",
	  name: "Chris Brown",
	  designation: "COO",
	  company: "DEF Corp",
	  image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	  testimonial:
		"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
	  name: "Lisa Wang",
	  designation: "CTO",
	  company: "456 Enterprises",
	  image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
  ];
  
  const education = [
	{
	  subtitle:
		"I am currently studying pure and applied Mathematics in the Federal University of Technology, Minna, Niger state, Nigeria. Expected graduation date: December, 2023.",
	  timeline: "2017 - 2023",
	  study: "B.TECH Pure And Applied Mathematics",
	},
	{
	  subtitle:
	    "I am also currently studying the full stack software engineering course at alx africa.",
	  timeline: "2022 - 2023",
	  study: "Full Stack Software Engineering",
	},
  ];

  const skills = [
	{
	  id: 'html',
	  title: 'HTML',
	  icon: htmlIcon,
	  description:
		'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
	},
	{
	  id: 'css',
	  title: 'CSS',
	  icon: cssIcon,
	  description:
	  'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
	},
	{
	  id: 'javascript',
	  title: 'JavaScript',
	  icon: jsIcon,
	  description:
	  'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
	},
	{
	  id: 'react',
	  title: 'React',
	  icon: reactIcon,
	  description:
		'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
	},
	{
	  id: 'java',
	  title: 'Java',
	  icon: javaIcon,
	  description:
		'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
	},
	{
	  id: 'aws',
	  title: 'Amazon Web Services',
	  icon: awsIcon,
	  description:
		'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
	},
	{
	  id: 'figma',
	  title: 'Figma',
	  icon: figmaIcon,
	  description:
	  'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
	},
	{
	  id: 'git',
	  title: 'Git',
	  icon: gitIcon,
	  description:
	  'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
	},
	{
	  id: 'github',
	  title: 'GitHub',
	  icon: githubIcon,
	  description:
		'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
	},
	{
	  id: 'psql',
	  title: 'Postgresql',
	  icon: psqlIcon,
	  description:
		'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
	},
	{
	  id: 'vite',
	  title: 'Vite',
	  icon: viteIcon,
	  description:
		'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
	},
	{
	  id: 'py',
	  title: 'Python',
	  icon: pyIcon,
	  description:
		'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
	},
	{
	  id: 'node',
	  title: 'Node',
	  icon: nodeIcon,
	  description:
		'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
	},
	{
	  id: 'neo',
	  title: 'Neo4j',
	  icon: neoIcon,
	  description:
		'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
	},
	{
	  id: 'raspi',
	  title: 'Raspberry Pi',
	  icon: raspIcon,
	  description:
		'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
	},
	{
	  id: 'eslint',
	  title: 'Eslint',
	  icon: eslintIcon,
	  description:
		'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
	},
  ];

  const projects = [
	{
	  name: "Car Rent",
	  description:
		"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "mongodb",
		  color: "green-text-gradient",
		},
		{
		  name: "tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: carrent,
	  source_code_link: "https://github.com/",
	},
	{
	  name: "Job IT",
	  description:
		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "restapi",
		  color: "green-text-gradient",
		},
		{
		  name: "scss",
		  color: "pink-text-gradient",
		},
	  ],
	  image: jobit,
	  source_code_link: "https://github.com/",
	},
	{
	  name: "Trip Guide",
	  description:
		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	  tags: [
		{
		  name: "nextjs",
		  color: "blue-text-gradient",
		},
		{
		  name: "supabase",
		  color: "green-text-gradient",
		},
		{
		  name: "css",
		  color: "pink-text-gradient",
		},
	  ],
	  image: tripguide,
	  source_code_link: "https://github.com/",
	},
  ];
  
  const introduction = {
	text: [
	  "Tijani Saheed Olalekan, a Full Stack Software Engineer & Developer",
  
	  "But you can just call me TJ. I'm 22 and a final year Pure & Applied Mathematics student based in Lagos. I have a passion for AI & Machine Learning, and my mathematical background greatly amplifies my ability to dissect intricate data structures and algorithms, making complex problems more manageable. I tinker with both frontend and backend development and i get a kick out of crafting stunning and eye catching 3D models and designs.",
  
	  "When I'm not coding or doing maths, I like to unwind with some chess, video games and a bit of drawing. Music is my jam, I'm always grooving to different beats.",
  
	  "I'm continuously thrilled to join forces with like-minded individuals and teams  because hey, who doesn't love a good tech adventure with friends? Feel free to take a leisurely stroll through my potfolio. And always remember, in this digital realm, I'm just a click away, so never hesitate to reach out and connect. Thanks for dropping by!",
	],
  };

  export { services, technologies, experiences, testimonials,education, projects,introduction, memoji, skills };