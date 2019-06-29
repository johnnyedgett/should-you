import React, { useState, useEffect } from 'react'
import { withStyles, TextField, Input, Popover, List, ListItem } from '@material-ui/core'
import axios from 'axios'
import history from '../../util/history'

const googleSearchUrl = "http://suggestqueries.google.com/complete/search?client=chrome&q="

const styles = {
    root: {
        width: '80vw'
    },
    search: {
        backgroundColor: '#FFFFFF'
    }
}
function SearchBar(props){
    const { classes } = props
    const [searchValue, setSearchValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [anchorEl, setAnchorEl] = useState(null)
    const [popoverOpen, setPopoverOpen] = useState(false)

    useEffect(() => {
        console.log('Search google here.')
        setPopoverOpen(true)
        axios.get(`${googleSearchUrl}should%20you%20${searchValue}`)
            .then(res => {
                setSuggestions(res.data[1].slice(0, 5))
            })
            .catch(err => {

            })
    }, [searchValue])

    useEffect(() => {
        console.log(suggestions)
    }, [suggestions])

    return ( 
        <div
            className={classes.root}>
            <TextField
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    setAnchorEl(e.currentTarget)
                    console.log(e.target)
                }}
                className={classes.search}
                fullWidth={true}
                variant="outlined"
                label="Should you..."
                aria-controls="simple-menu" 
                aria-haspopup="true"
                id="searchBar"
                InputProps={<Input id="searchBar"/>}
            />
            <Popover
                open={popoverOpen}
                anchorEl={anchorEl}
                disableAutoFocus={true}
                onClose={() => setPopoverOpen(false)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                style ={{ 
                    marginLeft: '9vw',
                    minWidth: '80vw' 
                }}>
                    <List>
                        {suggestions.map((s, i) => {
                            return (
                                <ListItem 
                                    button
                                    onClick={() => {
                                        history.push({
                                            pathname: "/results",
                                            state: { string: s }
                                        })
                                    }}
                                    key={i}>
                                    {s}
                                </ListItem>
                            )
                        })}
                    </List>

            </Popover>
            {/* <Menu
                anchorEl={anchorEl}
                open={!isEmpty(searchValue)}
                style={{ width: '100vw', height: '100vh', zIndex: '100' }}>
                <MenuItem>Hello!</MenuItem>
                <MenuItem>Hello!</MenuItem>
                <MenuItem>Hello!</MenuItem>
                <MenuItem>Hello!</MenuItem>
                <MenuItem>Hello!</MenuItem>
                <MenuItem>Hello!</MenuItem>
            </Menu> */}
        </div>
    )
}

export default withStyles(styles)(SearchBar)