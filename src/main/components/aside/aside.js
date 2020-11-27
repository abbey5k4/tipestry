import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    MuiLink: {
      color: 'blue',
      marginLeft: '10px'
    }
}));
const Aside = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
              <Link href="/">#discussion</Link>
              <Link href="/">#in</Link>
              <Link href="/">#youtube</Link>
              <Link href="/">#extincs</Link>
              <Link href="/">#animals</Link>
              <Link href="/">#living</Link>
              <Link href="/">#largest</Link>
              <Link href="/">#vs</Link>
              <Link href="/">#crypto</Link>
              <Link href="/">#discussion</Link>
              <Link href="/">#in</Link>
              <Link href="/">#youtube</Link>
              <Link href="/">#extincs</Link>
              <Link href="/">#animals</Link>
              <Link href="/">#living</Link>
              <Link href="/">#largest</Link>
              <Link href="/">#vs</Link>
              <Link href="/">#crypto</Link>
              
            </Paper>
            <Box>
              <img src="" alt="" />
            </Box>
            <Paper className={classes.paper}>
                <Typography>
                  &copy;<span>{new Date().getFullYear()} Tipestry</span>
                </Typography>
                <Link href="/">Faq</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Contest</Link>
                  <Link href="/">Policy</Link>
                  <Link href="/">Tipestry Go</Link>
                  <Link href="/">White Paper</Link>
                  <Link href="/">Tipestry for Chrome</Link>
                  <Link href="/">Terms and Condition</Link>
                <Typography>
                  Follow Us on Social Media
                </Typography> <br />
                <Box>
                  icons
                </Box>
            </Paper>
        </div>
    )
}

export default Aside;
