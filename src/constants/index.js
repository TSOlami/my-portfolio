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
	solving,
	devops,
	security,
	testing,
	backenddev,
	api,
	frontenddev,
	responsive,
	database,
	c,
	pyIcon,
  } from "../assets";

  import {
	awsIcon,
	gitIcon,
	eslintIcon,
	raspIcon,
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
		name: "C",
		icon: c,
	},
	{
		name: "Python",
		icon: pyIcon,
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
	{
		name: "AWS",
		icon: awsIcon,
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
		id: 'backenddev',
		title: 'Backend Development',
		icon: backenddev,
		description:
		  'I am well-versed in server-side programming, where I craft the core logic of web applications using languages like Node.js and Python. My expertise ensures seamless app performance.',
	  },
	{
	  id: 'frontenddev',
	  title: 'Frontend Development',
	  icon: frontenddev,
	  description:
		'I craft captivating user interfaces and seamless experiences with the magic of React, weaving together stunning visuals and user-friendly interactions.',
	},
	{
	  id: 'devops',
	  title: 'DevOps',
	  icon: devops,
	  description:
	  'I manage the magic behind the scenes, ensuring applications are deployed, monitored, and scaled gracefully. My toolkit includes Bash scripting and Puppet for orchestration.',
	},
	{
	  id: 'security',
	  title: 'Security',
	  icon: security,
	  description:
	  'I am committed to safeguarding digital fortresses. Employing best practices, I fortify applications with layers of security, covering everything from code audits to encryption and user authentication.',
	},
	{
	  id: 'testing',
	  title: 'Testing',
	  icon: testing,
	  description:
		'I ensure rock-solid reliability. With a meticulous approach, I put applications through rigorous testing, guaranteeing they perform flawlessly and meet user expectations.',
	},
	{
	  id: 'api',
	  title: 'API',
	  icon: api,
	  description:
		'I ensure that data flows effortlessly between applications, enhancing functionality and user experience. I leverage tools like Postman and Insomnia to streamline this process.',
	},
	{
	  id: 'responsive',
	  title: 'Responsive Design',
	  icon: responsive,
	  description:
		'I create responsive web layouts that adapt beautifully to any screen, from desktops to mobile phones, ensuring a top-notch user experience.',
	},
	{
	  id: 'figma',
	  title: 'Figma',
	  icon: figmaIcon,
	  description:
	  ' I bring ideas to life using Figma, creating stunning and user-friendly interfaces that captivate and engage.',
	},
	{
	  id: 'git',
	  title: 'Version Control',
	  icon: gitIcon,
	  description:
	  'I harness the power of version control systems like Git and GitHub to keep projects organized, collaborative, and error-free.',
	},
	{
	  id: 'solving',
	  title: 'Problem Solving',
	  icon: solving,
	  description:
		' I thrive on tackling complex challenges, using my mathematical background to break down problems and find innovative solutions that make a difference.',
	},
	{
	  id: 'database',
	  title: 'Database Management',
	  icon: database,
	  description:
		'I excel in efficiently handling databases, encompassing tasks such as expertly crafting data models and optimizing queries. Proficient in SQL, MongoDB, and PostgreSQL, I ensure data flows seamlessly.',
	},
	{
	  id: 'c',
	  title: 'C Programming',
	  icon: c,
	  description:
		'My journey into the world of object-oriented programming began with C. This foundational language taught me the essentials of structured coding and set the stage for my career in software development.',
	},
	{
	  id: 'cloud',
	  title: 'Cloud Services',
	  icon: awsIcon,
	  description:
		'I leverage cloud services like AWS, Google Cloud and Azure to scale and deploy applications with ease.',
	},
	{
	  id: 'docker',
	  title: 'Containerization ',
	  icon: docker,
	  description:
		' I specialize in containerization technologies such as Docker, enabling efficient application packaging and deployment for consistent performance across diverse environments.',
	},
	{
	  id: 'raspi',
	  title: 'Raspberry Pi',
	  icon: raspIcon,
	  description:
		'I am passionate about Raspberry Pi and its wide range of applications. Whether it is configuring hardware, coding in Python, or experimenting with IoT projects, I love diving into the endless possibilities this versatile tool offers.',
	},
	{
	  id: 'eslint',
	  title: 'Code Quality',
	  icon: eslintIcon,
	  description:
		'I take pride in crafting pristine and professional code, adhering to industry standards and best practices. I diligently follow PEP8 style guidelines for Python and leverage ESLint for JavaScript projects, ensuring top-notch quality and consistency.',
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