import { makeStyles } from '@material-ui/styles';
import { Button, Theme } from '@material-ui/core';
import { Image, LearnMoreLink } from '@components/atoms';
import { SectionHeader } from '@components/molecules';
import { HeroShaped } from '@components/organisms';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => {
	const { toolbar } = theme.mixins;
	return {
		root: {
			'& .hero-shaped': {
				borderBottom: 0,
			},
			'& .hero-shaped__wrapper': {
				[theme.breakpoints.up('md')]: {
					// @ts-expect-error we want to ignore the error explicitly
					minHeight: `calc(100vh - ${toolbar['@media (min-width:600px)'].minHeight}px)`,
				},
			},
		},
		formContainer: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			[theme.breakpoints.down('lg')]: {
				maxWidth: 500,
				margin: `0 auto`,
			},
		},
		image: {
			objectFit: 'cover',
		},
		label: {
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
	};
});

const NotFoundCover = (): JSX.Element => {
	const classes = useStyles();

	const handleClick = (): void => {
		window.history.back();
	};

	return (
		<div className={classes.root}>
			<HeroShaped
				leftSide={
					<div className={classes.formContainer}>
						<SectionHeader
							label="404"
							title="Uh oh."
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
				}
				rightSide={
					<Image
						src="https://assets.maccarianagency.com/the-front/photos/account/cover-3.png"
						className={classes.image}
						lazy={false}
					/>
				}
			/>
		</div>
	);
};

export default NotFoundCover;
