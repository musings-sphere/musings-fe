import { makeStyles, useTheme } from '@material-ui/styles';
import {
	useMediaQuery,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Theme,
} from '@material-ui/core';
import { SectionHeader } from '@components/molecules';
import { CardBase } from '@components/organisms';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => ({
	cardBase: {
		boxShadow: 'none',
		background: theme.palette.alternate.main,
		borderRadius: theme.spacing(1),
		'& .card-base__content': {
			padding: theme.spacing(1),
			[theme.breakpoints.up('sm')]: {
				padding: theme.spacing(3),
			},
		},
	},
	avatar: {
		width: 110,
		height: 110,
		border: `4px solid ${theme.palette.alternate.dark}`,
		borderRadius: '100%',
		boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
	},
	listItem: {
		padding: 0,
		[theme.breakpoints.down('lg')]: {
			flexDirection: 'column',
		},
	},
	listItemAvatar: {
		marginRight: theme.spacing(3),
		[theme.breakpoints.down('lg')]: {
			marginRight: 0,
			marginBottom: theme.spacing(2),
		},
	},
	listItemText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		margin: 0,
		height: '100%',
	},
	title: {
		fontWeight: 'bold',
	},
}));

const Team = ({
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
				title="Meet our team"
				subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
			/>
			<Grid container spacing={isMd ? 2 : 1}>
				{data.map((item: any) => (
					<Grid item xs={6} sm={6} md={4} key={fancyId()} data-aos="fade-up">
						<CardBase className={classes.cardBase} liftUp>
							<ListItem disableGutters className={classes.listItem}>
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar {...item.authorPhoto} className={classes.avatar} />
								</ListItemAvatar>
								<ListItemText
									className={classes.listItemText}
									primary={item.authorName}
									secondary={item.title}
									primaryTypographyProps={{
										className: classes.title,
										variant: 'h6',
										align: isMd ? 'left' : 'center',
									}}
									secondaryTypographyProps={{
										color: 'textPrimary',
										align: isMd ? 'left' : 'center',
									}}
								/>
							</ListItem>
						</CardBase>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Team;
