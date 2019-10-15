/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';
import Gridicon from 'gridicons';

addFilter( 'woocommerce_blocks_all_products_children', 'woocommerce-admin-extensions-examples', ( components ) => {
	components[ 'woocommerce-blocks-extension/price-level' ] = PriceLevel;
	return components;
} );


const PriceLevel = ( { product = {} } ) => {
	if ( ! product.prices ) {
		return null;
	}

	const { price } = product.prices;
	if ( price >= 45 ) {
		return '$$$';
	}
	if ( price <= 15 ) {
		return '$';
	}
	return '$$';
};


const blockConfig = {
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

registerBlockType( 'woocommerce-blocks-extension/price-level', {
	...blockConfig,
} );
