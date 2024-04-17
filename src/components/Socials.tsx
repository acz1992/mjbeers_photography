import { ReactNode } from "react";
import { ImFacebook, ImInstagram, ImLinkedin } from "react-icons/im";

type SocialLink = {
	href: string;
	icon: ReactNode;
};

const socialLinks: SocialLink[] = [
	{
		href: "https://www.facebook.com/mitchelljohnbeers",
		icon: <ImFacebook size={20} />,
	},
	{
		href: "https://www.instagram.com/mjbeers_photography/",
		icon: <ImInstagram size={20} />,
	},
	{
		href: "https://linkedin.com/in/mitchell-beers-a66b12102",
		icon: <ImLinkedin size={20} />,
	},
];

const Socials = () => {
	console.log("Socials component is rendered"); // Logging component render

	return (
		<div className="laptop:flex border-t-2 border-black pt-4 ">
			<ul className="flex w-full gap-8 justify-between ">
				{socialLinks.map((link, index) => (
					<li key={index}>
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-50 transition"
						>
							{link.icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Socials;
