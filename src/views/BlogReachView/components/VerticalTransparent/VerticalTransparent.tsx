import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Theme } from '@material-ui/core';
import { Image } from '@components/atoms';
import { CardProduct } from '@components/organisms';
import fancyId from '@utils/fancyId';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		[theme.breakpoints.down('lg')]: {
			maxWidth: 400,
			margin: '0 auto',
		},
	},
	cardProduct: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: theme.spacing(1),
		background: 'transparent',
		boxShadow: 'none',
		'& .card-product__content': {
			padding: theme.spacing(2),
		},
		'& .card-product__media': {
			minHeight: 300,
		},
	},
	image: {
		objectFit: 'cover',
	},
	blogTitle: {
		fontWeight: 700,
	},
	tags: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	tag: {
		fontWeight: 700,
		margin: theme.spacing(0, 1, 1, 0),
	},
	author: {
		margin: theme.spacing(1, 0),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(2, 0),
		},
	},
	fontWeightBold: {
		fontWeight: 'bold',
	},
}));

const VerticalTransparent = ({
	data,
	className,
	...rest
}: ViewComponentProps): JSX.Element => {
	const classes = useStyles();

	const BlogMediaContent = (props: ImageProps) => (
		<Image
			{...props}
			className={classes.image}
			lazyProps={{ width: '100%', height: '100%' }}
		/>
	);

	const BlogContent = ({
		title,
		subtitle,
		date,
		tags,
		author: { name },
	}: BlogProps) => (
		<div>
			<div className={classes.tags}>
				{tags?.map((item: any) => (
					<Typography
						variant="overline"
						color="primary"
						className={classes.tag}
						key={fancyId()}
					>
						{item}
					</Typography>
				))}
			</div>
			<Typography
				variant="h6"
				color="textPrimary"
				className={classes.blogTitle}
				align="center"
			>
				{title}
			</Typography>
			<Typography
				variant="body2"
				color="textPrimary"
				className={classes.author}
				align="center"
			>
				<i>
					{name} - {date}
				</i>
			</Typography>
			<Typography variant="body1" color="textPrimary" align="center">
				{subtitle}
			</Typography>
		</div>
	);

	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<Grid container spacing={2}>
				{data.map(
					(item: {
						cover: JSX.IntrinsicAttributes & ImageProps;
						title: string;
						subtitle: string;
						author: { name: string; photo: string };
						date: Date;
						tags: string[];
					}) => (
						<Grid item xs={12} md={4} key={fancyId()} data-aos="fade-up">
							<CardProduct
								liftUp
								className={classes.cardProduct}
								mediaContent={
									<BlogMediaContent {...item.cover} alt={item.title} />
								}
								cardContent={
									<BlogContent
										title={item.title}
										subtitle={item.subtitle}
										author={item.author}
										date={item.date}
										tags={item.tags}
									/>
								}
							/>
						</Grid>
					)
				)}
			</Grid>
		</div>
	);
};

export default VerticalTransparent;
