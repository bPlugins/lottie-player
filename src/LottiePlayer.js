const LottiePlayer = ({ attributes }) => {
	const { file, mode, count, speed, intermission, background } = attributes;

	return <lottie-player
		src={file}
		controls
		autoplay
		loop
		mode={mode}
		count={count}
		speed={speed}
		direction={1}
		intermission={intermission * 1000}
		background={background}
	></lottie-player>
}
export default LottiePlayer;