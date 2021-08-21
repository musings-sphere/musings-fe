import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme, Toolbar } from '@material-ui/core';
import { Logo } from '@components/atoms';

const useStyles = makeStyles((theme: Theme) => ({
	toolbar: {
		maxWidth: '100%',
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(0, 8),
		},
	},
	logoContainer: {
		width: 100,
		height: 28,
		[theme.breakpoints.up('md')]: {
			width: 120,
			height: 32,
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
	},
}));

interface Props {
	themeMode: string;
	className?: string;
}

const Topbar = ({ themeMode, className, ...rest }: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<Toolbar className={clsx(classes.toolbar, className)} {...rest}>
			<Logo />
		</Toolbar>
	);
};

export default Topbar;
