<?php
/**
 * Initializes WooCommerce Blocks Extension.
 *
 * @package Woocommerce Blocks Extension
 */
/**
 * WC_Blocks_Extension Class.
 */
class WC_Blocks_Extension {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_frontend_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'register_editor_assets' ) );
	}

	public static function register_editor_assets() {
		wp_enqueue_script( 'wc-blocks-extension', plugins_url( 'build/index.js', __DIR__ ), array( 'wc-blocks-registry' ), '1.0.0', true );
		wp_enqueue_script( 'wc-blocks-extension-editor', plugins_url( 'build/editor.js', __DIR__ ), array( 'wc-blocks' ), '1.0.0', true );
	}

	public static function register_frontend_assets() {
		wp_enqueue_script( 'wc-blocks-extension', plugins_url( 'build/index.js', __DIR__ ), array( 'wc-blocks-registry' ), '1.0.0', true );
	}
}

new WC_Blocks_Extension();
