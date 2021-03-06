import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageTitle from "./../components/common/PageTitle";
import {  Container, CardMedia, CardActionArea } from "@material-ui/core";
import about from '../assets/images/analytics-illustration1.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from '../images/avatars/1.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({

  table: {
    
    minWidth: 650,
    MarginTop: '20px',
    margin: theme.spacing(1),
  },
  
  paperr:{
    marginTop: theme.spacing(10),
    height:'100%',
    dispay:'flex',
    justifyContent:'space-between',  
    alignContent:'center',
    alignItems:'center',
    textAlgn:'center',
    alignSelf:'center',
  },
  imgr:{
    marginLeft: theme.spacing(2),
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  divrr:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    margin:theme.spacing(3),

  },
  divr:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    margin:theme.spacing(3),

  },
  root: {
    maxWidth: 450,
    minHeight:175,
    borderRadius:12,
    marginTop:'6%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Container className= {classes.paperr}>
          <CssBaseline/>
        
        <PageTitle  title="Welcome"  className="text-sm-left mb-3" />
          <div className= {classes.imgr}>
             <img src={about} alt="this is home" />
            </div>
            
          
          <div className={classes.divrr}>
            <div>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="h1" gutterBottom>
                      Get Started
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        
                        <br />
                        {'•	Signup in the form'}
                        <br />
                        {'•	Wait for our feedback and Invoice'}
                        <br />
                       
                      </Typography>
                      <Button
            type="submit"
            halfWidth
            href='/signup'
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get Started
          </Button>
                    </CardContent>
                  </Card></div>
                  <br/>
          <div className={classes.divr}>   
            <h5 alignText="center" alignSelf='center'>The data generated is used to provide powerful Analytics and Business Intelligence Reports that enable:</h5>
          </div>
                  <div  className={classes.divr}>
                  <div className={classes.divrrr}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="h1" gutterBottom>
                      The sales Agents
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        
                      <br />
                        {'•	Oversee Planned and Productive Schedules'}
                        <br />
                        {'•	Live Tracking of Field Activities'}
                        <br />
                        {'•	Instant customer feedback'}
                        <br />
                        {'•	Performance and achievement analysis'}
                        <br />
                        {'•	Forecasting based on generated sales data'}
                        <br />
                        {'•	Forecasting based on generated sales data'}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="h1" gutterBottom>
                      The Managers
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        
                      <br />
                        {'•	Oversee Planned and Productive Schedules'}
                        <br />
                        {'•	Live Tracking of Field Activities'}
                        <br />
                        {'•	Instant customer feedback'}
                        <br />
                        {'•	Performance and achievement analysis'}
                        <br />
                        {'•	Forecasting based on generated sales data'}
                        <br />
                        {'•	Forecasting based on generated sales data'}
                      </Typography>
                    </CardContent>
                  </Card>
                </div></div>
                </div>
                <div className={classes.divr}>
                  <h3>Stories from the community</h3>
                </div>
                <div className={classes.divr}>
                  <div><Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Image}
                      component="img"
                      height="140"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard -KFC
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Definetly Recomended for use and sales boost
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  
                </Card></div>
                <div>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      
                      image={Image}
                      component="img"
                      height="140"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Josiah - Jiji
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Definetly Recomended for use and sales boost
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                </div>
                <div>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      image={Image}
                      component="img"
                      height="140"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Joseph -Jumia
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Definetly Recomended for use and sales boost
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                 
                </Card>
                </div>
                
                </div>
              
              
          
          
    </Container>
    
  );
}
