/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import { AboutSideCover } from '../src/views';
import { Main } from '../src/layouts';
import WithLayout from '../src/WithLayout';

const AboutSideCoverPage = (): JSX.Element => {
	return <WithLayout component={AboutSideCover} layout={Main} />;
};

export default AboutSideCoverPage;
