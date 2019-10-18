/** @format */
/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { mainBlock, blockName } from './config';
import PriceLevel from './price-level';

const { registerInnerBlock } = wc.wcBlocksRegistry;

registerInnerBlock( {
	main: mainBlock,
	blockName,
	component: PriceLevel,
} );
