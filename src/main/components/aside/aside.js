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
      overflow: 'ellipsis',
      color: theme.palette.text.secondary,
    },
    a: {
      color: 'blue',
    }
}));
const Aside = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
              <img src="" alt="" />
            </Box>
            <Paper className={classes.paper} textOverflow="ellipsis">
                <Typography>
                  &copy;<span>{new Date().getFullYear()} Tipestry</span>
                  <Link href="/">Faq</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Contest</Link>
                  <Link href="/">Policy</Link>
                  <Link href="/">Tipestry Go</Link>
                  <Link href="/">White Paper</Link>
                  <Link href="/">Tipestry for Chrome</Link>
                  <Link href="/">Terms and Condition</Link>
                </Typography>
                <Typography>
                  Follow Us on Social Media
                </Typography>
                <Box>
                  icons
                </Box>
            </Paper>
        </div>
    )
}

export default Aside;
