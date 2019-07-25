<?php
/**
 * Plugin Name: WooCommerce Blocks Extension
 * Author: Albert Juhé Lluveras
 * Author URI: https://github.com/Aljullu/
 * Text Domain: woocommerce-blocks-extension
 * Domain Path: /languages
 * Version: 1.0.0
 *
 * WC requires at least: 5.0
 * WC tested up to: 5.2
 *
 * @package WC_Blocks_Extension
 */
if ( ! defined( 'WC_BLOCKS_EXTENSION_ABSPATH' ) ) {
	define( 'WC_BLOCKS_EXTENSION_ABSPATH', dirname( __FILE__ ) . '/' );
}

/**
 * Calls the loader method
 *
 * @see WC_Blocks_Extension::__construct()
 */
function wc_blocks_extension_initialize() {
	require_once WC_BLOCKS_EXTENSION_ABSPATH . 'includes/class-wc-blocks-extension-loader.php';
}
add_action( 'woocommerce_loaded', 'wc_blocks_extension_initialize' );
