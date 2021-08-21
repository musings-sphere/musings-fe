import { useRouter } from 'next/router';
import { Stack, Theme, Typography } from '@material-ui/core';
import { Image } from '@components/atoms';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

const darkLogo =
	'https://static.almondhydroponics.com/static/musings/logo-dark.png';
const logo = 'https://static.almondhydroponics.com/static/musings/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
	logoContainer: {
		cursor: 'pointer',
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	container: {
		maxWidth: 'fit-content',
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
}));

interface Props {
	displayText?: boolean;
}

const Logo = ({ displayText = false }: Props): JSX.Element => {
	const classes = useStyles();
	const router = useRouter();
	const {
		palette: { mode },
	} = useTheme();

	return (
		<div
			className={classes.logoContainer}
			data-testid="logo"
			onClick={() => router.push('/')}
			onKeyDown={() => router.push('/')}
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
					src={mode === 'light' ? logo : darkLogo}
					alt="musings-logo"
					width={32}
					height={32}
					lazy={false}
				/>
				{displayText && (
					<Typography
						variant="h5"
						color="textPrimary"
						style={{ fontWeight: 600, fontSize: '16px', padding: '8px' }}
					>
						Musings
					</Typography>
				)}
			</Stack>
		</div>
	);
};

export default Logo;
