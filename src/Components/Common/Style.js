import { isValidCSS } from '../../../../bpl-tools/utils/getCSS';

import { prefix } from '../../utils/data';

const Style = ({ attributes, id }) => {
	const { playerAlign, link, width, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor } = attributes;

	const lottiePlayerSl = `#${id} .${prefix}`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${lottiePlayerSl}{
			${isValidCSS('align-items', 'left' === playerAlign ? 'flex-start' : 'right' === playerAlign ? 'flex-end' : 'center')}
		}
		${lottiePlayerSl} dotlottie-player{
			${isValidCSS('width', width)}
			${isValidCSS('cursor', link ? 'pointer' : 'auto')}
			${isValidCSS('--lottie-player-toolbar-height', controlsHeight)}
			${isValidCSS('--lottie-player-toolbar-background-color', controlsBG)}
			${isValidCSS('--lottie-player-toolbar-icon-color', controlsIconColor)}
			${isValidCSS('--lottie-player-toolbar-icon-hover-color', controlsIconHoverColor)}
			${isValidCSS('--lottie-player-toolbar-icon-active-color', controlsIconActiveColor)}
			${isValidCSS('--lottie-player-seeker-track-color', controlsTrackColor)}
			${isValidCSS('--lottie-player-seeker-thumb-color', controlsThumbColor)}
		}
		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;