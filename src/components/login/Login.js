import React from 'react'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    
}
function Login(props){
    const { classes } = props
    return (
        <div>
            <Paper>
                login nerd.
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Login)