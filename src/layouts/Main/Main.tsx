import { useState, ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Divider, Theme } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
	},
}));

interface Props {
	children: ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const [openSidebar, setOpenSidebar] = useState<boolean>(false);

	const handleSidebarOpen = (): void => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = (): void => {
		setOpenSidebar(false);
	};

	const open = isMd ? false : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true,
			})}
		>
			<Topbar onSidebarOpen={handleSidebarOpen} />
			<Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
			<main>
				<Divider />
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Main;
