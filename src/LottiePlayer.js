const LottiePlayer = ({ attributes }) => {
	const { file, background } = attributes;

	return <lottie-player
		src={file}
		controls
		autoplay
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
export default LottiePlayer;