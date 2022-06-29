import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

import Post from './Post/Post';
import { Title } from './Post/styles';
import { Container } from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts?.length && !isLoading)
    return (
      <Title variant='h6' gutterBottom>
        No posts.
      </Title>
    );

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Container container sx={{ alignItems: 'stretch' }} spacing={3}>
      {posts?.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Container>
  );
};

export default Posts;
