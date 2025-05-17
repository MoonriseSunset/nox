// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://moonrisesunset.github.io',
  base: '/nox',
  integrations: [	
    starlight({
      title: "Nox",
	  components:{
		  Footer: './src/components/Footer.astro',
	  },
			customCss:[
				'./src/styles/starlight.css',

				'@fontsource/barlow',
				'@fontsource/fira-mono',
				'@fontsource-variable/dm-sans'
			],
			social: {
				github: 'https://github.com/MoonriseSunset',
			},
			favicon: './assets/starlightfavicon.png',
      		logo: {src:'./src/assets/Logo.png',},
			sidebar: [
				{
					label: 'Start Here',
					items:[
						{label: 'Landing Page',link: '/'},
						{label: 'Changelog',link: '/changelog/'},
					
					],
					collapsed: false,
				},
			],
		}),
  ],
});