/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import { BlogReachView } from '../src/views';
import WithLayout from '../src/WithLayout';
import { Main } from '../src/layouts';

const BlogReachViewPage = (): JSX.Element => {
	return <WithLayout component={BlogReachView} layout={Main} />;
};

export default BlogReachViewPage;
