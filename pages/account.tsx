/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import NoSsr from '@material-ui/core/NoSsr';
import { Account } from '../src/views';
import WithLayout from '../src/WithLayout';
import { Main } from 'next/document';

const Component = (): JSX.Element => {
	return (
		<NoSsr>
			<Account />
		</NoSsr>
	);
};

const AccountPage = (): JSX.Element => {
	return <WithLayout component={Component} layout={Main} />;
};

export default AccountPage;
