import React from "react";
import { BlogNewsroom } from "../src/views";
import WithLayout from "../src/WithLayout";
import { Main } from "next/document";

const IndexPage = (): JSX.Element => {
	return <WithLayout component={BlogNewsroom} layout={Main} />;
};

export default IndexPage;
