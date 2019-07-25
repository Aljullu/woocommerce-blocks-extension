/** @format */
/**
 * External dependencies
 */
import { addAction, addFilter } from '@wordpress/hooks';

addFilter( 'woocommerce-blocks-review-args', 'woocommerce-blocks-extension', ( data ) => {
	return { ...data, rating: data.rating * 2 };
} );

addAction( 'woocommerce-blocks-before-review', 'woocommerce-blocks-extension', ( template, args, context ) => {
	console.log( `Starting to generate the template for review ${ context.review.id }` );
} );

addAction( 'woocommerce-blocks-after-review', 'woocommerce-blocks-extension', ( template, args, context ) => {
	console.log( `Review ${ context.review.id } template ready` );
} );

addFilter( 'woocommerce-blocks-review-rating-template', 'woocommerce-blocks-extension', () => {
	return ( { rating } ) => ( <span>&nbsp;{ rating }/10</span> );
} );
