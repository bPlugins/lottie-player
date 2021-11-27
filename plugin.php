<?php
/**
 * Plugin Name: Lottie Player- Gutenberg Block
 * Description: Lottie player for display lottie files.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: lottie-player
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'LPB_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
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
    protected static $_instance = null;

    function __construct(){
        add_action( 'enqueue_block_assets', [$this, 'enqueue_block_assets'] );
        add_action( 'init', [$this, 'register'] );
    }

    public static function instance(){
        if( self::$_instance === null ){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function enqueue_block_assets(){ wp_enqueue_script( 'fontAwesomeKit', LPB_ASSETS_DIR . 'js/font-awesome-kit.js', [], LPB_PLUGIN_VERSION, true ); }

    function register() {
        wp_register_script( 'lpb_editor_script', plugins_url( 'dist/editor.js', __FILE__ ), [ 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-element', 'wp-html-entities', 'wp-i18n', 'wp-rich-text', 'fontAwesomeKit' ], LPB_PLUGIN_VERSION, false ); // Backend Script
        wp_register_style( 'lpb_editor_style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], LPB_PLUGIN_VERSION ); // Backend Style
        wp_register_script( 'lpb_script', plugins_url( 'dist/script.js', __FILE__ ), [ 'jquery', 'fontAwesomeKit' ], LPB_PLUGIN_VERSION, true ); // Frontend Script
        wp_register_style( 'lpb_style', plugins_url( 'dist/style.css', __FILE__ ), [ 'wp-editor' ], LPB_PLUGIN_VERSION ); // Frontend Style

        register_block_type( 'lpb/lottie-player', [
            'editor_script' => 'lpb_editor_script',
            'editor_style'  => 'lpb_editor_style',
            'script'        => 'lpb_script',
            'style'         => 'lpb_style',
            'render_callback' => [$this, 'render']
        ] ); // Register Block
        
        wp_set_script_translations( 'lpb_editor_script', 'lottie-player', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
    }

    function render( $attributes ){
        extract( $attributes );
        $align = $align ?? '';
        $cId = $cId ?? '';
        $playerAlign = $playerAlign ?? 'center';
        $file = $file ?? 'https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json';
        $isControls = $isControls ?? true;
        $isAutoplay = $isAutoplay ?? true;
        $isLoop = $isLoop ?? true;
        $isHover = $isHover ?? false;
        $mode = $mode ?? 'normal';
        $count = $count ?? 0;
        $speed = $speed ?? 1;
        $intermission = $intermission ?? 0;
        $width = $width ?? '450px';
        $background = $background ?? '#0000';
        $controlsHeight = $controlsHeight ?? '35px';
        $controlsBG = $controlsBG ?? '#0000';
        $controlsIconColor = $controlsIconColor ?? '#4527a4';
        $controlsIconHoverColor = $controlsIconHoverColor ?? '#8344c5';
        $controlsIconActiveColor = $controlsIconActiveColor ?? '#8344c5';
        $controlsTrackColor = $controlsTrackColor ?? '#8344c5';
        $controlsThumbColor = $controlsThumbColor ?? '#4527a4';

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

        ob_start(); ?>
        <div class='wp-block-lpb-lottie-player <?php echo 'align' . esc_attr( $align ); ?>' id='lpbLottiePlayer-<?php echo esc_attr( $cId ); ?>' data-controls='<?php echo esc_attr( $jsonData ); ?>'>
            <style><?php echo wp_kses( $lottiePlayerStyle::renderStyle(), [] ); ?></style>

            <div class='lpbLottiePlayer'>
                <lottie-player
                    controls
                    autoplay
                    loop
                    mode='<?php echo esc_attr( $mode ); ?>'
                    background='<?php echo esc_attr( $background ); ?>'
                    count='<?php echo esc_attr( $count ); ?>'
                    speed='<?php echo esc_attr( $speed ); ?>'
                    direction='1'
                    intermission='<?php echo esc_attr( $intermission * 1000 ); ?>'
                    src='<?php echo esc_attr( $file ); ?>'
                >
                </lottie-player>
            </div>
        </div>
        <?php $lottiePlayerStyle::$styles = []; // Empty styles
        return ob_get_clean();
    } // Render
}
LPBLottiePlayer::instance();