import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';
import DotLottiePlayer from './Components/Common/DotLottiePlayer';
import { toggleAttr } from './utils/functions';
import { prefix } from './utils/data';

document.addEventListener('DOMContentLoaded', () => {
	const playerEls = document.querySelectorAll('.wp-block-lpb-lottie-player');
	playerEls.forEach(playerEl => {
		const attributes = JSON.parse(playerEl.dataset.attributes);

		createRoot(playerEl).render(<>
			<Style attributes={attributes} id={playerEl.id} />

			<RenderLottiePlayer attributes={attributes} id={playerEl.id} />
		</>);

		playerEl?.removeAttribute('data-attributes')
	});
});

const RenderLottiePlayer = ({ attributes, id }) => {
	const { isControls, isAutoplay, isLoop, link } = attributes;

	const lottieEl = useRef(null);

	useEffect(() => {
		const lottiePlayer = document.querySelector(`#${id} .${prefix} lottie-player`);

		const loopVal = isLoop ? true : false;

		toggleAttr(lottiePlayer, isControls, 'controls', '');
		toggleAttr(lottiePlayer, isAutoplay, 'autoplay', '');
		toggleAttr(lottiePlayer, isLoop, 'loop', loopVal);
		toggleAttr(lottiePlayer, false, 'hover', '');
	}, []);

	return <div className={prefix}>
		{link ?
			<a href={link} target='_self'>
				<DotLottiePlayer ref={lottieEl} attributes={attributes} />
			</a> :
			<DotLottiePlayer ref={lottieEl} attributes={attributes} />}
	</div>
}