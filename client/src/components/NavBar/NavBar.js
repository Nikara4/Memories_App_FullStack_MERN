/*<a href="https://www.flaticon.com/free-icons/trip" title="trip icons">Trip icons created by Freepik - Flaticon</a> */

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import memories from '../../imgs/memories.png';
import {
  NavAppBar,
  NavToolbar,
  NavHeading,
  NavAvatar,
  UserName,
} from './styles';

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const login = (e) => {
  //   e.preventDefault();
  //   navigate('../auth', { replace: true });
  // };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('../', { replace: true });

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line
  }, [location]);

  return (
    <NavAppBar position='static' color='inherit'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavHeading component={Link} to='/' variant='h2' align='center'>
          Trips &#38; Memories
        </NavHeading>
        <img
          style={{
            marginLeft: '15px',
            '@media (maxWidth: 899px)': { height: 40 },
          }}
          src={memories}
          alt='memories'
          height='60'
        />
      </div>
      <NavToolbar>
        {user ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '400px',
            }}
          >
            <NavAvatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </NavAvatar>
            <UserName variant='h6' style={{ fontSize: '18px' }}>
              {user.result.name}
            </UserName>
            <Button
              variant='contained'
              className='nav--button'
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant='contained' className='nav--button'>
            <Link to='/auth' exact="true"> Admin</Link>
          </Button>
        )}
      </NavToolbar>
    </NavAppBar>
  );
};

export default NavBar;
