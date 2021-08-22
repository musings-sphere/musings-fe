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
				fontSize: 16,
				fontFamily: 'Sorts Mill Goudy, Georgia, Times New Roman, Times,serif',
				// fontFamily: 'Google Sans, Roboto, Helvetica Neue, sans-serif',
				button: {
					textTransform: 'none',
				},
				body1: {
					// marginBottom: '-0.5rem',
					fontWeight: 500,
				},
			},
			zIndex: {
				appBar: 1200,
				drawer: 1100,
			},
			shape: {
				borderRadius: 8,
			},
		})
	);

export default getTheme;
