import { Avatar, Menu, MenuItem, ListItemIcon } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
	Mood,
	ExitToApp,
	Help,
	OpenInNew,
	Settings,
} from '@material-ui/icons';
import fancyId from '@utils/fancyId';
import { useState, MouseEvent } from 'react';

const useStyles = makeStyles({
	avatar: {
		width: '40px',
		height: '40px',
		cursor: 'pointer',
		margin: '4px',
	},
	menuPopup: {
		right: 16,
		left: 'unset !important',
	},
});

interface Props {
	hasMultipleRoles?: boolean;
	[x: string]: any;
}

const CustomAvatar = ({
	hasMultipleRoles = false,
	...rest
}: Props): JSX.Element => {
	const history = useHistory();
	const { avatar, menuPopup } = useStyles();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleToggleProfileMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleProfileClose = () => setAnchorEl(null);

	const handleRoleModal = () => {
		handleProfileClose();
		// toggleRoleChangeDialog();
	};

	const logoutActiveUser = async (): Promise<void> => {
		await window.location.replace('/');
		// dispatch(logoutUser());
	};

	const open = Boolean(anchorEl);
	const location = useLocation();

	let menuItems = [
		{ name: 'Settings', icon: <Settings />, link: 'account' },
		{ name: 'Help', icon: <Help />, link: 'help' },
		{ name: 'Send Feedback', icon: <OpenInNew />, link: 'send-feedback' },
	];

	if (location.pathname === '/') {
		menuItems = menuItems.filter((item) => {
			return item.name !== 'Settings';
		});
	}

	return (
		<>
			<Avatar
				className={avatar}
				alt="name"
				src=""
				onClick={handleToggleProfileMenu}
				aria-describedby="menu-popover"
				aria-controls="menu-popover"
				aria-haspopup="true"
				typeof="button"
				{...rest}
			/>
			<Menu
				id="menu-popover"
				classes={{
					paper: menuPopup,
				}}
				style={{ top: '44px', right: '16px' }}
				anchorEl={anchorEl}
				open={open}
				keepMounted
				onClose={handleProfileClose}
			>
				{menuItems.map((item) => {
					const handleClick = () => {
						handleProfileClose();
						history.push(item.link);
					};
					return (
						<MenuItem key={fancyId()} onClick={handleClick}>
							<ListItemIcon style={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
							{item.name}
						</MenuItem>
					);
				})}
				{location.pathname === '/dashboard' && hasMultipleRoles && (
					<MenuItem onClick={handleRoleModal}>
						<ListItemIcon style={{ minWidth: 40 }}>
							<Mood />
						</ListItemIcon>
						Change role
					</MenuItem>
				)}

				<MenuItem onClick={logoutActiveUser}>
					<ListItemIcon style={{ minWidth: 40 }}>
						<ExitToApp />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default CustomAvatar;
