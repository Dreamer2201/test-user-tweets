import React from 'react';
import Card from 'components/Card/Card';
import { Grid } from '@mui/material';

export default function CardList({ users }) {
	const elements = users.map(item => {
		return <Card key={item.id} user={item} />;
	});

	return (
		<Grid
			container
			spacing={2}
			rowSpacing={1}
			columnSpacing={{ xs: 1, sm: 3, md: 3 }}
		>
			{elements}
		</Grid>
	);
}
