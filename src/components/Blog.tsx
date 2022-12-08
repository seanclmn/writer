import {BlogModel} from '../types/BlogTypes'
import {Card, CardBody, Image, Heading, Stack,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import "./Blog.css"

export const Blog = (blogData:BlogModel) => {
	return(
		<Card maxW='sm' maxH="sm" mx="auto">
			<CardBody >
				<Link to={`/b/${blogData.id}`}>
					<Image
						src={blogData.image}
						alt={blogData.image}
						borderRadius='lg'
					/>
					<Stack mt='6' spacing='3'>
						<Heading size='md'>{blogData.title} </Heading>
						<Text>
							By {blogData.author} ({blogData.date})
						</Text>
					</Stack>
				</Link>
			</CardBody>
		</Card>
	)
}
