interface CardJobMinimalProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Job title of the card
	 */
	title: string;
	/**
	 * Job subtitle of the card
	 */
	subtitle: string;
	/**
	 * Should show arrow or not
	 */
	showArrow?: boolean;
	/**
	 * Additional props to pass to the title Typography component
	 */
	titleProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the subtitle Typography component
	 */
	subtitleProps?: Record<string, unknown>;
	// All other props
	[x: string]: any;
}
