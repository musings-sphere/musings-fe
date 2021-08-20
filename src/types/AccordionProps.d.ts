interface AccordionItemProps {
	id: number | string;
	title: string;
	subtitle: string;
	text: string;
	link: string;
}

interface AccordionProps {
	/**
	 * Classname from the parent component
	 */
	className?: string;
	/**
	 * Items to show inside the accordion
	 */
	items: Array<AccordionItemProps>;
	/**
	 * Additional properties to pass to the title Typography component
	 */
	titleProps?: Record<string, unknown>;
	/**
	 * Additional properties to pass to the subtitle Typography component
	 */
	subtitleProps?: Record<string, unknown>;
	/**
	 * Additional properties to pass to the text Typography component
	 */
	textProps?: Record<string, unknown>;
	/**
	 * Additional properties to pass to the link component
	 */
	linkProps?: Record<string, unknown>;
	// All other props
	[x: string]: any;
}
