/** @format */
/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'woocommerce-blocks-review-data-before', 'woocommerce-blocks-extension', ( data ) => {
  return { ...data, rating: data.rating * 2 };
} );

addFilter( 'woocommerce-blocks-review-rating-template', 'woocommerce-blocks-extension', () => {
  return ( { rating } ) => ( <span>&nbsp;{ rating }/10</span> );
} );
