import { registerBlockType, updateCategory } from '@wordpress/blocks';

import metadata from '../block.json';
import Edit from './Edit';
import './editor.scss';
import icons from './Const/icons';

// Update Block Category Icon
updateCategory('LPBlock', { icon: icons.lottie(20) });

registerBlockType(metadata, {
	icon: icons.lottie(24),

	// Build in Functions
	edit: Edit,

	save: () => null
});