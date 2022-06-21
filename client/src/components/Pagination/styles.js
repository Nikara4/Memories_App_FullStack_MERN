import { Paper } from '@mui/material';
import { Pagination } from '@material-ui/lab';
import { styled } from '@mui/material/styles';

export const PaginationComp = styled(Pagination)(({ theme }) => ({
  justifyContent: 'space-around',
}));

export const PaginationPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '10px',
  marginTop: '1rem',
  padding: '16px',
}));
