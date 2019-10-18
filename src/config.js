/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import Gridicon from 'gridicons';
import PriceLevel from './price-level';

export const mainBlock = 'woocommerce/all-products';

export const blockName = 'woocommerce-blocks-extension/product-price-level';

export const blockConfig = {
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	supports: {
		html: false,
	},
	parent: [ 'woocommerce/all-products' ],
	title: __( 'Product Price Level', 'woo-gutenberg-products-block' ),
	description: __(
		'Display the price level of a product.',
		'woo-gutenberg-products-block'
	),
	icon: {
		src: <Gridicon icon="money" />,
		foreground: '#96588a',
	},
	edit() {
		const examplePrice = { prices: { price: 30 } };

		return <PriceLevel product={ examplePrice }/>;
	},
};
