import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { PaletteMode, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AOS from 'aos';
import useDarkMode from './hooks/useDarkMode';
import getTheme from './theme';

interface Props {
	layout: any;
	component: any;
	// All other props
	[x: string]: any;
}

export default function WithLayout({
	component: Component,
	layout: Layout,
	...rest
}: Props): JSX.Element {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles?.parentElement?.removeChild(jssStyles);
		}

		AOS.init({
			once: true,
			delay: 50,
			duration: 500,
			easing: 'ease-in-out',
		});
	}, []);

	const [themeMode, themeToggler, mountedComponent] = useDarkMode();
	useEffect(() => {
		AOS.refresh();
	}, [mountedComponent]);

	return (
		<ThemeProvider theme={getTheme(themeMode as PaletteMode)}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<Paper elevation={0}>
				<Layout themeMode={themeMode} themeToggler={themeToggler}>
					<Component themeMode={themeMode} {...rest} />
				</Layout>
			</Paper>
		</ThemeProvider>
	);
}
