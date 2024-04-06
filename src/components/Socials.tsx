import { ReactNode } from "react";
import { ImFacebook, ImInstagram, ImLinkedin } from "react-icons/im";

type SocialLink = {
	href: string;
	icon: ReactNode;
};

const socialLinks: SocialLink[] = [
	{ href: "https://www.facebook.com/", icon: <ImFacebook size={20} /> },
	{
		href: "https://www.instagram.com/mjbeers_photography/",
		icon: <ImInstagram size={20} />,
	},
	{
		href: "linkedin.com/in/mitchell-beers-a66b12102",
		icon: <ImLinkedin size={20} />,
	},
];

const Socials = () => {
	return (
		<div className="hidden laptop:flex border-t-2 border-black pt-4 mr-9">
			<ul className="flex w-full gap-8  ">
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
