import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

import Post from './Post/Post';
import { Container } from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  const postsReverse = posts
    .slice(0)
    .reverse()
    .map((el) => {
      return el;
    });

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Container container sx={{ alignItems: 'stretch' }} spacing={3}>
      {postsReverse.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Container>
  );
};

export default Posts;
