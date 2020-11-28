import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Box, Typography } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';   
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import { BorderBottom } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        margin: '8px 0px',
        color: theme.palette.text.secondary,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    handleArea: {
        display: 'flex',
        flexDirection: 'column',
    },
    iconsArea: {
        display: 'flex'
    },
    iconOne: {
        display: 'flex',
        BorderBottom: '2px solid blue',
        padding: '3px 3px 3px 0'
    },
    iconTwo: {
        display: 'flex', 
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
}));
  
const CardTwo = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Box component="div" className={classes.root}>
                    <Avatar className={classes.orange}>R</Avatar>
                    <Box component="div" className={classes.handleArea}>
                        <Link href="/">
                            @arianaGrande
                        </Link>
                        <Typography variant="p">
                            a day ago
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" >
                    <Typography variant="h6">
                        Tipestry - Twitter
                    </Typography>
                    <Typography variant="h6" className={classes.paraText}>
                        #postoftheweek #potw #dogecoin #twitter 
                    </Typography>
                </Box>
                <Box component="div" className={classes.imageArea}>
                    image
                </Box>
                <Link href="/">
                    (twitter.com)
                </Link>
                <Box component="div" className={classes.iconsArea}>
                    <Box component="div" className={classes.iconOne} >
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            123
                        </Typography>
                        <ThumbDownIcon />
                    </Box>
                    <Box component="div" className={classes.iconTwo}>
                        <MessageIcon />
                        <Typography variant="p">
                            123
                        </Typography>
                        <ShareIcon />
                    </Box>
                </Box>
                <Divider className={classes.dividerFullWidth} display="block"/>
            </Paper>
            <Paper className={classes.paper}>
                <Box component="div" className={classes.root}>
                    <Avatar className={classes.orange}>R</Avatar>
                    <Box component="div" className={classes.handleArea}>
                        <Link href="/">
                            @tundeEdnut
                        </Link>
                        <Typography variant="p">
                            a day ago
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" >
                    <Typography variant="h6">
                        I now have papers!!!
                    </Typography>
                    <Typography variant="h6" className={classes.paraText}>
                        #postoftheweek #potw #dogecoin #twitter 
                    </Typography>
                </Box>
                <Box component="div" className={classes.imageArea}>
                    image
                </Box>
                <Link href="/">
                    (twitter.com)
                </Link>
                <Box component="div" className={classes.iconsArea}>
                    <Box component="div" className={classes.iconOne} >
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            123k
                        </Typography>
                        <ThumbDownIcon />
                    </Box>
                    <Box component="div" className={classes.iconTwo}>
                        <MessageIcon />
                        <Typography variant="p">
                            123k
                        </Typography>
                        <ShareIcon />
                    </Box>
                </Box>
                <Divider className={classes.dividerFullWidth} display="block"/>
            </Paper>
            <Paper className={classes.paper}>
                <Box component="div" className={classes.root}>
                    <Avatar className={classes.orange}>R</Avatar>
                    <Box component="div" className={classes.handleArea}>
                        <Link href="/">
                            @davidoDMW
                        </Link>
                        <Typography variant="p">
                            a day ago
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" >
                    <Typography variant="h6">
                        I am the biggest in Nigeria
                    </Typography>
                    <Typography variant="h6" className={classes.paraText}>
                        #postoftheweek #potw #dogecoin #twitter 
                    </Typography>
                </Box>
                <Box component="div" className={classes.imageArea}>
                    image
                </Box>
                <Link href="/">
                    (twitter.com)
                </Link>
                <Box component="div" className={classes.iconsArea}>
                    <Box component="div" className={classes.iconOne} >
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            198k
                        </Typography>
                        <ThumbDownIcon />
                    </Box>
                    <Box component="div" className={classes.iconTwo}>
                        <MessageIcon />
                        <Typography variant="p">
                            123k
                        </Typography>
                        <ShareIcon />
                    </Box>
                </Box>
                <Divider className={classes.dividerFullWidth} display="block"/>
            </Paper>
            <Paper className={classes.paper}>
                <Box component="div" className={classes.root}>
                    <Avatar className={classes.orange}>R</Avatar>
                    <Box component="div" className={classes.handleArea}>
                        <Link href="/">
                            @djkhalid1
                        </Link>
                        <Typography variant="p">
                            a day ago
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" >
                    <Typography variant="h6">
                        We're the best!
                    </Typography>
                    <Typography variant="h6" className={classes.paraText}>
                        #postoftheweek #potw #dogecoin #twitter 
                    </Typography>
                </Box>
                <Box component="div" className={classes.imageArea}>
                    image
                </Box>
                <Link href="/">
                    (twitter.com)
                </Link>
                <Box component="div" className={classes.iconsArea}>
                    <Box component="div" className={classes.iconOne} >
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            12M
                        </Typography>
                        <ThumbDownIcon />
                    </Box>
                    <Box component="div" className={classes.iconTwo}>
                        <MessageIcon />
                        <Typography variant="p">
                            2M
                        </Typography>
                        <ShareIcon />
                    </Box>
                </Box>
                <Divider className={classes.dividerFullWidth} display="block"/>
            </Paper>
            <Paper className={classes.paper}>
                <Box component="div" className={classes.root}>
                    <Avatar className={classes.orange}>R</Avatar>
                    <Box component="div" className={classes.handleArea}>
                        <Link href="/">
                            @shaq8789
                        </Link>
                        <Typography variant="p">
                            a day ago
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" >
                    <Typography variant="h6">
                        Let's talk business
                    </Typography>
                    <Typography variant="h6" className={classes.paraText}>
                        #postoftheweek #potw #dogecoin #twitter 
                    </Typography>
                </Box>
                <Box component="div" className={classes.imageArea}>
                    image
                </Box>
                <Link href="/">
                    (twitter.com)
                </Link>
                <Box component="div" className={classes.iconsArea}>
                    <Box component="div" className={classes.iconOne} >
                        <ThumbUpAltIcon />
                        <Typography variant="p">
                            198
                        </Typography>
                        <ThumbDownIcon />
                    </Box>
                    <Box component="div" className={classes.iconTwo}>
                        <MessageIcon />
                        <Typography variant="p">
                            300
                        </Typography>
                        <ShareIcon />
                    </Box>
                </Box>
                <Divider className={classes.dividerFullWidth} display="block"/>
            </Paper>
        </div>
    )
}

export default CardTwo;
