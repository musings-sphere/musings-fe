/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
	List,
	ListItem,
	Typography,
	ListItemIcon,
	Divider,
	Theme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';
import {
	AccountCircleTwoTone,
	DashboardTwoTone,
	ExitToApp,
	FaceTwoTone,
	PanoramaTwoTone,
	SettingsTwoTone,
} from '@material-ui/icons';
import { DarkModeToggler } from '@components/atoms';
import authService from '@utils/auth';
import { PagesProps } from '../../../../../../types/NavigationProps';

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	listItem: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	navLink: {
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
	listItemIcon: {
		minWidth: 'auto',
	},
	listItemText: {
		flex: '0 0 auto',
		// marginLeft: theme.spacing(0),
		whiteSpace: 'nowrap',
	},
	closeIcon: {
		justifyContent: 'flex-end',
		cursor: 'pointer',
	},
	menu: {
		display: 'flex',
	},
	menuItem: {
		marginRight: theme.spacing(8),
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
	divider: {
		width: '100%',
	},
}));

interface Props {
	className?: string;
	onClose: () => void;
	pages: PagesProps;
	themeMode: string;
	themeToggler: () => void;
}

const SidebarNav = ({
	pages,
	onClose,
	className,
	themeToggler,
	themeMode,
	...rest
}: Props): JSX.Element => {
	const classes = useStyles();

	const LandingPages = (): JSX.Element => {
		return (
			<div className={classes.menu}>
				<div className={classes.menuItem}>
					<List component="nav" aria-label="resource portfolio">
						<NavLink to="/plant-resources">
							<ListItem aria-describedby="resources">
								<ListItemIcon style={{ minWidth: 40 }}>
									<DashboardTwoTone color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Resources
								</Typography>
							</ListItem>
						</NavLink>
						<NavLink to="/portfolio">
							<ListItem aria-describedby="resources">
								<ListItemIcon style={{ minWidth: 40 }}>
									<PanoramaTwoTone color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Portfolio
								</Typography>
							</ListItem>
						</NavLink>
					</List>
				</div>
			</div>
		);
	};

	const AccountPages = (): JSX.Element => {
		return (
			<div className={classes.menu}>
				<div className={classes.menuItem}>
					<List component="nav" aria-label="register login">
						<NavLink to="/register">
							<ListItem aria-describedby="register">
								<ListItemIcon style={{ minWidth: 40 }}>
									<AccountCircleTwoTone color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Register
								</Typography>
							</ListItem>
						</NavLink>
						<NavLink to="/login">
							<ListItem aria-describedby="login">
								<ListItemIcon style={{ minWidth: 40 }}>
									<ExitToApp color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Login
								</Typography>
							</ListItem>
						</NavLink>
					</List>
				</div>
			</div>
		);
	};

	const ProfilePages = (): JSX.Element => {
		return (
			<div className={classes.menu}>
				<div className={classes.menuItem}>
					<List component="nav" aria-label="profile settings logout">
						<NavLink to="/profile">
							<ListItem aria-describedby="profile">
								<ListItemIcon style={{ minWidth: 40 }}>
									<FaceTwoTone color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Profile
								</Typography>
							</ListItem>
						</NavLink>
						<NavLink to="/settings">
							<ListItem aria-describedby="settings">
								<ListItemIcon style={{ minWidth: 40 }}>
									<SettingsTwoTone color="primary" />
								</ListItemIcon>
								<Typography
									variant="body1"
									color="textPrimary"
									className={clsx(classes.listItemText, 'menu-item')}
								>
									Settings
								</Typography>
							</ListItem>
						</NavLink>
						<ListItem aria-describedby="logout">
							<ListItemIcon style={{ minWidth: 40 }}>
								<ExitToApp color="primary" />
							</ListItemIcon>
							<Typography
								variant="body1"
								color="textPrimary"
								className={clsx(classes.listItemText, 'menu-item')}
								onClick={() => {}}
							>
								Logout
							</Typography>
						</ListItem>
					</List>
				</div>
			</div>
		);
	};

	return (
		<List {...rest} className={clsx(classes.root, className)}>
			<ListItem className={classes.closeIcon} onClick={() => onClose()}>
				<ListItemIcon className={classes.listItemIcon}>
					<CloseIcon fontSize="small" />
				</ListItemIcon>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Typography variant="h6" color="textPrimary" gutterBottom>
					Landings
				</Typography>
				<LandingPages />
			</ListItem>
			<ListItem className={classes.listItem}>
				<Divider className={classes.divider} />
			</ListItem>
			<ListItem className={classes.listItem}>
				<Typography variant="h6" color="textPrimary" gutterBottom>
					Account
				</Typography>
				{authService.isAuthenticated() ? <ProfilePages /> : <AccountPages />}
			</ListItem>
			<ListItem className={classes.listItem}>
				<Divider className={classes.divider} />
			</ListItem>
			<ListItem aria-describedby="logout">
				<Typography
					variant="body1"
					color="textPrimary"
					style={{ paddingRight: 24 }}
					className={clsx(classes.listItemText)}
				>
					{`Turn on ${themeMode === 'light' ? 'dark' : 'light'} mode`}
				</Typography>
				<DarkModeToggler
					themeMode={themeMode}
					onChange={themeToggler}
					size={24}
				/>
			</ListItem>
		</List>
	);
};

export default SidebarNav;
