import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CardBase, DescriptionListIcon } from '@components/organisms';

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		width: '100%',
	},
}));

/**
 * Component to display the category card
 *
 * @param {Object} props
 */
const CardCategory = ({
	icon,
	title,
	align = 'center',
	className,
	...rest
}: CardCategoryProps): JSX.Element => {
	const classes = useStyles();

	return (
		<CardBase className={clsx(classes.root, className)} {...rest}>
			<DescriptionListIcon icon={icon} title={title} align={align} />
		</CardBase>
	);
};

export default CardCategory;
