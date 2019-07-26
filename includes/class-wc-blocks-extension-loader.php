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
	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'register_assets' ) );
	}

	public static function register_assets() {
		wp_enqueue_script( 'wc-blocks-extension', plugins_url( 'build/index.js', __DIR__ ), array( 'wc-blocks' ), '1.0.0', true );
	}
}

new WC_Blocks_Extension();
