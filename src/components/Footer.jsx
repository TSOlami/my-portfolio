import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<div className="w-full flex flex-col">
				<SocialLinks />
				<div className="bg-tertiary flex justify-center pb-4 text-white font-montserrat">
					<span>
						Made by <em>Tijani Saheed Olalekan (T.J.)</em>
					</span>
				</div>
			</div>
	)
}

export default Footer