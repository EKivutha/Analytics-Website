import React from 'react'
import {  Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import about from '../assets/images/about.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageTitle from "./../components/common/PageTitle";


const useStyles = makeStyles((theme)=>({
    
    paperr:{
      marginTop: theme.spacing(10),
      justifyContent:'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '70%',
      height:'100%'
    },
    divr:{
      display:'flex',
      marginTop: theme.spacing(2),
      flexDirection:'row',
      justifyContent:'space-around',

    },
    root: {
      maxWidth: 450,
      minHeight:175,
      borderRadius:12,
      
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
    rootr: {
        maxWidth: 380,
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
export default function About() {
    const classes = useStyles();
    

    
    return (
        <Container className= {classes.paperr} >
          <CssBaseline/>
        
            <PageTitle  title="About Analytics"  className="text-sm-left mb-3" />
            <div>
             <img src={about} alt="this is about" />
            </div>
          
            <div className={classes.divr}>
              <div>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="h1" gutterBottom>
                    <h3>Our Vision Statement</h3>
                    </Typography>
                    
                    <Typography variant="body2" component="p">
                      
                      <br />
                      {'To become a trustful partner in business'}
                      <br />
                      {',by offerin innovative,digital and customer centric solutions'}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className={classes.rootr}>
                <CardContent>
                  <Typography className={classes.title} color="h1" gutterBottom>
                  <h3>Our Mission Statement</h3>
                  </Typography>
                  
                  <Typography variant="body2" component="p">
                    
                    <br />
                    {'To provide easy-to-use, innovative, and reliable '}
                    <br />
                    {'solutions aimed at improving efficiency and overall output of customers'}
                  </Typography>
                </CardContent>
              </Card>
              </div>
              </div>  
        </Container>
        
    )
}
