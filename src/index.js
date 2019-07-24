/** @format */
/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';

addFilter( 'woocommerce-blocks-review-data-before', 'woocommerce-blocks-extension', ( data ) => {
  return { ...data, rating: data.rating * 2 };
} );

addFilter( 'woocommerce-blocks-review-markup', 'woocommerce-blocks-extension', ( markup, data ) => {
  let filteredMarkup = markup.replace( '{{ review }}', '');
  filteredMarkup = filteredMarkup.replace( '</li>', '{{ review }}</li>' );
  return filteredMarkup;
} );

addFilter( 'woocommerce-blocks-review-rating-markup', 'woocommerce-blocks-extension', ( markup, data ) => {
  return `<b>&nbsp;${ data.rating }/10</b>`;
} );
