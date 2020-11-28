import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Box, Typography } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      margin: '8px 0px',
      color: theme.palette.text.secondary,
    },
    paraText: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    iconFlex: {
        display: 'flex'
    }
}));
const CardOne = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={1} sm={1} md={1}>
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            123
                        </Typography>
                        <ThumbDownIcon />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        image
                    </Grid>
                    <Grid item xs={8} sm={8} md={8}>
                        <Typography variant="h6">
                            Tipestry - Twitter
                        </Typography>
                        <Typography variant="h6" className={classes.paraText}>
                            @riana84 a day ago #postoftheweek #potw #dogecoin #twitter (twitter.com)
                        </Typography>
                        <Box component="div" className={classes.iconFlex}>
                            <MessageIcon />
                            <Typography variant="p">
                                123
                            </Typography>
                            <ShareIcon />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            
        </div>
    )
}

export default CardOne;
