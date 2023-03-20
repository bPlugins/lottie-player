import { __ } from '@wordpress/i18n';

const options = {
	modes: [
		{ label: __('Normal', 'lottie-player'), value: 'normal', icon: __('Normal', 'lottie-player') },
		{ label: __('Bounce', 'lottie-player'), value: 'bounce', icon: __('Bounce', 'lottie-player') }
	],

	interactivities: [
		{ label: __('No Interactivity (Pro)', 'lottie-player'), value: 'noInteractivity' },
		{ label: __('Sync with scroll (Pro)', 'lottie-player'), value: 'syncWithScroll' },
		{ label: __('Scroll with offset (Pro)', 'lottie-player'), value: 'scrollWithOffset' },
		{ label: __('Sync animation with cursor position (Pro)', 'lottie-player'), value: 'syncAnimationWithCursorPosition' },
		{ label: __('Sync animation with cursor horizontal movement (Pro)', 'lottie-player'), value: 'syncAnimationWithCursorHorizontalMovement' },
		{ label: __('Play animation on click (Pro)', 'lottie-player'), value: 'playAnimationOnClick' },
		// { label: __('Toggle animation (Pro)', 'lottie-player'), value: 'toggleAnimation' },
		{ label: __('Play animation when visible (Pro)', 'lottie-player'), value: 'playAnimationWhenVisible' },
	],

	generalStyleTabs: [
		{ name: 'general', title: __('General', 'lottie-player') },
		{ name: 'style', title: __('Style', 'lottie-player') }
	]
}
export default options;