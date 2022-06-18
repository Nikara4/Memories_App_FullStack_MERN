import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, TextField } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { Posts, Form, Pagination, TagsInput } from '../';
import { GridContainer, ButtonSearch, AppBarSearch } from './styles';
import { getPosts, getPostsBySearch } from '../../state/actions/posts';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedTagsItem, setSelectedTagsItem] = useState([]);

  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = (e) => {
    e.preventDefault();

    if (searchByTitle?.trim() || selectedTagsItem) {
      dispatch(
        getPostsBySearch({ searchByTitle, tags: selectedTagsItem.join(',') })
      );
      navigate(
        `../posts/search?searchQuery=${
          searchByTitle || 'none'
        }&tags=${selectedTagsItem.join(',')}`,
        { replace: true }
      );
    } else {
      navigate('../', { replace: true });
    }
  };

  // search by title

  const handleSearchByTitleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleSearchTitleChange = (e) => {
    setSearchByTitle(e.target.value);
  };

  // search by tags

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchByTagsKeyDown = (e) => {
    if (e.keyCode === 13) {
      const newSelectedItem = [...selectedTagsItem];
      const duplicatedValues = newSelectedItem.indexOf(e.target.value.trim());

      if (duplicatedValues !== -1) {
        setInputValue('');
        return;
      }
      if (!e.target.value.replace(/\s/g, '').length) return;

      newSelectedItem.push(e.target.value.trim());
      setSelectedTagsItem(newSelectedItem);
      setInputValue('');
    }
    if (selectedTagsItem.length && !inputValue.length && e.keyCode === 8) {
      setSelectedTagsItem(
        selectedTagsItem.slice(0, selectedTagsItem.length - 1)
      );
    }
  };

  const handleSearchTagsChange = (item) => {
    let newSelectedItem = [...selectedTagsItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedTagsItem(newSelectedItem);
  };

  const handleSearchTagsDelete = (item) => () => {
    const newSelectedItem = [...selectedTagsItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedTagsItem(newSelectedItem);
  };

  const handleSelectedTags = (items) => {
    // console.log(items);
  };

  return (
    <Grow in>
      <Container maxWidth='2xl'>
        <GridContainer
          sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}
          container='true'
          justify='space-between'
          spacing={3}
          maxWidth='2xl'
        >
          <Grid item xs={12} sm={6} md={9} sx={{ maxWidth: 1300 }}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBarSearch position='static' color='inherit'>
              <TextField
                name='memories'
                id='memories'
                label='Search Memories by Title'
                onKeyPress={handleSearchByTitleKeyPress}
                value={searchByTitle}
                fullWidth
                variant='outlined'
                onChange={handleSearchTitleChange}
              />
              <TagsInput
                selectedTags={handleSelectedTags}
                fullWidth
                variant='outlined'
                id='tags'
                name='tags'
                placeholder='write a word and press enter to add'
                label='Search Tags'
                handleInputChange={handleInputChange}
                handleDelete={handleSearchTagsDelete}
                handleKeyDown={handleSearchByTagsKeyDown}
                selectedItem={selectedTagsItem}
                handleChange={handleSearchTagsChange}
                inputValue={inputValue}
                setSelectedItem={setSelectedTagsItem}
              />
              <ButtonSearch
                onClick={searchPost}
                color='primary'
                variant='contained'
              >
                Search
              </ButtonSearch>
            </AppBarSearch>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Pagination />
          </Grid>
        </GridContainer>
      </Container>
    </Grow>
  );
};

export default Home;
