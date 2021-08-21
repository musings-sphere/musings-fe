interface BlogProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * Review text to show inside the review card
	 */
	title: string;
	/**
	 * Review text to show inside the review card
	 */
	subtitle: string;
	/**
	 * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
	 */
	author: {
		name: string;
		photo: string;
	};
	date: Date;
	tags?: string[];
	// All other props
	[x: string]: any;
}
