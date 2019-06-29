import React from 'react'
import { AppBar, Toolbar, withStyles, IconButton } from '@material-ui/core';
import { Person } from '@material-ui/icons'
import history from '../../util/history';

const styles = {
    root: {
        background: 'transparent'
    },
    iconButton: {
        marginLeft: '95%'
    }
}

function Navbar(props){
    const { classes } = props
    return (
        <AppBar
            className={classes.root}
            position="absolute"
            elevation={0}>
                <Toolbar>
                    <IconButton
                        className={classes.iconButton}
                        onClick={() => history.push("/login")}>
                        <Person/>
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}

export default withStyles(styles)(Navbar)