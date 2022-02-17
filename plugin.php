<?php
/**
 * Plugin Name: Lottie Player- Gutenberg Block
 * Description: Lottie player for display lottie files.
 * Version: 1.0.2
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: lottie-player
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'LPB_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.2' );
define( 'LPB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Generate Styles
class LPBStyleGenerator {
    public static $styles = [];
    public static function addStyle( $selector, $styles ){
        if( array_key_exists( $selector, self::$styles ) ){
           self::$styles[$selector] = wp_parse_args( self::$styles[$selector], $styles );
        }else { self::$styles[$selector] = $styles; }
    }
    public static function renderStyle(){
        $output = '';
        foreach( self::$styles as $selector => $style ){
            $new = '';
            foreach( $style as $property => $value ){
                if( $value == '' ){ $new .= $property; }else { $new .= " $property: $value;"; }
            }
            $output .= "$selector { $new }";
        }
        return $output;
    }
}

// Lottie Player
class LPBLottiePlayer{
    function __construct(){
        add_action( 'init', [$this, 'onInit'] );
    }

    function onInit() {
        wp_register_style( 'lpb-lottie-player-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], LPB_PLUGIN_VERSION ); // Backend Style
        wp_register_style( 'lpb-lottie-player-style', plugins_url( 'dist/style.css', __FILE__ ), [ 'wp-editor' ], LPB_PLUGIN_VERSION ); // Frontend Style

        register_block_type( __DIR__, [
            'editor_style'  => 'lpb-lottie-player-editor-style',
            'style'         => 'lpb-lottie-player-style',
            'render_callback' => [$this, 'render']
        ] ); // Register Block
        
        wp_set_script_translations( 'lpb-lottie-player-editor-script', 'lottie-player', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
    }

    function render( $attributes ){
        extract( $attributes );

        // Generate Styles
        $lottiePlayerStyle = new LPBStyleGenerator();
        $lottiePlayerStyle::addStyle( "#lpbLottiePlayer-$cId .lpbLottiePlayer", [
            'text-align' => $playerAlign
        ] );
        $lottiePlayerStyle::addStyle( "#lpbLottiePlayer-$cId .lpbLottiePlayer lottie-player", [
            'width' => $width,
            '--lottie-player-toolbar-height' => $controlsHeight,
            '--lottie-player-toolbar-background-color' => $controlsBG,
            '--lottie-player-toolbar-icon-color' => $controlsIconColor,
            '--lottie-player-toolbar-icon-hover-color' => $controlsIconHoverColor,
            '--lottie-player-toolbar-icon-active-color' => $controlsIconActiveColor,
            '--lottie-player-seeker-track-color' => $controlsTrackColor,
            '--lottie-player-seeker-thumb-color' => $controlsThumbColor
        ] );

        $jsonData = wp_json_encode( [ 'isControls' => $isControls, 'isAutoplay' => $isAutoplay, 'isLoop' => $isLoop, 'isHover' => $isHover ] );

        $intermissionMS = $intermission * 1000;
        $lottiePlayer = "<lottie-player
                controls
                autoplay
                loop
                mode='$mode'
                background='$background'
                count='$count'
                speed='$speed'
                direction='1'
                intermission='$intermissionMS'
                src='$file'
            ></lottie-player>";

        ob_start(); ?>
        <div class='wp-block-lpb-lottie-player <?php echo 'align' . esc_attr( $align ); ?>' id='lpbLottiePlayer-<?php echo esc_attr( $cId ); ?>' data-controls='<?php echo esc_attr( $jsonData ); ?>'>
            <style><?php echo wp_kses( $lottiePlayerStyle::renderStyle(), [] ); ?></style>

            <?php echo $link ? "<div class='lpbLottiePlayer'>
                <a href='". esc_url( $link ) ."'>". wp_kses( $lottiePlayer, [
                    'lottie-player' => [
                        'controls' => [], 'autoplay' => [], 'loop' => [], 'mode' => [], 'background' => [], 'count' => [], 'speed' => [], 'direction' => [], 'intermission' => [], 'src' => []
                    ]
                ] ) ."</a>
            </div>" : "<div class='lpbLottiePlayer'>". wp_kses( $lottiePlayer, [
                'lottie-player' => [
                    'controls' => [], 'autoplay' => [], 'loop' => [], 'mode' => [], 'background' => [], 'count' => [], 'speed' => [], 'direction' => [], 'intermission' => [], 'src' => []
                ]
            ] ) ."</div>"; ?>
        </div>
        <?php $lottiePlayerStyle::$styles = []; // Empty styles
        return ob_get_clean();
    } // Render
}
new LPBLottiePlayer;