import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%',
	},
	dBlock: {
		display: 'block',
	},
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const CustomImage = ({
	src,
	srcSet,
	alt = '...',
	lazy = true,
	lazyProps = {
		width: 'auto',
		height: 'auto',
	},
	className,
	...rest
}: ImageProps): JSX.Element => {
	const classes = useStyles();
	if (lazy) {
		return (
			<LazyLoadImage
				className={clsx('image', classes.root, classes.dBlock, className)}
				alt={alt}
				src={src}
				srcSet={srcSet}
				effect="opacity"
				{...lazyProps}
				{...rest}
			/>
		);
	}

	return (
		<Image
			className={clsx('image', classes.root, className)}
			alt={alt}
			src={src}
			width={24}
			height={24}
			{...rest}
		/>
	);
};

export default CustomImage;
