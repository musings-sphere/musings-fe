import { useHistory } from 'react-router-dom';
import { Stack, Typography } from '@material-ui/core';
import { Image } from '@components/atoms';
import { makeStyles } from '@material-ui/styles';

const logo = 'https://static.almondhydroponics.com/static/logo.png';

const useStyles = makeStyles(() => ({
	logoContainer: {
		cursor: 'pointer',
	},
	container: {
		maxWidth: 'fit-content',
	},
	logoImage: {
		width: '3%',
		height: '3%',
		margin: 0,
		minWidth: 32,
	},
}));

interface Props {
	themeMode: string;
	displayText?: boolean;
}

const Logo = ({
	themeMode = 'light',
	displayText = false,
}: Props): JSX.Element => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div
			className={classes.logoContainer}
			data-testid="logo"
			onClick={() => history.push('/')}
			onKeyDown={() => history.push('/')}
			role="presentation"
		>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={0.5}
				className={classes.container}
			>
				<Image
					className={classes.logoImage}
					src={themeMode === 'light' ? logo : logo}
					alt="almond"
					lazy={false}
				/>
				{displayText && (
					<Typography
						variant="h5"
						color="textPrimary"
						style={{ fontWeight: 600, fontSize: '16px', padding: '8px' }}
					>
						Almond
					</Typography>
				)}
			</Stack>
		</div>
	);
};

export default Logo;
