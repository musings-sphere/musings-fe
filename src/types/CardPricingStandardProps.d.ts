interface CardPricingStandardProps {
	/**
	 *  External classes
	 */
	className?: string;
	/**
	 * Title of the pricing card
	 */
	title: string;
	/**
	 *  Subtitle of the pricing card
	 */
	subtitle?: string;
	/**
	 * The pricing component of the pricing card
	 */
	priceComponent: JSX.Element;
	/**
	 * The features check component of the pricing card
	 */
	featureCheckComponent?: JSX.Element;
	/**
	 * Features array of the pricing card
	 */
	features?: Array<any>;
	/**
	 *  CTA button of the pricing card
	 */
	cta: JSX.Element;
	/**
	 * Disclaimer of the pricing card
	 */
	disclaimer?: string;
	/**
	 * Additional props to pass to the title Typography component
	 */
	titleProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the subtitle Typography component
	 */
	subtitleProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the disclaimer Typography component
	 */
	disclaimerProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the feature title Typography component
	 */
	featureTitleProps?: Record<string, unknown>;
	// All other props
	[x: string]: any;
}
