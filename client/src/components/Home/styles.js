import { Container, Button, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));

export const ButtonSearch = styled(Button)(({ theme }) => ({
  margin: '10px 0',
}));

export const AppBarSearch = styled(AppBar)(({ theme }) => ({
  borderRadius: '10px',
  marginBottom: '1rem',
  display: 'flex',
  padding: '16px',
}));
