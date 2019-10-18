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

export default PriceLevel;
