interface DescriptionCtaProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Title of the list
	 */
	title: string;
	/**
	 * Subtitle of the list
	 */
	subtitle?: string;
	/**
	 * Primary CTA of the list
	 */
	primaryCta?: JSX.Element;
	/**
	 * Secondary CTA of the list
	 */
	secondaryCta?: JSX.Element;
	/**
	 * Alignment
	 */
	align?: 'left' | 'right' | 'center';
	/**
	 * Additional properties to pass to the wrapper Grid item components
	 */
	wrapperProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the title Typography components
	 */
	titleProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the subtitle Typography components
	 */
	subtitleProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the button group div container
	 */
	buttonGroupProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the primary button wrapper div container
	 */
	primaryButtonWrapperProps?: Record<any, unknown>;
	/**
	 * Additional properties to pass to the secondary button wrapper div container
	 */
	secondaryButtonWrapperProps?: Record<any, unknown>;
	// All other props
	[x: string]: any;
}
