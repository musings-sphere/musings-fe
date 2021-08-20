import React from 'react';
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import fancyId from '@utils/fancyId';

const Breadcrumb = ({
	data,
	className,
	...rest
}: ViewComponentProps): JSX.Element => (
	<div className={className} {...rest}>
		<Breadcrumbs aria-label="breadcrumb">
			{data.map((item: any) => (
				<span key={fancyId()}>
					{item.isActive ? (
						<Typography color="textPrimary">{item.title}</Typography>
					) : (
						<Link href={item.href}>{item.title}</Link>
					)}
				</span>
			))}
		</Breadcrumbs>
	</div>
);

export default Breadcrumb;
