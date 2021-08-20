import { makeStyles, useTheme } from '@material-ui/styles';
import {
	useMediaQuery,
	ImageList,
	ImageListItem,
	Theme,
} from '@material-ui/core';
import { Image } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => ({
	image: {
		objectFit: 'cover',
		borderRadius: theme.spacing(1),
	},
}));

const Gallery = ({
	data,
	className,
	...rest
}: ViewComponentProps): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={className} {...rest}>
			<SectionHeader
				title="Checkout our gallery"
				subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
				data-aos="fade-up"
			/>
			<ImageList cols={4} gap={4}>
				{data.map((item: any) => (
					<ImageListItem key={fancyId()} cols={isMd ? item.cols : 4 || 1}>
						<Image
							{...item.image}
							alt={item.location}
							className={classes.image}
							lazyProps={{
								width: '100%',
								height: '100%',
							}}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};

export default Gallery;
