/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {
  PaperAuth,
  AvatarAuth,
  FormAuth,
  ButtonSubmit,
  // ButtonGoogle,
} from './styles';
import Input from './Input/Input';
// import Icon from './Icon';
import { signIn, signUp } from '../../state/actions/auth';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = false;
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  {/* --------------------------------------------! NOT IN USE !-------------------------------------------- */}
  // const switchMode = () => {
  //   setIsSignUp((previsSignUp) => !previsSignUp);
  //   handleShowPassword(false);
  // };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: 'AUTH', data: { result, token } });
  //     navigate('../', { replace: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleFailure = () => {
  //   console.log('Google Sign In was unsuccessful. Try again later');
  // };

  return (
    <Container component='main' maxWidth='xs'>
      <PaperAuth elevation={3}>
        <AvatarAuth>
          <LockOutlinedIcon />
        </AvatarAuth>
        <Typography variant='h5'>
          {isSignUp ? 'Sign Up' : 'Admin Sing In'}
        </Typography>
        <FormAuth component='form' onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  half
                  name='firstName'
                  handleChange={handleChange}
                  autoFocus
                  label='First Name'
                />
                <Input
                  half
                  name='lastName'
                  handleChange={handleChange}
                  autoFocus
                  label='Last Name'
                />
              </>
            )}
            <Input
              name='email'
              handleChange={handleChange}
              label='Email Address'
              type='email'
            />
            <Input
              name='password'
              handleChange={handleChange}
              label='Password'
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPassword'
                handleChange={handleChange}
                label='Repeat Password'
                type={showPassword ? 'text' : 'password'}
              />
            )}
          </Grid>
          <Grid container>
            <Grid item sx={{ flexGrow: '1', marginTop: '20px' }}>
              <ButtonSubmit
                type='submit'
                fullWidth
                variant='contained'
                className='form--button'
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </ButtonSubmit>
            </Grid>
          </Grid>

          {/* --------------------------------------------! NOT IN USE !-------------------------------------------- */}
          {/* <GoogleLogin
            clientId='1002163414452-utnnbfokmkt8sugva2malkf4kp11gitm.apps.googleusercontent.com'
            render={(renderProps) => (
              <ButtonGoogle
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >
                Google Sign In
              </ButtonGoogle>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          /> */}
          {/*
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign up"}
              </Button>
          */}
        </FormAuth>
      </PaperAuth>
    </Container>
  );
};

export default Auth;
