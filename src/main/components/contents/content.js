import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBar from './search';
import Head from './head';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const MainBody = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <SearchBar />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper className={classes.paper}>
                        <Head />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default MainBody;