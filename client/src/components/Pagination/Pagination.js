import { useEffect } from 'react'
import { PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../state/actions/posts';
import { PaginationComp, PaginationPaper } from './styles';

const Pagination = ({page}) => {
  const {numberOfPages} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if(page) dispatch(getPosts(page));
  }, [page, dispatch]);

  return (
    <PaginationPaper elevation={6}>
    <PaginationComp
      count={numberOfPages}
      page={Number(page) || 1}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
    </PaginationPaper>
  );
};

export default Pagination;
