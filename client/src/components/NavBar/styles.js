import { deepPurple } from "@mui/material/colors";
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px auto",
  width: '99%',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
  backgroundColor: '#c8e1cc'
}));

export const NavToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "335px",
}));

export const NavHeading = styled(Typography)(({ theme }) => ({
  color: '#347363',
  textDecoration: "none",
  fontFamily: `'Preahvihear', sans-serif `,
  fontSize: 52,
  [theme.breakpoints.down("sm")]: {
      fontSize: 40,
  },
}));

export const NavAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));

export const UserName = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const ButtonSignIn = styled(Button)(({ theme }) => ({ backgroundColor: "#8481EC", color: "white" }));

