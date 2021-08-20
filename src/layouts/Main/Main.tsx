import React, { useState } from 'react';
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
	children: React.ReactNode;
	themeToggler: () => void;
	themeMode: string;
}

const Main = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const pages = {
		discover: {
			title: 'Discover',
			id: 'discover-pages',
			children: {
				about: {
					groupTitle: 'Discover',
					pages: [
						{
							title: 'Why Almond',
							href: '/why-almond',
						},
						{
							title: 'What to grow',
							href: '/plant-resources',
						},
						{
							title: 'How it works',
							href: '/how-it-works',
						},
					],
				},
			},
		},
		learn: {
			title: 'Learn',
			id: 'learn-pages',
			children: {
				resources: {
					groupTitle: 'Learn',
					pages: [
						{
							title: 'Our Mission',
							href: '/our-mission',
						},
						{
							title: 'FAQ',
							href: '/faq',
						},
						{
							title: 'Resources',
							href: '/plant-resources',
						},
					],
				},
			},
		},
		support: {
			title: 'Support',
			id: 'support-pages',
			children: {
				services: {
					groupTitle: 'Support',
					pages: [
						{
							title: 'Terms of Services',
							href: '/terms-of-services',
						},
						{
							title: 'Private Policy',
							href: '/private-policy',
						},
						{
							title: 'Return Policy',
							href: '/return-policy',
						},
					],
				},
			},
		},
	};

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
			<Topbar
				onSidebarOpen={handleSidebarOpen}
				pages={pages}
				themeMode={themeMode}
				themeToggler={themeToggler}
			/>
			<Sidebar
				onClose={handleSidebarClose}
				open={open}
				variant="temporary"
				pages={pages}
				themeMode={themeMode}
				themeToggler={themeToggler}
			/>
			<main>
				<Divider />
				{children}
			</main>
			<Footer pages={pages} />
		</div>
	);
};

export default Main;
