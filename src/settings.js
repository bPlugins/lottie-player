import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, __experimentalUnitControl as UnitControl, TextControl, TabPanel, Dashicon, Modal, SelectControl } from '@wordpress/components';

// Settings Components
import Title from '../../Components/Title';
import BColor from '../../Components/BColor';

import options from './Const/options';
const { interactivities, generalStyleTabs, pxUnit, perUnit, emUnit } = options;

const Settings = ({ attributes, setAttributes }) => {
	const { playerAlign, file, isControls, isAutoplay, isLoop, link, width, background, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor } = attributes;

	const [isProModal, setIsProModal] = useState(false);

	const ProTitle = ({ className, label }) => <Title><span className={`lpbMutedText ${className}`}>{label}</span> <span className='lpbUpgradePro' onClick={() => setIsProModal(true)}>{__('Pro', 'lottie-player')}</span></Title>

	const ProToggle = ({ className, label, checked }) => <ToggleControl className={`lpbUpgradeProToggle ${className}`} label={<><span className='lpbMutedText'>{label}</span> <span className='lpbUpgradePro'>{__('Pro', 'lottie-player')}</span></>} checked={checked} onChange={() => setIsProModal(true)} />

	const ProSelect = ({ className, label, options }) => <>
		<ProTitle label={label} />
		<SelectControl className={`lpbUpgradeProSelect ${className}`} onChange={() => setIsProModal(true)} options={options}>
		</SelectControl>
	</>

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' == tab.name && <>
					<PanelBody className='bPlPanelBody help' title={__('Help', 'lottie-player')}>
						<div className='helpItem'>
							<a href='https://lpb.bplugins.com/docs/' target='_blank' rel='noreferrer'><Dashicon icon='book' size={23} />{__('Read Documentation', 'lottie-player')}</a>
						</div>

						<div className='helpItem rateUs'>
							<a href='https://wordpress.org/support/plugin/embed-lottie-player/reviews/#new-post' target='_blank' rel='noreferrer'>
								<span><Dashicon icon='star-filled' size={23} />{__('Would you please rate us?', 'lottie-player')}</span>
								<span>{__('We are new and we need your help to grow!🙏', 'lottie-player')}</span>
							</a>
						</div>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Player Settings', 'lottie-player')}>
						<Title mt='0'>{__('Lottie Json file url:', 'lottie-player')}</Title>
						<TextControl value={file} onChange={val => setAttributes({ file: val })} />

						<ToggleControl className='mt20' label={__('Show Controls', 'lottie-player')} checked={isControls} onChange={val => setAttributes({ isControls: val })} />

						<ToggleControl label={__('Enable Autoplay', 'lottie-player')} checked={isAutoplay} onChange={val => setAttributes({ isAutoplay: val })} />

						<ToggleControl label={__('Enable Loop', 'lottie-player')} checked={isLoop} onChange={val => setAttributes({ isLoop: val })} />

						<ProToggle label={__('Enable Hover', 'lottie-player')} checked={false} />
						<ProTitle label={__('Mode:', 'lottie-player')} />
						<ProTitle label={__('Direction:', 'lottie-player')} />
						<ProTitle label={__('Count:', 'lottie-player')} />
						<ProTitle label={__('Speed:', 'lottie-player')} />
						<ProTitle label={__('Interval:', 'lottie-player')} />
						{/* <ToggleControl label={__('Enable Hover', 'lottie-player')} checked={isHover} onChange={val => setAttributes({ isHover: val })} />

						<PanelRow className='mt20'>
							<Title mt='0' mb='0'>{__('Mode:', 'lottie-player')}</Title>
							<BtnGroup value={mode} onChange={val => setAttributes({ mode: val })} options={modes} />
						</PanelRow>

						<Title>{__('Count (Set 0 to infinite):', 'lottie-player')}</Title>
						<RangeControl value={count} onChange={val => setAttributes({ count: val })} min={0} max={50} step={1} />

						<Title>{__('Speed:', 'lottie-player')}</Title>
						<RangeControl value={speed} onChange={val => setAttributes({ speed: val })} min={0.01} max={20} step={.01} />

						<Title>{__('Interval (s):', 'lottie-player')}</Title>
						<RangeControl value={intermission} onChange={val => setAttributes({ intermission: val })} min={0} max={20} step={.01} /> */}

						<Title>{__('Link the player:', 'lottie-player')}</Title>
						<TextControl value={link} onChange={val => setAttributes({ link: val })} />
						<small>{__('If you want to link the player, enter the link here. Otherwise, leave as blank.')}</small>

						<ProToggle label={__('Open link in new tab', 'lottie-player')} checked={false} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Interactivity', 'lottie-player')} initialOpen={false}>
						<ProSelect label={__('Interactivity:', 'lottie-player')} options={interactivities} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Caption', 'lottie-player')} initialOpen={false}>
						<ProToggle label={__('Show Caption', 'lottie-player')} checked={true} />

						<ProTitle label={__('Text:', 'lottie-player')} />
					</PanelBody>
				</>}


				{'style' == tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Player', 'lottie-player')}>
						<UnitControl label={__('Width:', 'lottie-player')} labelPosition='left' value={width} onChange={val => setAttributes({ width: val })} units={[pxUnit, perUnit, emUnit]} />

						<BColor label={__('Background Color:', 'lottie-player')} value={background} onChange={val => setAttributes({ background: val })} defaultColor='#0000' />
					</PanelBody>


					{isControls && <PanelBody className='bPlPanelBody' title={__('Controls', 'lottie-player')} initialOpen={false}>
						<UnitControl label={__('Height:', 'lottie-player')} labelPosition='left' value={controlsHeight} onChange={val => setAttributes({ controlsHeight: val })} units={[pxUnit, perUnit, emUnit]} />

						<BColor label={__('Background Color:', 'lottie-player')} value={controlsBG} onChange={val => setAttributes({ controlsBG: val })} defaultColor='#0000' />

						<BColor label={__('Icons Color:', 'lottie-player')} value={controlsIconColor} onChange={val => setAttributes({ controlsIconColor: val })} defaultColor='#4527a4' />

						<BColor label={__('Icons Hover Color:', 'lottie-player')} value={controlsIconHoverColor} onChange={val => setAttributes({ controlsIconHoverColor: val })} defaultColor='#8344c5' />

						<BColor label={__('Icons Active Color:', 'lottie-player')} value={controlsIconActiveColor} onChange={val => setAttributes({ controlsIconActiveColor: val })} defaultColor='#8344c5' />

						<BColor label={__('Track Color:', 'lottie-player')} value={controlsTrackColor} onChange={val => setAttributes({ controlsTrackColor: val })} defaultColor='#8344c5' />

						<BColor label={__('Thumb Color:', 'lottie-player')} value={controlsThumbColor} onChange={val => setAttributes({ controlsThumbColor: val })} defaultColor='#4527a4' />
					</PanelBody>}


					<PanelBody className='bPlPanelBody' title={__('Caption', 'lottie-player')} initialOpen={false}>
						<ProTitle label={__('Text Align:', 'lottie-player')} />
						<ProTitle label={__('Typography:', 'lottie-player')} />
						<ProTitle label={__('Colors(text and background):', 'lottie-player')} />
						<ProTitle label={__('Padding:', 'lottie-player')} />
						<ProTitle label={__('Margin:', 'lottie-player')} />
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


		{isProModal && <Modal title={__('Upgrade To Pro', 'lottie-player')} onRequestClose={() => setIsProModal(false)}>
			<p className='lpbUpgradeProText'>{__('To unlock the features, upgrade to Pro')}</p>

			<a className='lpbUpgradeProLearnMore' href='https://lpb.bplugins.com/' target='_blank' rel='noreferrer'>{__('Learn More', 'lottie-player')}</a>
		</Modal>}
	</>;
};
export default Settings;