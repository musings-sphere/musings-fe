import { Theme, ThemeOptions } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
	interface Theme {
		layout: {
			contentWidth: number | string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		layout: {
			contentWidth: number | string;
		};
	}
}
