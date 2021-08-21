// import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, Stack, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		background: theme.palette.background.footer,
	},
	footerContainer: {
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
	},
	logoContainerItem: {
		paddingTop: 0,
	},
	logoContainer: {
		width: 120,
		height: 32,
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
	groupTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.light,
		marginBottom: theme.spacing(1),
	},
	socialIcon: {
		padding: 0,
		marginRight: theme.spacing(1),
		color: 'rgba(255,255,255,.6)',
		'&:hover': {
			background: 'transparent',
		},
		'&:last-child': {
			marginRight: 0,
		},
	},
	icon: {
		fontSize: 24,
	},
	menuListContainer: {
		padding: '0 !important',
	},
	menu: {
		display: 'flex',
	},
	menuItem: {
		margin: theme.spacing(2),
		'&:last-child': {
			marginBottom: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
		paddingBottom: theme.spacing(1 / 2),
		'&:last-child': {
			paddingBottom: 0,
		},
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
		color: 'white',
	},
	divider: {
		width: '100%',
	},
	navLink: {
		color: 'rgba(255,255,255,.6)',
	},
}));

interface Props {
	className?: string;
}

const Footer = ({ className, ...rest }: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<div className={classes.footerContainer}>
				<Grid container spacing={4} justifyContent="space-evenly">
					{/*<Grid container spacing={0} justifyContent="space-evenly">*/}
					{/*	<Grid item>*/}
					<Stack direction="row" spacing={2}>
						<Button variant="text">Support</Button>
						<Button variant="text">Careers</Button>
						<Button variant="text">Terms</Button>
						<Button variant="text">About</Button>
					</Stack>
					{/*	</Grid>*/}
					{/*</Grid>*/}
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
