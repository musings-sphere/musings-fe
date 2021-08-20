interface NumberProps {
	number: string | number;
	title: string;
}

interface SwiperNumberProps {
	/**
	 * External classes
	 */
	className?: string;
	/**
	 * The array of numbers object which should consist of number and title
	 */
	items: Array<NumberProps>;
	/**
	 * The additional properties to pass to the number Typography component
	 */
	numberProps?: Record<any, unknown>;
	/**
	 * The additional properties to pass to the label Typography component
	 */
	labelProps?: Record<any, unknown>;
	// All other props
	[x: string]: any;
}
