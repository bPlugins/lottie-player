<?php
/**
 * Plugin Name: Lottie Player - Block
 * Description: Lottie player for display lottie files.
 * Version: 1.0.3
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: lottie-player
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'LPB_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.3' );
define( 'LPB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Lottie Player
class LPBLottiePlayer{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'lpb-lottie-player-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], LPB_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'lpb-lottie-player-style', plugins_url( 'dist/style.css', __FILE__ ), [ 'wp-editor' ], LPB_PLUGIN_VERSION ); // Frontend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'lpb-lottie-player-editor-style',
			'style'				=> 'lpb-lottie-player-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block
		
		wp_set_script_translations( 'lpb-lottie-player-editor-script', 'lottie-player', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		ob_start(); ?>
		<div class='wp-block-lpb-lottie-player <?php echo 'align' . esc_attr( $align ); ?>' id='lpbLottiePlayer-<?php echo esc_attr( $cId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new LPBLottiePlayer;