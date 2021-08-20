import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Divider, Theme } from "@material-ui/core";
import { Section, SectionAlternate } from "@components/organisms";
import { Breadcrumb, Newsletter, Result } from "./components";

import { breadcrumb, result } from "./data";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		width: "100%",
	},
	sectionBreadcrumb: {
		"& .section-alternate__content": {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
	},
}));

const BlogSearch = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<SectionAlternate className={classes.sectionBreadcrumb}>
				<Breadcrumb data={breadcrumb} />
			</SectionAlternate>
			<Result data={result} />
			<Section>
				<Newsletter />
			</Section>
			<Divider />
		</div>
	);
};

export default BlogSearch;
