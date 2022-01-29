import { registerBlockType } from '@wordpress/blocks';

// Import Files
import Edit from './edit';
import './editor.scss';

// Icon
import icons from './Const/icons';

// Metadata
import metadata from '../block.json';

registerBlockType(metadata, {
    icon: icons.lottie,

    // Build in Functions
    edit: Edit,

    save: () => null
});