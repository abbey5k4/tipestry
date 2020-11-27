import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    search: {
        display: 'flex'
    },
    icon: {
        marginTop: '12px',
    } 
}));
const SearchBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}> 
                <div className={classes.search}>
                    <SearchIcon className={classes.icon} />
                    <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Enter a URL"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button size="small">Load</Button>
                </div>
            </Paper>
        </div>
    )
}

export default SearchBar;
