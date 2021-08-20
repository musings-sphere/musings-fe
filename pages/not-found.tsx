/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import { NotFound } from '../src/views';
import WithLayout from '../src/WithLayout';
import { Minimal } from '../src/layouts';

const NotFoundPage = (): JSX.Element => {
	return <WithLayout component={NotFound} layout={Minimal} />;
};

export default NotFoundPage;
