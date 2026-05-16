import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { TabPanel, PanelBody, TextControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { Label, ColorControl, HelpPanel, BBlocksAds, Notice } from '../../../../../bpl-tools/Components';
import { AdvertiseCard, PremiumBadge, PremiumPanel } from '../../../../../bpl-tools/ProControls';
import { pxUnit, perUnit, emUnit } from '../../../../../bpl-tools/utils/options';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { primaryColor, secondaryColor } from '../../../../../bpl-tools/utils/data';

import { generalStyleTabs } from '../../../utils/options';
import { pricingUrl } from '../../../utils/data';

const Settings = ({ attributes, setAttributes }) => {
	const { playerAlign, file, isControls, isAutoplay, isLoop, link, width, background, controlsHeight, controlsBG, controlsIconColor, controlsIconHoverColor, controlsIconActiveColor, controlsTrackColor, controlsThumbColor } = attributes;

	const panelBodyIF = {
		className: 'bPlPanelBody',
		initialOpen: false
	}

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>


			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug='embed-lottie-player' docsLink='https://bplugins.com/docs/lottie-player' />


					<PanelBody className='bPlPanelBody' title={__('Player', 'embed-lottie-player')}>
						<Label className='mb5'>{__('Lottie file url:', 'embed-lottie-player')}</Label>
						<TextControl value={file} onChange={val => setAttributes({ file: val })} />
						<small>{__('Support only .json or .lottie file!', 'embed-lottie-player')}</small>

						<ToggleControl className='mt20' label={__('Show Controls', 'embed-lottie-player')} checked={isControls} onChange={val => setAttributes({ isControls: val })} />

						<ToggleControl className='mt10' label={__('Enable Autoplay', 'embed-lottie-player')} checked={isAutoplay} onChange={val => setAttributes({ isAutoplay: val })} />

						<ToggleControl className='mt10' label={__('Enable Loop', 'embed-lottie-player')} checked={isLoop} onChange={val => setAttributes({ isLoop: val })} />

						<Label>{__('Link the player:', 'embed-lottie-player')}</Label>
						<TextControl value={link} onChange={val => setAttributes({ link: val })} />
						<small>{__('If you want to link the player, enter the link here. Otherwise, leave as blank.', 'embed-lottie-player')}</small>

						<Notice status='premium' isIcon={true}>{__('Unlock hover play, bounce mode, reverse direction, speed, count, interval and open link in new tab with Premium version.', 'embed-lottie-player')}</Notice>
					</PanelBody>


					<PanelBody title={<>{__('Interactivity', 'embed-lottie-player')}<PremiumBadge /></>} {...panelBodyIF}>
						<PremiumPanel title={__('Lottie Interactivity', 'embed-lottie-player')} description={__('Trigger animations on scroll, cursor move, click, or viewport entry — 8 interaction modes for immersive, scroll-synced & cursor-driven experiences.', 'embed-lottie-player')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={<>
						{__('Caption', 'embed-lottie-player')}
						<PremiumBadge />
					</>} {...panelBodyIF}>
						<PremiumPanel title={__('Lottie Caption', 'embed-lottie-player')} description={__('Add engaging captions to your animations — control text, alignment, typography, colors & spacing to match your brand.', 'embed-lottie-player')} pricingUrl={pricingUrl} />
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Player', 'embed-lottie-player')}>
						<UnitControl label={__('Width:', 'embed-lottie-player')} labelPosition='left' value={width} onChange={val => setAttributes({ width: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<ColorControl label={__('Background Color:', 'embed-lottie-player')} value={background} onChange={val => setAttributes({ background: val })} defaultColor='#0000' />
					</PanelBody>


					{isControls && <PanelBody title={__('Controls', 'embed-lottie-player')}{...panelBodyIF}>
						<UnitControl label={__('Height:', 'embed-lottie-player')} labelPosition='left' value={controlsHeight} onChange={val => setAttributes({ controlsHeight: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<ColorControl label={__('Background Color:', 'embed-lottie-player')} value={controlsBG} onChange={val => setAttributes({ controlsBG: val })} defaultColor='#0000' />

						<ColorControl label={__('Icons Color:', 'embed-lottie-player')} value={controlsIconColor} onChange={val => setAttributes({ controlsIconColor: val })} defaultColor={primaryColor} />

						<ColorControl label={__('Icons Hover Color:', 'embed-lottie-player')} value={controlsIconHoverColor} onChange={val => setAttributes({ controlsIconHoverColor: val })} defaultColor={secondaryColor} />

						<ColorControl label={__('Icons Active Color:', 'embed-lottie-player')} value={controlsIconActiveColor} onChange={val => setAttributes({ controlsIconActiveColor: val })} defaultColor={secondaryColor} />

						<ColorControl label={__('Track Color:', 'embed-lottie-player')} value={controlsTrackColor} onChange={val => setAttributes({ controlsTrackColor: val })} defaultColor={secondaryColor} />

						<ColorControl label={__('Thumb Color:', 'embed-lottie-player')} value={controlsThumbColor} onChange={val => setAttributes({ controlsThumbColor: val })} defaultColor={primaryColor} />
					</PanelBody>}
				</>}
			</>}</TabPanel>


			<AdvertiseCard planLink={pricingUrl} />
		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={playerAlign} onChange={val => setAttributes({ playerAlign: val })} describedBy={__('Player Alignment')} alignmentControls={[
				{ title: __('Player in left', 'embed-lottie-player'), align: 'left', icon: 'align-left' },
				{ title: __('Player in center', 'embed-lottie-player'), align: 'center', icon: 'align-center' },
				{ title: __('Player in right', 'embed-lottie-player'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};
export default withSelect((select) => {
	return {
		currentPostId: select('core/editor').getCurrentPostId()
	};
})(Settings);