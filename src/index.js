import { registerBlockType, updateCategory } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { lottieIcon } from './utils/icons';

// Update Block Category Icon
updateCategory('LPBlock', { icon: lottieIcon(20) });

registerBlockType(metadata, {
	icon: lottieIcon(24),

	// Build in Functions
	edit: Edit,

	save: () => null
});