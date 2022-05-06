import { useEffect } from '@wordpress/element';

import Settings from './Settings';
import Style from './Style';
import LottiePlayer from './LottiePlayer';

const Edit = props => {
	const { className, attributes, setAttributes, clientId } = props;
	const { file, isControls, isAutoplay, isLoop, isHover, mode, count, speed, intermission, background } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	// Set or Remove attributes
	const lottieWrapper = document.querySelector(`#lpbLottiePlayer-${clientId} .lpbLottiePlayer`);
	const toggleAttr = (selector, condition, attribute, value) => {
		condition && selector?.setAttribute(attribute, value);
		!condition && selector?.removeAttribute(attribute, value);
	}

	useEffect(() => {
		lottieWrapper ? lottieWrapper.innerHTML = '' : '';

		const reInitPlayer = document.createElement('lottie-player');
		toggleAttr(reInitPlayer, file, 'src', file);
		toggleAttr(reInitPlayer, isControls, 'controls', '');
		toggleAttr(reInitPlayer, isAutoplay, 'autoplay', '');
		toggleAttr(reInitPlayer, isLoop, 'loop', '');
		toggleAttr(reInitPlayer, isHover, 'hover', '');
		toggleAttr(reInitPlayer, mode, 'mode', mode);
		toggleAttr(reInitPlayer, count, 'count', count);
		toggleAttr(reInitPlayer, speed, 'speed', speed);
		toggleAttr(reInitPlayer, true, 'direction', 1);
		toggleAttr(reInitPlayer, intermission, 'intermission', intermission * 1000);
		toggleAttr(reInitPlayer, background, 'background', background);

		lottieWrapper ? lottieWrapper.appendChild(reInitPlayer) : '';
	}, [file, isControls, isAutoplay, isLoop, isHover, mode, count, speed, intermission, background]);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`lpbLottiePlayer-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} />

			<div className='lpbLottiePlayer'>
				<LottiePlayer attributes={attributes} />
			</div>
		</div>
	</>;
};
export default Edit;