import { useEffect, useRef } from 'react';
import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import DotLottiePlayer from '../Common/DotLottiePlayer';
import { toggleAttr } from '../../utils/functions';
import { prefix } from '../../utils/data';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { file, isControls, isAutoplay, isLoop, background } = attributes;

	const blockProps = useBlockProps();

	const lottieEl = useRef(null);

	const id = `${prefix}-${clientId}`;

	// Set or Remove attributes
	const lottieWrapper = document.querySelector(`#${id} .${prefix}`);

	useEffect(() => {
		lottieWrapper ? lottieWrapper.innerHTML = '' : '';

		const loopVal = isLoop ? true : false;

		const reInitPlayer = document.createElement('dotlottie-player');
		toggleAttr(reInitPlayer, file, 'src', file);
		toggleAttr(reInitPlayer, isControls, 'controls', '');
		toggleAttr(reInitPlayer, isAutoplay, 'autoplay', '');
		toggleAttr(reInitPlayer, isLoop, 'loop', loopVal);
		toggleAttr(reInitPlayer, false, 'hover', '');
		toggleAttr(reInitPlayer, 'normal', 'mode', 'normal');
		toggleAttr(reInitPlayer, 1, 'speed', 1);
		toggleAttr(reInitPlayer, true, 'direction', 1);
		toggleAttr(reInitPlayer, false, 'intermission', 0);
		toggleAttr(reInitPlayer, background, 'background', background);
		toggleAttr(reInitPlayer, true, 'debug');

		lottieWrapper ? lottieWrapper.appendChild(reInitPlayer) : '';
	}, [file, isControls, isAutoplay, isLoop, background]);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div {...blockProps}>
			<Style attributes={attributes} id={blockProps.id} />

			<div className={prefix}>
				<DotLottiePlayer ref={lottieEl} attributes={attributes} />
			</div>
		</div>
	</>;
};
export default Edit;