import { Paper, Box, FormControl, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaperForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '10px'
}));

export const ControlForm = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const ButtonSubmit = styled(Button)(() => ({  
   
  
  
  }));

export const FileInput = styled(Box)(({ theme }) => ({
  margin: '10px 0',
  '& input': {
    marginBottom: '5px',
  }
}));
