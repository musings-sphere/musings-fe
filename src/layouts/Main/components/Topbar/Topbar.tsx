import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
	Toolbar,
	List,
	ListItem,
	Typography,
	IconButton,
	Button,
	Theme,
	useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DarkModeToggler, Logo } from '@components/atoms';
import authService from '@utils/auth';
import { CustomAvatar } from '@components/molecules';
import { PagesProps } from '../../../../types/NavigationProps';

const useStyles = makeStyles((theme: Theme) => ({
	flexGrow: {
		flexGrow: 1,
	},
	navigationContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	toolbar: {
		zIndex: 999,
		maxWidth: theme.layout.contentWidth,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	navLink: {
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
	listItem: {
		cursor: 'pointer',
		'&:hover > .menu-item, &:hover svg': {
			color: theme.palette.primary.dark,
		},
		'&.menu-item--no-dropdown': {
			paddingRight: 0,
		},
	},
	listItemActive: {
		'&> .menu-item': {
			color: theme.palette.primary.dark,
		},
	},
	listItemText: {
		flex: '0 0 auto',
		marginRight: theme.spacing(2),
		whiteSpace: 'nowrap',
	},
	listItemButton: {
		whiteSpace: 'nowrap',
	},
	listItemIcon: {
		minWidth: 'auto',
	},
	popover: {
		padding: theme.spacing(4),
		border: theme.spacing(2),
		boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
		minWidth: 350,
		marginTop: theme.spacing(2),
	},
	iconButton: {
		marginLeft: theme.spacing(2),
		padding: 0,
		'&:hover': {
			background: 'transparent',
		},
	},
	expandOpen: {
		transform: 'rotate(180deg)',
		color: theme.palette.primary.dark,
	},
	logoContainer: {
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
	menu: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuItem: {
		marginRight: theme.spacing(5),
		'&:last-child': {
			marginRight: 0,
		},
	},
	menuGroupItem: {
		paddingTop: 0,
	},
	menuGroupTitle: {
		textTransform: 'uppercase',
	},
}));

interface Props {
	className?: string;
	onSidebarOpen: () => void;
	pages: PagesProps;
}

const Topbar = ({
	onSidebarOpen,
	pages,
	className,
	...rest
}: Props): JSX.Element => {
	const classes = useStyles();

	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

	const renderAuthButtons = () => (
		<>
			{authService.isAuthenticated() ? (
				<ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
					<CustomAvatar />
				</ListItem>
			) : (
				<>
					<Link href="/login">
						<ListItem
							className={clsx(classes.listItem, 'menu-item--no-dropdown')}
						>
							<Button variant="outlined">Login</Button>
						</ListItem>
					</Link>

					<Link href="/register">
						<ListItem
							className={clsx(classes.listItem, 'menu-item--no-dropdown')}
						>
							<Button
								variant="contained"
								color="primary"
								className={classes.listItemButton}
							>
								Register
							</Button>
						</ListItem>
					</Link>
				</>
			)}
		</>
	);

	return (
		<Toolbar
			disableGutters
			className={classes.toolbar}
			{...rest}
			variant="dense"
		>
			<Logo displayText />
			{hidden && (
				<List disablePadding className={classes.navigationContainer}>
					<Link href="/plant-resources">
						<ListItem
							aria-describedby="resources"
							className={clsx(classes.listItem)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
								className={clsx(classes.listItemText, 'menu-item')}
							>
								Resources
							</Typography>
						</ListItem>
					</Link>

					<Link href="/store">
						<ListItem
							aria-describedby="store"
							className={clsx(classes.listItem)}
						>
							<Typography
								variant="body1"
								color="textPrimary"
								className={clsx(classes.listItemText, 'menu-item')}
							>
								Store
							</Typography>
						</ListItem>
					</Link>
				</List>
			)}
			<div className={classes.flexGrow} />
			{hidden && (
				<List disablePadding className={classes.navigationContainer}>
					<ListItem className="menu-item--no-dropdown">
						<DarkModeToggler size={24} />
					</ListItem>
					{renderAuthButtons()}
				</List>
			)}
			{hidden ? null : (
				<IconButton
					className={classes.iconButton}
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
					sx={{ display: { xl: 'block', sm: 'block' } }}
					size="large"
				>
					<MenuIcon />
				</IconButton>
			)}
		</Toolbar>
	);
};

export default Topbar;
