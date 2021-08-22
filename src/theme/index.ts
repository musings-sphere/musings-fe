import {
	createTheme,
	PaletteMode,
	responsiveFontSizes,
} from '@material-ui/core';
import { light, dark } from './palette';

const getTheme = (mode: PaletteMode) =>
	responsiveFontSizes(
		createTheme({
			palette: mode === 'light' ? light : dark,
			layout: {
				contentWidth: 1236,
			},
			typography: {
				fontFamily: 'Sorts Mill Goudy, Georgia, Times New Roman, Times,serif',
				// fontFamily: 'Google Sans, Roboto, Helvetica Neue, sans-serif',
				button: {
					textTransform: 'none',
				},
			},
			zIndex: {
				appBar: 1200,
				drawer: 1100,
			},
		})
	);

export default getTheme;
