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
			customCss:[
				'./src/styles/starlight.css',
				'@fontsource-variable/inter',
				'@fontsource-variable/sometype-mono',
				'@fontsource-variable/noto-sans',
				'@fontsource/atkinson-hyperlegible',
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