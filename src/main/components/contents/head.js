import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    headOne: {
        display: 'flex',
    },
    iconOne: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    iconTwo: {},
}));
const Head = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Box component="div" className={classes.headOne}>
                        <Typography>
                            VIEW
                        </Typography>
                        <MenuIcon className={classes.iconOne} />
                        <ListIcon className={classes.iconTwo} />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    is a
                </Grid>
                <Grid item xs={4}>
                    grid
                </Grid>
            </Grid>
        </div>
    )
}

export default Head;
