import React from 'react';
import { Container, Grid } from '@mui/material';
import imgPeople from 'images/feedback-min (2).jpg';
import imgSocialLinks from 'images/feedback-min (3).jpg';
import imgSocial from 'images/social-min.jpg';
import { WrapperImg, Image } from './HomePage.styled';

export default function HomePage() {
	return (
		<Container sx={{ mt: '15px' }}>
			<Grid
				container
				rowSpacing={{ xs: 3, sm: 4, md: 5 }}
				columnSpacing={{ xs: 2, sm: 2, md: 5 }}
			>
				<Grid item xs={12} sm={6}>
					<WrapperImg>
						<Image src={imgSocialLinks} alt="people" />
					</WrapperImg>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel hic beatae labore doloribus, quidem nihil
						recusandae, id ipsa magni dolore vero accusantium iure,
						eaque voluptatem.
					</p>
				</Grid>

				<Grid item xs={12} sm={6}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel hic beatae labore doloribus, quidem nihil
						recusandae, id ipsa magni dolore vero accusantium iure,
						eaque voluptatem.
					</p>
				</Grid>
				<Grid item xs={12} sm={6}>
					<WrapperImg>
						<Image src={imgPeople} alt="people" />
					</WrapperImg>
				</Grid>

				<Grid item xs={12} sm={6}>
					<WrapperImg>
						<Image src={imgSocial} alt="people" />
					</WrapperImg>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel hic beatae labore doloribus, quidem nihil
						recusandae, id ipsa magni dolore vero accusantium iure,
						eaque voluptatem.
					</p>
				</Grid>
			</Grid>
		</Container>
	);
}
