import { render, screen } from '@testing-library/react';
import Topbar from './Topbar';
import getTheme from '../../../../theme';
import { ThemeProvider } from '@material-ui/styles';

describe.skip('Topbar', () => {
	test('renders Header component', () => {
		render(
			<ThemeProvider theme={getTheme('light')}>
				<Topbar onSidebarOpen={() => {}} />
			</ThemeProvider>
		);

		const links = screen.getAllByRole('link');
		console.log('Class: , Function: , Line 9 links():', links);
		expect(links[1].textContent).toBe('Write');
		// expect(links[2].text).toBe('About');
		// expect(links[3].text).toBe('Help');
		// expect(links[4].text).toBe('Legal');
	});

	// test('clicking the menu opens the menu and click again closes it', async () => {
	// 	render(<Header />);
	//
	// 	const initialOpenButton = screen.getByLabelText('Open main menu');
	// 	fireEvent.click(initialOpenButton);
	// 	const closeButton = await screen.getByLabelText('Close main menu');
	// 	const afterFirstClickOpenButton =
	// 		screen.queryByLabelText('Open main menu');
	// 	expect(closeButton).toBeTruthy();
	// 	expect(afterFirstClickOpenButton).toBeFalsy();
	//
	// 	fireEvent.click(closeButton);
	// 	const finalOpenButton = await screen.getByLabelText('Open main menu');
	// 	const finalCloseButton = screen.queryByLabelText('Close main menu');
	// 	expect(finalOpenButton).toBeTruthy();
	// 	expect(finalCloseButton).toBeFalsy();
	// });
});
