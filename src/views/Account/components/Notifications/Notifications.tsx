import { makeStyles, useTheme } from '@material-ui/styles';
import {
	useMediaQuery,
	Grid,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Divider,
	Theme,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	titleCta: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const Notifications = ({
	className,
	...rest
}: ViewComponentProps): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={className} {...rest}>
			<Grid container spacing={isMd ? 4 : 2}>
				<Grid item xs={12}>
					<div className={classes.titleCta}>
						<Typography variant="h6" color="textPrimary">
							Notifications
						</Typography>
						<Button variant="outlined" color="primary">
							Reset all
						</Button>
					</div>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant="h6" gutterBottom>
						System settings
					</Typography>
					<Typography variant="caption" gutterBottom>
						You will recieve emails in your business email address
					</Typography>
					<div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked color="primary" />}
								label="E-mail alerts"
							/>
						</div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked color="primary" />}
								label="Push notifications"
							/>
						</div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked color="primary" />}
								label="Text messages"
							/>
						</div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked={false} color="primary" />}
								label="Phone calles"
							/>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant="h6" gutterBottom>
						Chat settings
					</Typography>
					<Typography variant="caption" gutterBottom>
						You will recieve emails in your business email address
					</Typography>
					<div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked={false} color="primary" />}
								label="E-mail alerts"
							/>
						</div>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked color="primary" />}
								label="Push notifications"
							/>
						</div>
					</div>
				</Grid>
				<Grid item container justifyContent="flex-start" xs={12}>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						size="large"
					>
						save
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Notifications;
