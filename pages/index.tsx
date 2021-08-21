import { BlogNewsroom } from '../src/views';
import WithLayout from '../src/WithLayout';
import { Main } from '../src/layouts';

const IndexPage = (): JSX.Element => {
	return <WithLayout component={BlogNewsroom} layout={Main} />;
};

export default IndexPage;
