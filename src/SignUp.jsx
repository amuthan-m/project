import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirmPassword, setCpass] = useState('');
  const [Show, setShow] = useState(false);
  const apiurl = 'https://6564375eceac41c0761da2b1.mockapi.io/Skcet/userd';
  const login = () => {
    nav('/login');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission - log email and password
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Confirm Password:', confirmPassword);
    // Here, you can perform actual form submission logic (e.g., API call)
    if (password === confirmPassword && password !== '' && email !== '') {
      alert("Successfully registered");
      axios.post(apiurl, { email, password})
      .then(response => {
        console.log(response.data);
        setShow(true);
        login();
      })
      .catch(error =>{
        console.error('Error during login:',error);
        setShow(false);
      })
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setCpass(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
