import ServerError from '../src/views/ServerError';
import { Minimal } from '../src/layouts';
import WithLayout from '../src/WithLayout';

const ErrorPage = (): JSX.Element => {
	return <WithLayout component={ServerError} layout={Minimal} />;
};

export default ErrorPage;
