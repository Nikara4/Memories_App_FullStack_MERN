import { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input/Input";
import Icon from "./Icon";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleFormSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignUp((previsSignUp) => !previsSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = (res) => {
    console.log(res);
  };
  const googleFailure = () => {
    console.log("Google Sign In was unssuccesful.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sing In"}</Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  half
                  name="firstName"
                  handleChange={handleChange}
                  autoFocus
                  label="First Name"
                />
                <Input
                  half
                  name="secondName"
                  handleChange={handleChange}
                  autoFocus
                  label="Second Name"
                />
              </>
            )}
            <Input
              name="email"
              handleChange={handleChange}
              label="Email Address"
              type="email"
            />
            <Input
              name="password"
              handleChange={handleChange}
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                handleChange={handleChange}
                label="Repeat Password"
                type={showPassword ? "text" : "password"}
              />
            )}
          </Grid>
          <GoogleLogin
            clientId="GOOGLE_ID"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
