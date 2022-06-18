import { Card,
  CardMedia,
  Typography,
  CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
}));

export const PostCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  backgroundBlendMode: "darken",
}));

export const Title = styled(Typography)(({ theme }) => ({
  padding: "0 16px",
}));


export const PostCardActions = styled(CardActions)(({ theme }) => ({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
}));
