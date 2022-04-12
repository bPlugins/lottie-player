const Style = ({ attributes, clientId }) => {
	const { playerAlign, link, width, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor } = attributes;

	return <style dangerouslySetInnerHTML={{
		__html: `
		#lpbLottiePlayer-${clientId} .lpbLottiePlayer{
			text-align: ${playerAlign};
		}
		#lpbLottiePlayer-${clientId} .lpbLottiePlayer lottie-player{
			width: ${width};
			cursor: ${link ? 'pointer' : 'auto'};
			--lottie-player-toolbar-height: ${controlsHeight};
			--lottie-player-toolbar-background-color: ${controlsBG};
			--lottie-player-toolbar-icon-color: ${controlsIconColor};
			--lottie-player-toolbar-icon-hover-color: ${controlsIconHoverColor};
			--lottie-player-toolbar-icon-active-color: ${controlsIconActiveColor};
			--lottie-player-seeker-track-color: ${controlsTrackColor};
			--lottie-player-seeker-thumb-color: ${controlsThumbColor};
		}
		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;