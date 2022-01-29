import { useEffect } from '@wordpress/element';

import Settings from './settings';

const Edit = props => {
    const { className, attributes: { playerAlign, file, isControls, isAutoplay, isLoop, isHover, mode, count, speed, intermission, width, background, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor }, setAttributes, clientId } = props;

    useEffect(() => { clientId && setAttributes({ cId: clientId }); }, [clientId]); // Set & Update clientId to cId

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
        <Settings attributes={props.attributes} setAttributes={setAttributes} />

        <div className={className} id={`lpbLottiePlayer-${clientId}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                #lpbLottiePlayer-${clientId} .lpbLottiePlayer{
                    text-align: ${playerAlign};
                }
                #lpbLottiePlayer-${clientId} .lpbLottiePlayer lottie-player{
                    width: ${width};
                    --lottie-player-toolbar-height: ${controlsHeight};
                    --lottie-player-toolbar-background-color: ${controlsBG};
                    --lottie-player-toolbar-icon-color: ${controlsIconColor};
                    --lottie-player-toolbar-icon-hover-color: ${controlsIconHoverColor};
                    --lottie-player-toolbar-icon-active-color: ${controlsIconActiveColor};
                    --lottie-player-seeker-track-color: ${controlsTrackColor};
                    --lottie-player-seeker-thumb-color: ${controlsThumbColor};
                }
            `}} />

            <div className='lpbLottiePlayer'>
                <lottie-player
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
            </div>
        </div>
    </>;
};
export default Edit;