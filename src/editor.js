/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { blockName, blockConfig } from './config';

const { getCategories, registerBlockType, setCategories } = wp.blocks;

registerBlockType( blockName, blockConfig );
