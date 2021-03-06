import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(15),
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-around',
      height:'100%',
      alignItems:'stretch',
      
    },
    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      marginleft: theme.spacing(0),
    },
    submit: {
      margin: theme.spacing(10, -5, 5),
    },
    textf:{
        width:'70%',
    },
    root: {
        maxWidth: 350,
        borderRadius:15,
      },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    },
    title: {
    fontSize: 14,
    },
    pos: {
    marginBottom: 12,
    },
  }));

export default function Contact() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container className={classes.paper} >
      <CssBaseline />
      <div >
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            className={classes.textf}
          />
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
            className={classes.textf}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="feedback"
            label="feedback"
            type="feedback"
            id="password"
            className={classes.textf}

          />
          
          <Button
            type="submit"
            halfWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <div>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Westlands
        </Typography>
        <Typography variant="h5" component="h2">
          P{bull}O{bull}Box, 70
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          munene@gmail.com
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          {'07000000'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Give Feedback</Button>
      </CardActions>
    </Card>
      </div>
    </Container>
  );
}
