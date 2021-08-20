import { useEffect, useState } from 'react';
import AOS from 'aos';
import { PaletteMode } from '@material-ui/core';

const useDarkMode = () => {
	const [themeMode, setTheme] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode: PaletteMode) => {
		window.localStorage.setItem('themeMode', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		themeMode === 'light' ? setMode('dark') : setMode('light');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('themeMode');
		localTheme ? setTheme(localTheme) : setMode('light');
		setMountedComponent(true);
		AOS.refresh();
	}, []);

	useEffect(() => {
		AOS.refresh();
	}, [themeMode]);

	return [themeMode, themeToggler, mountedComponent];
};

export default useDarkMode;
