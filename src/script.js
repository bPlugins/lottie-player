// Import Sass
import './style.scss';

// Lottie files assets
import '@lottiefiles/lottie-player';

const allPlayers = document.querySelectorAll('.wp-block-lpb-lottie-player');
Object.values(allPlayers).map(player => {
    const currentPlayerWrapper = document.getElementById(`${player.id}`);
    const { isControls, isAutoplay, isLoop, isHover } = JSON.parse(currentPlayerWrapper.dataset.controls);

    const lottiePlayer = document.querySelector(`#${player.id} lottie-player`);

    const toggleAttr = (condition, attribute, value) => {
        condition && lottiePlayer?.setAttribute(attribute, value);
        !condition && lottiePlayer?.removeAttribute(attribute, value);
    }

    toggleAttr(isControls, 'controls', '');
    toggleAttr(isAutoplay, 'autoplay', '');
    toggleAttr(isLoop, 'loop', '');
    toggleAttr(isHover, 'hover', '');

    currentPlayerWrapper.removeAttribute('data-controls');
});