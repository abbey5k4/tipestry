import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const ModalForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="outlined" color="primary" component="span">
                    UPLOAD
                </Button>
            </label>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="outlined" color="secondary" component="span">
                    REMOVE
                </Button>
            </label>

            <form  className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" fullWidth id="standard-full-width"/>
            </form>
        </div>
    )
}

export default ModalForm;
