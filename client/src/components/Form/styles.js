import {
  Paper,
  Box,
  FormControl,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaperForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const ControlForm = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "10px 0",
  backgroundColor: "#8481EC",
}));

export const FileInput = styled(Box)(({ theme }) => ({
  width: "97%",
  margin: "10px 0",
}));
