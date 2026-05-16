import { useEffect, forwardRef } from 'react';

import { toggleAttr } from '../../utils/functions';

const DotLottiePlayer = ({ attributes }, ref) => {
	const { file, isControls, isAutoplay, isLoop, background } = attributes;

	useEffect(() => {
		if (ref?.current) {
			const loopVal = isLoop ? true : false;

			toggleAttr(ref?.current, isControls, 'controls', '');
			toggleAttr(ref?.current, isAutoplay, 'autoplay', '');
			toggleAttr(ref?.current, isLoop, 'loop', loopVal);
			toggleAttr(ref?.current, false, 'hover', '');
		}
	}, [ref]);

	return <dotlottie-player
		ref={ref}
		src={file}
		autoplay
		loop
		mode='normal'
		speed={1}
		direction={1}
		intermission={0}
		background={background}
		debug
	></dotlottie-player>
}
export default forwardRef(DotLottiePlayer);