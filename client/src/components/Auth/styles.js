import {
  Paper,
  Avatar,
  FormControl,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaperAuth = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const AvatarAuth = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const FormAuth = styled(FormControl)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0, 0),
}));

export const ButtonGoogle = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0, 2),
}));

// [theme.breakpoints.down('lg')]: {

// },
// [theme.breakpoints.down('md')]: {

// },
// '@media (max-width: 850px) and (orientation: landscape)': {

// }