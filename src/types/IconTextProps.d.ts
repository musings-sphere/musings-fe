interface IconTextProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The classes of the font icon
	 */
	fontIconClass: string;
	/**
	 * Source set for the responsive images
	 */
	color?: string;
	/**
	 * Title of the icon-text
	 */
	title: string;
	/**
	 * Additional properties to pass to the Icon component
	 */
	iconProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the Typography component
	 */
	typographyProps?: Record<any, unknown>;
	// All other props
	[x: string]: any;
}
