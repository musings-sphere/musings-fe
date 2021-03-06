import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, Theme } from '@material-ui/core';
import { Section } from '@components/organisms';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	hero: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		maxWidth: theme.layout.contentWidth,
		margin: '0 auto',
		[theme.breakpoints.down('xl')]: {
			flexDirection: 'column-reverse',
		},
	},
	heroLeftSide: {
		[theme.breakpoints.down('xl')]: {
			padding: theme.spacing(3, 8),
		},
		[theme.breakpoints.down('lg')]: {
			padding: theme.spacing(3, 2),
		},
	},
	heroRightSide: {
		maxWidth: '50%',
		flex: '0 0 50%',
		position: 'relative',
		[theme.breakpoints.down('xl')]: {
			maxWidth: '100%',
			flex: '0 0 100%',
			height: '300px',
		},
	},
	heroCover: {
		position: 'relative',
		width: '50vw',
		height: '100%',
		[theme.breakpoints.down('xl')]: {
			width: '100%',
		},
	},
	heroImageContainer: {
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	heroImage: {
		position: 'absolute',
		left: '0%',
		width: '100%',
		height: '100%',
		[theme.breakpoints.up('md')]: {
			shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
			clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
		},
	},
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = ({
	leftSide,
	rightSide,
	className,
	...rest
}: HeroShapedProps): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
			<div className={clsx('hero-shaped__wrapper', classes.hero)}>
				<Section
					className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
				>
					{leftSide}
				</Section>
				<div
					className={clsx('hero-shaped__right-side', classes.heroRightSide)}
				>
					<div className={clsx('hero-shaped__cover', classes.heroCover)}>
						<div
							className={clsx(
								'hero-shaped__image-container',
								classes.heroImageContainer
							)}
						>
							<div className={clsx('hero-shaped__image', classes.heroImage)}>
								{rightSide}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Divider />
		</div>
	);
};

export default HeroShaped;
