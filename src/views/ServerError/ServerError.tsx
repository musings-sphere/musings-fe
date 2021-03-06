import { makeStyles } from '@material-ui/styles';
import { Button, Theme } from '@material-ui/core';
import { LearnMoreLink } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import { Section } from '@components/organisms';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => {
	const { toolbar } = theme.mixins;

	return {
		formContainer: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			// @ts-expect-error we want to ignore the error explicitly
			minHeight: `calc(100vh - ${toolbar['@media (min-width:600px)'].minHeight}px)`,
			maxWidth: 500,
			margin: `0 auto`,
		},
		section: {
			paddingTop: 0,
			paddingBottom: 0,
		},
		label: {
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	};
});

const ServerError = (): JSX.Element => {
	const classes = useStyles();

	const handleClick = (): void => {
		window.history.back();
	};

	return (
		<div>
			<Section className={classes.section}>
				<div className={classes.formContainer}>
					<SectionHeader
						label="500"
						title="Internal Server Error"
						subtitle={
							<span>
								There’s nothing here, but if you feel this is an error please{' '}
								<LearnMoreLink
									title="let us know"
									href="#"
									typographyProps={{ variant: 'h6' }}
								/>
							</span>
						}
						titleProps={{
							variant: 'h3',
						}}
						labelProps={{
							color: 'secondary',
							className: classes.label,
							variant: 'h5',
						}}
						ctaGroup={[
							<Button
								key={fancyId()}
								size="large"
								variant="contained"
								color="primary"
								onClick={handleClick}
							>
								Go Back
							</Button>,
						]}
						disableGutter
					/>
				</div>
			</Section>
		</div>
	);
};

export default ServerError;
