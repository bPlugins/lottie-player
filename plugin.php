<?php
/**
 * Plugin Name: Lottie Player - Block Old
 * Description: Lottie player for display lottie files.
 * Version: 1.0.8
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: lottie-player
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'LPB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.8' );
define( 'LPB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Lottie Player
class LPBLottiePlayer{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
		register_activation_hook( __FILE__, [$this, 'onPluginActivate'] );

		if ( version_compare( $GLOBALS['wp_version'], '5.8-alpha-1', '<' ) ) {
			add_filter( 'block_categories', [$this, 'blockCategories'] );
		} else { add_filter( 'block_categories_all', [$this, 'blockCategories'] ); }
	}

	function onPluginActivate(){
		if ( is_plugin_active( 'lottie-player-pro/plugin.php' ) ){
			deactivate_plugins( 'lottie-player-pro/plugin.php' );
		}
	}

	function blockCategories( $categories ){
		return array_merge( [[
			'slug'	=> 'LPBlock',
			'title'	=> 'Lottie Player Block',
		] ], $categories );
	} // Categories

	function enqueueBlockAssets(){
		wp_enqueue_script( 'lottiePlayer', LPB_ASSETS_DIR . 'js/lottie-player.js', [], '1.5.7', true );
	}

	function onInit() {
		wp_register_style( 'lpb-lottie-player-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'lpb-lottie-player-style' ], LPB_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'lpb-lottie-player-style', plugins_url( 'dist/style.css', __FILE__ ), [], LPB_PLUGIN_VERSION ); // Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'lpb-lottie-player-editor-style',
			'style'				=> 'lpb-lottie-player-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block
		
		wp_set_script_translations( 'lpb-lottie-player-editor-script', 'lottie-player', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		$className = $className ?? '';
		$blockClassName = 'wp-block-lpb-lottie-player ' . $className . ' align' . $align;

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='lpbLottiePlayer-<?php echo esc_attr( $cId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new LPBLottiePlayer;