import { __ } from '@wordpress/i18n';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, RangeControl, __experimentalUnitControl as UnitControl, TextControl, TabPanel } from '@wordpress/components';

// Variables
import Title from '../../Components/Title';
import BColor from '../../Components/BColor';
import BtnGroup from '../../Components/BtnGroup';
import options from './Const/options';
const { modes, generalStyleTabs, pxUnit, perUnit, emUnit } = options;

const Settings = ({ attributes, setAttributes }) => {
    const { playerAlign, file, isControls, isAutoplay, isLoop, isHover, mode, count, speed, intermission, link, width, background, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor } = attributes;

    return <>
        <InspectorControls>
            <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
                {'general' == tab.name && <>
                    <PanelBody className='bPlPanelBody' title={__('Player Settings', 'lottie-player')}>
                        <Title mt='0'>{__('Lottie Json file url:', 'lottie-player')}</Title>
                        <TextControl value={file} onChange={val => setAttributes({ file: val })} />

                        <ToggleControl className='mt20' label={__('Show Controls', 'lottie-player')} checked={isControls} onChange={val => setAttributes({ isControls: val })} />

                        <ToggleControl label={__('Enable Autoplay', 'lottie-player')} checked={isAutoplay} onChange={val => setAttributes({ isAutoplay: val })} />

                        <ToggleControl label={__('Enable Loop', 'lottie-player')} checked={isLoop} onChange={val => setAttributes({ isLoop: val })} />

                        <ToggleControl label={__('Enable Hover', 'lottie-player')} checked={isHover} onChange={val => setAttributes({ isHover: val })} />

                        <PanelRow className='mt20'>
                            <Title mt='0' mb='0'>{__('Mode:', 'lottie-player')}</Title>
                            <BtnGroup value={mode} onChange={val => setAttributes({ mode: val })} options={modes} />
                        </PanelRow>

                        <Title>{__('Count (Set 0 to infinite):', 'lottie-player')}</Title>
                        <RangeControl value={count} onChange={val => setAttributes({ count: val })} min={0} max={50} step={1} />

                        <Title>{__('Speed:', 'lottie-player')}</Title>
                        <RangeControl value={speed} onChange={val => setAttributes({ speed: val })} min={0.01} max={20} step={.01} />

                        <Title>{__('Interval (s):', 'lottie-player')}</Title>
                        <RangeControl value={intermission} onChange={val => setAttributes({ intermission: val })} min={0} max={20} step={.01} />

                        <Title mt='0'>{__('Link the player:', 'lottie-player')}</Title>
                        <TextControl value={link} onChange={val => setAttributes({ link: val })} />
                        <small>{__('If you want to link the player, enter the link here. Otherwise, leave as blank.')}</small>
                    </PanelBody>
                </>}

                {'style' == tab.name && <>
                    <PanelBody className='bPlPanelBody' title={__('Player Styles', 'lottie-player')}>
                        <UnitControl label={__('Width:', 'lottie-player')} labelPosition='left' value={width} onChange={val => setAttributes({ width: val })} units={[pxUnit, perUnit, emUnit]} />

                        <BColor label={__('Background Color:', 'lottie-player')} value={background} onChange={val => setAttributes({ background: val })} defaultColor='#0000' />
                    </PanelBody>

                    <PanelBody className='bPlPanelBody' title={__('Controls Styles', 'lottie-player')} initialOpen={false}>
                        <UnitControl label={__('Height:', 'lottie-player')} labelPosition='left' value={controlsHeight} onChange={val => setAttributes({ controlsHeight: val })} units={[pxUnit, perUnit, emUnit]} />

                        <BColor label={__('Background Color:', 'lottie-player')} value={controlsBG} onChange={val => setAttributes({ controlsBG: val })} defaultColor='#0000' />

                        <BColor label={__('Icons Color:', 'lottie-player')} value={controlsIconColor} onChange={val => setAttributes({ controlsIconColor: val })} defaultColor='#4527a4' />

                        <BColor label={__('Icons Hover Color:', 'lottie-player')} value={controlsIconHoverColor} onChange={val => setAttributes({ controlsIconHoverColor: val })} defaultColor='#8344c5' />

                        <BColor label={__('Icons Active Color:', 'lottie-player')} value={controlsIconActiveColor} onChange={val => setAttributes({ controlsIconActiveColor: val })} defaultColor='#8344c5' />

                        <BColor label={__('Track Color:', 'lottie-player')} value={controlsTrackColor} onChange={val => setAttributes({ controlsTrackColor: val })} defaultColor='#8344c5' />

                        <BColor label={__('Thumb Color:', 'lottie-player')} value={controlsThumbColor} onChange={val => setAttributes({ controlsThumbColor: val })} defaultColor='#4527a4' />
                    </PanelBody>
                </>}
            </>}</TabPanel>
        </InspectorControls>


        <BlockControls>
            <AlignmentToolbar value={playerAlign} onChange={val => setAttributes({ playerAlign: val })} describedBy={__('Player Alignment')} alignmentControls={[
                { title: __('Player in left', 'lottie-player'), align: 'left', icon: 'align-left' },
                { title: __('Player in center', 'lottie-player'), align: 'center', icon: 'align-center' },
                { title: __('Player in right', 'lottie-player'), align: 'right', icon: 'align-right' }
            ]} />
        </BlockControls>
    </>;
};
export default Settings;