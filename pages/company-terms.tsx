/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import { CompanyTerms } from '../src/views';
import WithLayout from '../src/WithLayout';
import { Main } from 'next/document';

const CompanyTermsPage = (): JSX.Element => {
	return <WithLayout component={CompanyTerms} layout={Main} />;
};

export default CompanyTermsPage;
