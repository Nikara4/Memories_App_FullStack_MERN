import { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../state/actions/posts';
import { PaperForm, ControlForm, FileInput } from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <PaperForm>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own memories and like others' memories.
        </Typography>
      </PaperForm>
    );
  }

  console.log(postData.tags);

  return (
    <PaperForm>
      <ControlForm
        autoComplete='off'
        component='form'
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentId ? 'Editing' : 'Creating'} a Memory
        </Typography>

        <TextField
          sx={{ margin: '8px 0 !important' }}
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          sx={{ margin: '8px 0 !important' }}
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          sx={{ margin: '8px 0 !important' }}
          name='tags'
          variant='outlined'
          label='Tags (separated by comma)'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.trim().split(',') })
          }
        />
        <FileInput>
          <FileBase
            type='File'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button
            className='form--button'
            variant='contained'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
          <Button
            className='form--button'
            variant='contained'
            size='small'
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </FileInput>
      </ControlForm>
    </PaperForm>
  );
};

export default Form;
