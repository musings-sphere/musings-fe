import { makeStyles, useTheme } from '@material-ui/styles';
import {
	useMediaQuery,
	Button,
	Grid,
	Typography,
	Theme,
} from '@material-ui/core';
import { Image } from '@components/atoms';
import { SectionHeader } from '@components/molecules';

const useStyles = makeStyles((theme: Theme) => ({
	image: {
		[theme.breakpoints.down('lg')]: {
			maxWidth: 400,
		},
	},
	searchInputContainer: {
		background: theme.palette.alternate.main,
		padding: theme.spacing(2),
		boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
		borderRadius: theme.spacing(1),
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& .MuiOutlinedInput-notchedOutline': {
			border: '0 !important',
		},
		'& .MuiInputAdornment-positionStart': {
			marginRight: theme.spacing(2),
		},
		'& .MuiOutlinedInput-adornedStart': {
			paddingLeft: 0,
		},
		'& .MuiOutlinedInput-input': {
			padding: 0,
		},
		[theme.breakpoints.down('lg')]: {
			padding: theme.spacing(1),
		},
	},
	searchButton: {
		maxHeight: 45,
		minWidth: 135,
		[theme.breakpoints.down('lg')]: {
			minWidth: 'auto',
		},
	},
	tags: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	tag: {
		padding: theme.spacing(1 / 2, 1),
		borderRadius: theme.spacing(1 / 2),
		background: theme.palette.secondary.light,
		color: 'white',
		margin: theme.spacing(0, 1, 1, 0),
		cursor: 'pointer',
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(0, 2, 2, 0),
		},
	},
}));

// const tags = [
// 	'Design',
// 	'Product',
// 	'UI / UX',
// 	'UI Kit',
// 	'Raect',
// 	'Material UI',
// ];

const Hero = ({
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
			<Grid container justifyContent="space-between" spacing={isMd ? 4 : 2}>
				<Grid item xs={12} md={6} data-aos="fade-up">
					<SectionHeader
						title={
							<span>
								musings haven for all your{' '}
								<Typography component="span" variant="inherit" color="primary">
									thoughts and ideas.
								</Typography>
							</span>
						}
						subtitle="Sharing your amazing ideas and articles with the rest of the world."
						align={isMd ? 'left' : 'center'}
						disableGutter
						titleVariant="h3"
						ctaGroup={[
							<Button variant="contained" color="secondary" size="large">
								Share writing
							</Button>,
						]}
					/>
				</Grid>
				<Grid
					item
					container
					justifyContent="center"
					xs={12}
					md={6}
					data-aos="fade-up"
				>
					<Image
						src="https://assets.maccarianagency.com/the-front/illustrations/mobiles.svg"
						className={classes.image}
					/>
				</Grid>
				{/*<Grid item xs={12}>*/}
				{/*	<div className={classes.searchInputContainer} data-aos="fade-up">*/}
				{/*		<FormControl fullWidth variant="outlined">*/}
				{/*			<OutlinedInput*/}
				{/*				startAdornment={*/}
				{/*					<InputAdornment position="start">*/}
				{/*						<Icon*/}
				{/*							fontIconClass="fas fa-search"*/}
				{/*							fontIconColor={colors.blueGrey[900]}*/}
				{/*						/>*/}
				{/*					</InputAdornment>*/}
				{/*				}*/}
				{/*				placeholder="Search for the blog"*/}
				{/*			/>*/}
				{/*		</FormControl>*/}
				{/*		<Button*/}
				{/*			color="primary"*/}
				{/*			variant="contained"*/}
				{/*			size="large"*/}
				{/*			className={classes.searchButton}*/}
				{/*		>*/}
				{/*			Search*/}
				{/*		</Button>*/}
				{/*	</div>*/}
				{/*</Grid>*/}
				{/*<Grid item xs={12}>*/}
				{/*	<div className={classes.tags}>*/}
				{/*		{tags.map((item, index) => (*/}
				{/*			<Typography*/}
				{/*				variant="caption"*/}
				{/*				color="primary"*/}
				{/*				className={classes.tag}*/}
				{/*				key={index}*/}
				{/*			>*/}
				{/*				{item}*/}
				{/*			</Typography>*/}
				{/*		))}*/}
				{/*	</div>*/}
				{/*</Grid>*/}
			</Grid>
		</div>
	);
};

export default Hero;
