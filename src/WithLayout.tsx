import { createContext, useState, useEffect, useMemo } from 'react';
import {
	ThemeProvider,
	Theme,
	StyledEngineProvider,
} from '@material-ui/core/styles';
import { PaletteMode, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AOS from 'aos';
import getTheme from './theme';

declare module '@material-ui/styles/defaultTheme' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends Theme {}
}

interface Props {
	layout: any;
	component: any;
	// All other props
	[x: string]: any;
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function WithLayout({
	component: Component,
	layout: Layout,
	...rest
}: Props): JSX.Element {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	useEffect(() => {
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

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(() => getTheme(mode as PaletteMode), [mode]);

	return (
		<StyledEngineProvider injectFirst>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Paper elevation={0}>
						<Layout>
							<Component {...rest} />
						</Layout>
					</Paper>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</StyledEngineProvider>
	);
}
