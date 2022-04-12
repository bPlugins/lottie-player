import { render, useEffect } from '@wordpress/element';
import '@lottiefiles/lottie-player'; // Lottie player assets

import './style.scss';
import Style from './Style';
import LottiePlayer from './LottiePlayer';

// Lottie Player
document.addEventListener('DOMContentLoaded', () => {
	const allPlayers = document.querySelectorAll('.wp-block-lpb-lottie-player');
	allPlayers.forEach(player => {
		const attributes = JSON.parse(player.dataset.attributes);

		render(<>
			<Style attributes={attributes} clientId={attributes.cId} />

			<RenderLottiePlayer attributes={attributes} clientId={attributes.cId} />
		</>, player);

		player?.removeAttribute('data-attributes')
	});
});

const RenderLottiePlayer = ({ attributes, clientId }) => {
	const { isControls, isAutoplay, isLoop, isHover, link } = attributes;

	useEffect(() => {
		const lottiePlayer = document.querySelector(`#lpbLottiePlayer-${clientId} .lpbLottiePlayer lottie-player`);

		const toggleAttr = (condition, attribute, value) => {
			condition && lottiePlayer?.setAttribute(attribute, value);
			!condition && lottiePlayer?.removeAttribute(attribute, value);
		}

		toggleAttr(isControls, 'controls', '');
		toggleAttr(isAutoplay, 'autoplay', '');
		toggleAttr(isLoop, 'loop', '');
		toggleAttr(isHover, 'hover', '');
	}, []);

	return <div className='lpbLottiePlayer'>
		{link ? <a href={link}><LottiePlayer attributes={attributes} /></a> : <LottiePlayer attributes={attributes} />}
	</div>
}