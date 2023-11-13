import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const SocialLinks = () => {
	return (
		<div className="w-full h-[100px] bg-tertiary flex justify-center items-center gap-3 p-6">
			<a href="https://github.com/tsolami" target="_blank" rel="noreferrer">
			<FontAwesomeIcon 
			icon={faGithub} 
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
			<a href="mailto:tijani.saheed@yahoo.com" target="_blank" rel="noreferrer">
			<FontAwesomeIcon
			icon={faEnvelope}
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
			<a href="https://www.linkedin.com/in/saheed-tijani-b9935625b/" target="_blank " rel="noreferrer">
			<FontAwesomeIcon
			icon={faLinkedin}
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
			<a href="https://web.facebook.com/profile.php?id=100059079370738" target="_blank" rel="noreferrer">
			<FontAwesomeIcon
			icon={faFacebook}
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
			<a href="https://twitter.com/def_input_name" target="_blank" rel="noreferrer">
			<FontAwesomeIcon
			icon={faTwitter}
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
			<a href="https://www.instagram.com/papionfiya/" target="_blank" rel="noreferrer">
			<FontAwesomeIcon
			icon={faInstagram}
			className="text-3xl text-white hover:text-secondary-200 hover:scale-[1.1] transition-all duration-75"
			/>
			</a>
		</div>
	)
}

export default SocialLinks