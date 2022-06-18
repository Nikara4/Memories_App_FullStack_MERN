import { PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { PaginationComp, PaginationPaper } from './styles';

const Pagination = () => {
  return (
    <PaginationPaper elevation={6}>
    <PaginationComp
      count={5}
      page={1}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
    </PaginationPaper>
  );
};

export default Pagination;
