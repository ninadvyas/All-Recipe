export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "All-Recipe",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Recipes",
			href: "/recipes",
		},
    {
      label: "About",
      href: "/about",
    },
	{
		label: "Contact",
		href: "/contact",
	  },
	 
	],
	navMenuItems: [
		{
			label: "About",
			href: "/about",
		},
		
	],
	links: {
		github: "https://github.com/ninadvyas/All-Recipe",
		twitter: "https://twitter.com/ninadvsd",
    sponsor: "https://github.com/ninadvyas/All-Recipe"
	},
};
