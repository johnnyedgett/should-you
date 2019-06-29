import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import { withStyles, ThemeProvider } from '@material-ui/styles';
import Navbar from '../navbar/Navbar';
import { createMuiTheme, Typography } from '@material-ui/core';
import Resultpage from '../resultpage/Resultpage';
import Login from '../login/Login'

const styles = {
    root: {
        backgroundColor: '#f4b8ff',
        minHeight: '102vh'
    }
}

const theme = createMuiTheme({
    palette: {
        text: {
            secondary: '#7c2c80'
        }
    }
})

function App(props){
    const { classes } = props
    
    return (
        <ThemeProvider theme={theme}>
            <div
                className={classes.root}>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/results" component={Resultpage}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={() => {
                            return (
                                <div
                                    style={{ textAlign: 'center' }}>
                                        <Typography 
                                            variant="h3"
                                            color="textSecondary"
                                            style={{ fontFamily: 'Comic Sans'}}>
                                                404 - Not Found
                                            </Typography>
                                </div>
                            )
                        }}/>
                    </Switch>
            </div>
        </ThemeProvider>
    )
}

export default withStyles(styles)(App)