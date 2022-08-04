import { useEffect, forwardRef } from '@wordpress/element';

import { toggleAttr } from './Const/functions';

const LottiePlayer = ({ attributes }, ref) => {
	const { file, isControls, isAutoplay, isLoop, background } = attributes;

	useEffect(() => {
		if (ref?.current) {
			toggleAttr(ref?.current, isControls, 'controls', '');
			toggleAttr(ref?.current, isAutoplay, 'autoplay', '');
			toggleAttr(ref?.current, isLoop, 'loop', '');
		}
	}, [ref]);

	return <lottie-player
		ref={ref}
		src={file}
		loop
		// mode={mode}
		// count={count}
		// speed={speed}
		// direction={1}
		// intermission={intermission * 1000}
		mode='normal'
		count={0}
		speed={1}
		direction={1}
		intermission={0}
		background={background}
	></lottie-player>
}
export default forwardRef(LottiePlayer);