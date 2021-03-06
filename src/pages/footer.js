import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

export default function Footer() {
    return (
        
        <AppBar position="static" color="primary" >
            <div className="footer">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            Analytics App
                        </Typography>
                    </Toolbar>
               </Container>
            </div>
          
        </AppBar>
    )
}