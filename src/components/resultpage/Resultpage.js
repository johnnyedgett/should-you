import React from 'react'
import { withStyles, Grid, Typography } from '@material-ui/core';

const styles = {
    root: {

    }
}

function Resultpage(props){
    const { classes } = props
    return (
        <div
            className={classes.root}>
            <Grid 
                container 
                justify="center" 
                alignContent="center" 
                alignItems="center" 
                direction="column" 
                spacing={4}>
                <Grid item style={{ paddingTop: '15vh'}}>
                    <Typography 
                        variant="h4"
                        color="textSecondary"
                        style={{ fontFamily: 'Comic Sans'}}>
                        {props.history.location.state.string.charAt(0).toUpperCase()+props.history.location.state.string.substring(1)}?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography 
                        variant="body2"
                        color="textSecondary"
                        style={{ fontFamily: 'Comic Sans'}}>
                            Our experts say...
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h1"
                        color="textSecondary"
                        style={{ fontFamily: 'Comic Sans'}}>
                            YES!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}


export default withStyles(styles)(Resultpage)