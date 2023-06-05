import { useEffect, useRef } from 'react';
import { render } from 'react-dom';

import './style.scss';
import Style from './Style';
import LottiePlayer from './LottiePlayer';
import { toggleAttr } from './utils/functions';

// Lottie Player
document.addEventListener('DOMContentLoaded', () => {
	const allPlayers = document.querySelectorAll('.wp-block-lpb-lottie-player');
	allPlayers.forEach(player => {
		const attributes = JSON.parse(player.dataset.attributes);

		render(<>
			<Style attributes={attributes} clientId={attributes.cId} />

			<RenderLottiePlayer attributes={attributes} clientId={attributes.cId} />
		</>, player);

		player?.removeAttribute('data-attributes');
	});
});

const RenderLottiePlayer = ({ attributes, clientId }) => {
	const { isControls, isAutoplay, isLoop, link } = attributes;

	const lottieEl = useRef(null);

	useEffect(() => {
		const lottiePlayer = document.querySelector(`#lpbLottiePlayer-${clientId} .lpbLottiePlayer lottie-player`);

		toggleAttr(lottiePlayer, isControls, 'controls', '');
		toggleAttr(lottiePlayer, isAutoplay, 'autoplay', '');
		toggleAttr(lottiePlayer, isLoop, 'loop', '');
		// toggleAttr(lottiePlayer, isHover, 'hover', '');
	}, []);

	return <div className='lpbLottiePlayer'>
		{link ? <a href={link}><LottiePlayer ref={lottieEl} attributes={attributes} /></a> : <LottiePlayer ref={lottieEl} attributes={attributes} />}
	</div>
}