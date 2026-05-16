import { __ } from '@wordpress/i18n';

export const sourceTypes = [
	{ label: __('Upload', 'embed-lottie-player'), value: 'upload' },
	{ label: __('Link', 'embed-lottie-player'), value: 'link' }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'embed-lottie-player') },
	{ name: 'style', title: __('Style', 'embed-lottie-player') }
]