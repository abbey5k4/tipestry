import React from "react";
import Navbar from "../src/Header/Navbar";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBody from "../src/main/components/contents/content";
import Aside from "../src/main/components/aside/aside";

const useStyles = makeStyles((theme) => ({
    header: {
        width: "100%",
        backgroundColor: "#3a6dc5"
    },
    wrapper: {
        paddingTop: '20px',
    }
}));
  
const Tipestry = () => {
    const classes = useStyles();
    return (
        <div>
            <Box maxWidth="md" className={classes.header}>
                <Navbar />
            </Box>
            <Container maxWidth="md" className={classes.wrapper}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <MainBody />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Aside />
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    );
}

export default Tipestry;