import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

import Post from './Post/Post';
import { Container } from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts);

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Container container sx={{ alignItems: 'stretch' }} spacing={3}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Container>
  );
};

export default Posts;
