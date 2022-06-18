import {
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { PostCard, PostCardMedia, Title, PostCardActions } from './styles';
import { deletePost, likePost } from '../../../state/actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize='small' />
        &nbsp;Like
      </>
    );
  };

  return (
    <PostCard>
      <PostCardMedia image={post.selectedFile} title={post.title} />

      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'white',
        }}
      >
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '5px',
            color: 'white',
          }}
        >
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize='medium' />
          </Button>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <Typography
          variant='body2'
          style={{ fontSize: 12 }}
          color='textSecondary'
          component='p'
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Title variant='h6' gutterBottom style={{ color: '#326D90' }}>
        {post.title}
      </Title>
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>

      <PostCardActions>
        <Button
          size='small'
          onClick={() => dispatch(likePost(post._id))}
          style={{ color: '#8481EC' }}
          disabled={!user?.result}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size='small'
            onClick={() => dispatch(deletePost(post._id))}
            style={{ color: '#8481EC' }}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        )}
      </PostCardActions>
    </PostCard>
  );
};

export default Post;
