import { __ } from '@wordpress/i18n';

const slug = 'embed-lottie-player';
const webSlug = 'lottie-player';

export const dashboardInfo = (info) => {
	const { version, nonce, licenseActiveNonce } = info;

	return {
		name: `Lottie Player`,
		displayName: `Lottie Player - Add Interactive Lottie Animations with Block Support`,
		description: 'Embed any LottieFiles animations, .json or .dotlottie files to your WordPress Posts, Pages, Widgets, and more. This plugin is packed with many useful features. You can show your Lottie files exactly the way you want.',
		slug,
		version,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
			// proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: '',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${webSlug}/`,
			docs: `https://bplugins.com/docs/${webSlug}/`,
			pricing: `https://bplugins.com/products/${webSlug}/pricing/`,
		},
		freemius: {
			product_id: 14561,
			plan_id: 24322,
			public_key: 'pk_8be5ff74d8f915918e0992c8de37c'
		},
		licenseActiveNonce,
		changelogs: [
			{
				version: '1.3.0 - 17 May 2026',
				type: 'update',
				list: [
					'Update: Freemius Lite SDK to v2.2.0',
					'Update: Block API version upgraded to v3',
					'Fix: Minor bug fixes and code improvements for better stability'
				]
			},
			{
				version: '1.2.4 - 05 Mar 2026',
				type: 'fix',
				list: [
					'Fix: SDK version mismatch.',
					'Update: Improved internationalization (i18n) by adding proper text domains.',
					'Fix: Caption position issues'
				]
			},
			{
				version: '1.2.3 - 23 Feb 2026',
				type: 'update',
				list: [
					'Update: Admin Dashboard - Improved UI with better navigation and clearer feature organization.'
				]
			},
			{
				version: '1.2.1 - 24 Nov 2025',
				type: 'new',
				list: [
					'Update SDK',
					'New Admin UI'
				]
			},
			{
				version: '1.2.0 - 23 Apr 2025',
				type: 'fix',
				list: [
					'Remove mime types.'
				]
			},
			{
				version: '1.1.8 - 27 Jan 2025',
				type: 'update',
				list: [
					'Update SDK.'
				]
			}
		],
		proFeatures: [
			__('Upload Lottie files from media library.', 'embed-lottie-player'),
			__('Animation options like Speed, Count, Interval.', 'embed-lottie-player'),
			__('Forward or Backward Direction.', 'embed-lottie-player'),
			__('Interactivity to play the Animation based on different interactivity.', 'embed-lottie-player'),
			__('Shortcode support to display lottie player anywhere.', 'embed-lottie-player')
		],
		startButton: {
			label: 'Start Now',
			url: `wp-admin/post-new.php?post_type=page&title=Lottie Player&content=<!-- wp:lpb/lottie-player /-->&nonce=${nonce}`
		}
	}
}

export const demoInfo = {
	// allInOneLabel: 'See All Demos',
	// allInOneLink: '',
	demos: [
		{
			icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z' /></svg>,
			title: 'Default Player',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/default/',
			category: 'Player'
		},
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z'/></svg>`,
			title: 'Without Controls & Caption',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/without-controls-and-caption/',
			category: 'Minimal'
		},
		{
			icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z' /></svg>,
			title: 'Bounce Mode',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/bounce-mode/',
			category: 'Effect'
		},
		{
			icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z' /></svg>,
			title: 'Backward Direction',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/backward-direction/',
			category: 'Direction'
		},
		{
			icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z' /></svg>,
			title: 'Custom Controls & Caption',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/customize-player-controls-and-caption/',
			category: 'Customization'
		},
		{
			icon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z' /></svg>,
			title: 'Interactivity',
			type: 'iframe',
			url: 'https://lpb.bplugins.com/demo/interactivity/',
			category: 'Interactive'
		}
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 14561,
	planId: 24322,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3 // choose from licenses item
	}
}