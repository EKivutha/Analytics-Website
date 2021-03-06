import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
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
}));
export default function Terms(){
    const classes = useStyles();
    return(
        <Container className= {classes.paperr}>
          <CssBaseline/>
        <div>
            
           <div>
            <h1>Terms And Conditions</h1>
            </div> 
            <div>
            <p>The Laws are binding</p>
            </div>
        </div>
        </Container>
        
        
    )
}