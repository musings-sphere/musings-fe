import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Grid, Theme } from '@material-ui/core';
import { Image } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles(() => ({
	promoLogo: {
		maxWidth: 120,
	},
	title: {
		fontWeight: 'bold',
	},
}));

const Partners = ({
	data,
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
				<Grid item xs={12} md={6}>
					<SectionHeader
						title="Trusted by Millions of People"
						subtitle="We are registered as a distributor with AMFI, as an investment advisor with SEBI and platform partners with BSE."
						fadeUp
						disableGutter
						align={isMd ? 'left' : 'center'}
						titleProps={{
							className: classes.title,
						}}
					/>
				</Grid>
				<Grid item container xs={12} md={6}>
					{data.map((partner: any) => (
						<Grid
							item
							container
							justifyContent="center"
							alignItems="center"
							xs={4}
							key={fancyId()}
							data-aos="fade-up"
						>
							<Image
								src={partner.logo}
								alt={partner.name}
								className={classes.promoLogo}
								lazy={false}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	);
};

export default Partners;
