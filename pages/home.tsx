/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react";
import { BlogNewsroom } from "../src/views";
import WithLayout from "../src/WithLayout";
import { Main } from "next/document";

const HomePage = (): JSX.Element => {
	return <WithLayout component={BlogNewsroom} layout={Main} />;
};

export default HomePage;
