import React from 'react'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'flex'
    }
}

function Login(props){
    const { classes } = props
    return (
        <div
            className={classes.root}>
            <Paper>
                login nerd.
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Login)