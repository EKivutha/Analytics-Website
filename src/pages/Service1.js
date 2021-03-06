import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Faq from "react-faq-component";
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageTitle from "./../components/common/PageTitle";
import {  Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const data = {
  title: "How it works",
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

const useStyles = makeStyles((theme) => ({
  
  inline: {
    display: 'inline',
  },
  paperr:{
    marginTop: theme.spacing(10),
    height:'100%',
    dispay:'flex',
    justifyContent:'space-between', 
    flexDirection: 'column', 
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  imgr:{
    marginLeft: theme.spacing(2),
    alignSelf:'center',
  },
  divr:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',

  },
  root: {
    maxWidth: 450,
    minHeight:200,
    borderRadius:12,
    marginTop:'6%',
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
  paper:{
    margin: theme.spacing(3, 0, 2),
  },
  
}));
const config = {
  animate: true,
  arrowIcon: '+',
  tabFocus: false,
};
const stylesr = {
  bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: 'grey',
  arrowColor: "red",
};

export default function Servicea() {
  const classes = useStyles();

  return (
      <Container className = {classes.paperr}>
        <CssBaseline/>
        
          <PageTitle  title="Visits Management"  className="text-sm-left mb-3" />
       
         <div className={classes.divr}>
                 
                <div>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="h1" gutterBottom>
                      Visits Management
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        
                      <br />
                        {'•	The selling processes – on-site order-taking, invoicing '}
                        <br />
                        {'•	Real time Inventory Management'}
                        <br />
                        {'•	Reports and Analytics'}
                        <br />
                        {'•	 Dedicated Support'}
                      </Typography>
                    </CardContent>
                  </Card>
            
        </div>
        </div>
        <div>
                 <h1 className={classes.divr}>FAQS</h1>    
                <Faq
                    data={data}
                    style={stylesr}
                    config={config}
                />  
            </div>
        <div>
        <Container component="main" maxWidth="xs">
      
                <div className={classes.paper}>
                  
                  <Typography component="h1" variant="h5">
                    Feedback
                  </Typography>
                  <form className={classes.form} noValidate>
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
              </Container>
            </div>
            
    </Container>
    
  );
}
