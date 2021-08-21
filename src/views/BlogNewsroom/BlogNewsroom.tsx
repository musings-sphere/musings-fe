import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Grid, Theme } from '@material-ui/core';
import { Section, SectionAlternate } from '@components/organisms';
import {
	Archive,
	Hero,
	MostViewedArticles,
	SidebarNewsletter,
	Tags,
} from './components';

import { mostViewedArticles, archive, tags } from './data';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	sidebarNewsletter: {
		[theme.breakpoints.down('lg')]: {
			marginTop: theme.spacing(3),
		},
	},
	footerNewsletterSection: {
		background: theme.palette.primary.dark,
	},
	pagePaddingTop: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
		},
	},
}));

const BlogNewsroom = (): JSX.Element => {
	const classes = useStyles();

	const theme: Theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<div className={classes.root}>
			<Section className={classes.pagePaddingTop}>
				<Hero />
			</Section>
			{/*<Section>*/}
			{/*	<PopularNews data={popularNews} />*/}
			{/*</Section>*/}
			{/*<SectionAlternate>*/}
			{/*	<FeaturedArticles data={featuredArticles} />*/}
			{/*</SectionAlternate>*/}
			{/*<Section>*/}
			{/*	<Grid container spacing={isMd ? 4 : 2}>*/}
			{/*		<Grid item xs={12} md={8}>*/}
			{/*			<LatestStories data={latestStories} />*/}
			{/*		</Grid>*/}
			{/*		<Grid item xs={12} md={4}>*/}
			{/*			<SidebarArticles data={sidebarArticles} />*/}
			{/*		</Grid>*/}
			{/*	</Grid>*/}
			{/*</Section>*/}
			<SectionAlternate>
				<Grid container spacing={isMd ? 4 : 0}>
					<Grid item xs={12} md={8}>
						<MostViewedArticles data={mostViewedArticles} />
					</Grid>
					<Grid item xs={12} md={4}>
						<SidebarNewsletter className={classes.sidebarNewsletter} />
					</Grid>
				</Grid>
			</SectionAlternate>
			<Section>
				<Grid container spacing={isMd ? 4 : 2}>
					<Grid item xs={12} md={8}>
						<Archive data={archive} />
					</Grid>
					<Grid item xs={12} md={4}>
						<Tags data={tags} />
					</Grid>
				</Grid>
			</Section>
			{/*<SectionAlternate className={classes.footerNewsletterSection}>*/}
			{/*	<FooterNewsletter />*/}
			{/*</SectionAlternate>*/}
		</div>
	);
};

export default BlogNewsroom;
