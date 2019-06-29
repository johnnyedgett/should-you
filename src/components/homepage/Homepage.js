import React from 'react'
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import SearchBar from '../search/SearchBar';
import history from '../../util/history';

const styles = {
    root: {

    }
}

function Homepage(props){
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
                <Grid item style={{ paddingTop: '25vh'}}>
                    <Typography 
                        variant="h4"
                        color="textSecondary"
                        style={{ fontFamily: 'Comic Sans'}}>
                        Should you...
                    </Typography>
                </Grid>
                <Grid item>
                    <SearchBar/>
                </Grid>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={() => {
                            history.push({
                                pathname: "/results",
                                state: { string: '' }
                            })
                        }}>GO!</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Homepage)