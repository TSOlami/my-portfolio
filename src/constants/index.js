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
	namssn,
	trackc,
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
	whosteejay,
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
		id: 'skills',
		title: 'Skills',
	},
	{
		id: 'projects',
		title: 'Projects',
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
  ];
  
  const experiences = [];
  
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
	  'I bring ideas to life using Figma, creating stunning and user-friendly interfaces that captivate and engage.',
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
		'My journey into the world of object-oriented programming began with C. This foundational language taught me the essentials of structured coding and set the stage for my career.',
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
		'I am passionate about Raspberry Pi and its wide range of applications, configuring hardware, coding in Python, or experimenting with IoT projects.',
	},
	{
	  id: 'eslint',
	  title: 'Code Quality',
	  icon: eslintIcon,
	  description:
		'I craft pristine and professional code, follow industry standards and best practices. I diligently follow PEP8 style guidelines for Python, ESLint for JavaScript projects, ensuring top-notch quality and consistency.',
	},
  ];

  const projects = [
	{
	  name: "NAMSSN Website",
	  description:
		"My friends and I always struggled to find comprehensive lecture notes, textbooks, past questions and solutions for our departmental courses in my university. So I collaborated with my peers to create an E-Library for our department (non-profit). I built the website using React.js, Node.js, MongoDB and Figma. I integrated the telegram bot API for saving these resources on the telegram cloud to reduce the cost of hosting the files. I also integrated a payment gateway (Paystack) to allow students pay their dues without stress on the website.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
			name: "nodejs",
			color: "pink-text-gradient",
		},
		{
		  name: "mongodb",
		  color: "green-text-gradient",
		},
		{
		  name: "figma",
		  color: "pink-text-gradient",
		},
	  ],
	  image: namssn,
	  source_code_link: "https://github.com/TSOlami/namssn-website/",
		project_link: "https://namssn-futminna.onrender.com/",
	},
	{
	  name: "TrackC",
	  description:
		"I realized how difficult it was for me and my friends that are crypto enthusiasts to keep track of our crypto assets, so i went ahead and assembled a team to build TrackC. TrackC is a web application that allows users to track all their crypto assets, manage their portfolio, and stay updated with the latest cryptocurrency news. I built the web application using Python-Flask web framework and Tailwind. I used coingecko API to get live and the historical price of coins to plot a graph of the user's portfolio value over time. I also used the same API to get the latest news about cryptocurrencies. ",
	  tags: [
		{
		  name: "Flask",
		  color: "blue-text-gradient",
		},
		{
		  name: "restapi",
		  color: "green-text-gradient",
		},
		{
		  name: "Tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: trackc,
	  source_code_link: "https://github.com/TSOlami/TrackC",
		project_link: "https://trackc-flask-app-wg3p.onrender.com/",
	},
	{
		name: "Portfolio Website",
		description:
		  "I built my portfolio website using tools like React.js, Three.js, Tailwind CSS, Framer Motion, ESLint and some other tech goodies. This project was a great opportunity to showcase my skills and creativity. It was also a great way to learn new technologies and improve my existing skills. It displays a bit of my personality and my journey as a developer, my skills, projects and experiences. To practice my real-time rendering skills and make the website more interactive, I used Three.js to display different 3D models on the website. I also used Framer Motion to add some cool animations to the website.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "threejs",
				color: "pink-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "eslint",
				color: "pink-text-gradient",
			},
		],
		image: whosteejay,
		source_code_link: "https://github.com/TSOlami/my-portfolio",
		project_link: "https://whosteejay.netlify.app/"
	}
  ];
  
  const introduction = {
	text: [
	  "Tijani S. Olamilekan, a Software Engineer & Developer",
  
	  "But you can just call me TJ. I'm a 22-year-old final year Pure & Applied Mathematics student based in Lagos. While my specialization lies in backend development, my passion extends to AI & Machine Learning, and my mathematical background greatly amplifies my ability to dissect intricate data structures and algorithms, making complex problems more manageable.",
  
	  "When I'm not coding or solving math problems, you'll likely still catch me thinking about coding and math🌚 (seriously, it's a perpetual thought loop). Otherwise, I enjoy anime, video games, and manga. I'm into chess, football, and a bit of drawing. Music? I have a playlist for all your moods.",
  
	  "I'm always happy to join forces with like-minded individuals and teams  because hey, who doesn't love a good tech adventure with friends? Feel free to take a leisurely stroll through my potfolio. And always remember, in this digital realm, I'm just a click away, so never hesitate to reach out and connect. Thanks for dropping by!",
	],
  };

  export { services, technologies, experiences, education, projects, introduction, memoji, skills };