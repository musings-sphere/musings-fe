import { makeStyles, useTheme } from '@material-ui/styles';
import {
	colors,
	useMediaQuery,
	FormControl,
	OutlinedInput,
	InputAdornment,
	Button,
	Avatar,
	Typography,
	Grid,
	Divider,
	Theme,
} from '@material-ui/core';
import { Icon, Image } from '@components/atoms';
import { CardProduct, Section, SectionAlternate } from '@components/organisms';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => ({
	pagePaddingTop: {
		padding: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
		},
	},
	sectionAlternate: {
		'& .section-alternate__content': {
			padding: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(5),
				paddingBottom: theme.spacing(5),
			},
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
	cardProduct: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		borderRadius: theme.spacing(1),
		'& .card-product__content': {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
	},
	image: {
		objectFit: 'cover',
		borderRadius: theme.spacing(0, 0, 20, 0),
	},
	blogContent: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	list: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	avatarContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		marginRight: theme.spacing(1),
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	button: {
		minWidth: '100%',
		maxWidth: '100%',
		[theme.breakpoints.up('sm')]: {
			minWidth: 420,
		},
	},
	answerCount: {
		padding: theme.spacing(1 / 2, 1),
		borderRadius: theme.spacing(1),
		background: theme.palette.secondary.light,
		color: 'white',
		fontWeight: 300,
	},
}));

const Result = ({
	data,
	className,
	...rest
}: ViewComponentProps): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const BlogMediaContent = (props: ImageProps) => (
		<Image
			{...props}
			className={classes.image}
			lazyProps={{ width: '100%', height: '100%' }}
		/>
	);

	const BlogContent = ({
		title,
		subtitle,
		date,
		author: { name, photo },
	}: BlogProps) => (
		<div className={classes.blogContent}>
			<Typography variant="h6" color="textPrimary" gutterBottom>
				{title}
			</Typography>
			<Typography variant="body1" color="textSecondary">
				{subtitle}
			</Typography>
			<div style={{ flexGrow: 1 }} />
			<Divider className={classes.divider} />
			<div className={classes.list}>
				<div className={classes.avatarContainer}>
					<Avatar {...photo} className={classes.avatar} />
					<Typography variant="body2" color="textPrimary">
						{name}
					</Typography>
				</div>
				<Typography variant="overline" color="textSecondary">
					{date}
				</Typography>
			</div>
		</div>
	);

	return (
		<div className={className} {...rest}>
			<Section className={classes.pagePaddingTop}>
				<div className={classes.searchInputContainer} data-aos="fade-up">
					<FormControl fullWidth variant="outlined">
						<OutlinedInput
							startAdornment={
								<InputAdornment position="start">
									<Icon
										fontIconClass="fas fa-search"
										fontIconColor={colors.blueGrey[900]}
									/>
								</InputAdornment>
							}
							placeholder="Search for the blog"
						/>
					</FormControl>
					<Button
						color="primary"
						variant="contained"
						size="large"
						className={classes.searchButton}
					>
						Search
					</Button>
				</div>
			</Section>
			<SectionAlternate className={classes.sectionAlternate}>
				<Grid container spacing={isMd ? 4 : 2}>
					<Grid item xs={12} container>
						<Typography variant="body1" className={classes.answerCount}>
							85 Result Found
						</Typography>
					</Grid>
					{data.map(
						(item: {
							cover: JSX.IntrinsicAttributes & ImageProps;
							title: string;
							subtitle: string;
							author: { name: string; photo: string };
							date: Date;
						}) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={fancyId()}
								data-aos="fade-up"
							>
								<CardProduct
									withShadow
									liftUp
									className={classes.cardProduct}
									mediaContent={
										<BlogMediaContent {...item.cover} alt={item.title} />
									}
									cardContent={
										<BlogContent
											title={item.title}
											subtitle={item.subtitle}
											author={item.author}
											date={item.date}
										/>
									}
								/>
							</Grid>
						)
					)}
					<Grid item xs={12} container justifyContent="center">
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.button}
						>
							Load more
						</Button>
					</Grid>
				</Grid>
			</SectionAlternate>
		</div>
	);
};

export default Result;
