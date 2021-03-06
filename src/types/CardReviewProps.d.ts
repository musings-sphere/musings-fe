interface CardReviewProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Icon to show inside the review card
	 */
	icon: JSX.Element;
	/**
	 * Review text to show inside the review card
	 */
	text: string;
	/**
	 * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
	 */
	authorPhoto: Record<string, unknown>;
	/**
	 * Reviewer name to show inside the review card
	 */
	authorName: string;
	/**
	 * Reviewer title to show inside the review card
	 */
	authorTitle?: string;
	/**
	 * Alignment of the content
	 */
	align?: 'left' | 'right' | 'center';
	/**
	 * Review text variant
	 */
	textVariant?:
		| 'inherit'
		| 'button'
		| 'overline'
		| 'caption'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| undefined;
	/**
	 * Additional props to pass to the text Typography component
	 */
	textProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the list item primary text Typography component
	 */
	listItemPrimaryTypographyProps?: Record<string, unknown>;
	/**
	 * Additional props to pass to the list item secondary text Typography component
	 */
	listItemSecondaryTypographyProps?: Record<string, unknown>;
	// All other props
	[x: string]: any;
}
