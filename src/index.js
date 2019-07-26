/** @format */
/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
const { PanelBody, ToggleControl } = wp.components;

const isALlowedBlock = ( name ) => {
	return name.startsWith( 'woocommerce/' ) || name === 'core/paragraph';
};

addFilter(
	'blocks.registerBlockType',
	'woocommerce-blocks-extension',
	( settings ) => {
		if ( isALlowedBlock( settings.name ) ) {
			settings.attributes = Object.assign( settings.attributes, {
				withoutLoremIpsumClass: {
					type: 'boolean',
					default: true,
				},
			});
		}

		return settings;
	},
);

addFilter(
	'editor.BlockEdit',
	'woocommerce-blocks-extension',
	createHigherOrderComponent( ( BlockEdit ) => {
		return ( props ) => {
			const {
				name,
				attributes,
				setAttributes,
				isSelected,
			} = props;

			const {
				withoutLoremIpsumClass,
			} = attributes;

			return (
				<Fragment>
					<BlockEdit {...props} />
					{ isALlowedBlock( name ) && isSelected &&
						<InspectorAdvancedControls>
							<ToggleControl
								label={ __( 'Remove lorem-ipsum class' ) }
								checked={ !! withoutLoremIpsumClass }
								onChange={ () => setAttributes( {  withoutLoremIpsumClass: ! withoutLoremIpsumClass } ) }
								help={ !! withoutLoremIpsumClass ? __( 'Hidden lorem-ipsum class.' ) : __( 'Showing lorem-ipsum class.' ) }
							/>
						</InspectorAdvancedControls>
					}
				</Fragment>
			);
		};
	}, 'withAdvancedControls'),
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'woocommerce-blocks-extension',
	( extraProps, blockType, attributes ) => {
		const { withoutLoremIpsumClass } = attributes;

		if ( isALlowedBlock( blockType.name ) && typeof withoutLoremIpsumClass !== 'undefined' && ! withoutLoremIpsumClass ) {
			extraProps.className = [ extraProps.className, 'lorem-ipsum' ].join( ' ' );
		}

		return extraProps;
	},
);
