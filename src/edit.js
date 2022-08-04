import { useEffect, useRef } from '@wordpress/element';

import { tabController } from '../../Components/Helper/functions';

import Settings from './Settings';
import Style from './Style';
import LottiePlayer from './LottiePlayer';
import { toggleAttr } from './Const/functions';

const Edit = props => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;
	const { file, isControls, isAutoplay, isLoop, background } = attributes;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	useEffect(() => tabController(), [isSelected]);

	const lottieEl = useRef(null);

	// Set or Remove attributes
	const lottieWrapper = document.querySelector(`#lpbLottiePlayer-${clientId} .lpbLottiePlayer`);

	useEffect(() => {
		lottieWrapper ? lottieWrapper.innerHTML = '' : '';

		const reInitPlayer = document.createElement('lottie-player');
		toggleAttr(reInitPlayer, file, 'src', file);
		toggleAttr(reInitPlayer, isControls, 'controls', '');
		toggleAttr(reInitPlayer, isAutoplay, 'autoplay', '');
		toggleAttr(reInitPlayer, isLoop, 'loop', '');
		// toggleAttr(reInitPlayer, isHover, 'hover', '');
		// toggleAttr(reInitPlayer, mode, 'mode', mode);
		// toggleAttr(reInitPlayer, count, 'count', count);
		// toggleAttr(reInitPlayer, speed, 'speed', speed);
		// toggleAttr(reInitPlayer, true, 'direction', 1);
		// toggleAttr(reInitPlayer, intermission, 'intermission', intermission * 1000);
		toggleAttr(reInitPlayer, true, 'mode', 'normal');
		toggleAttr(reInitPlayer, true, 'count', 0);
		toggleAttr(reInitPlayer, true, 'speed', 1);
		toggleAttr(reInitPlayer, true, 'direction', 1);
		toggleAttr(reInitPlayer, true, 'intermission', 0);
		toggleAttr(reInitPlayer, background, 'background', background);

		lottieWrapper ? lottieWrapper.appendChild(reInitPlayer) : '';
	}, [file, isControls, isAutoplay, isLoop, background]);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`lpbLottiePlayer-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} />

			<div className='lpbLottiePlayer'>
				<LottiePlayer ref={lottieEl} attributes={attributes} />
			</div>
		</div>
	</>;
};
export default Edit;