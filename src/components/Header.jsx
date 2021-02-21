import React from "react";
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import AppleIcon from '@material-ui/icons/Apple';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    title: {
        flexGrow: 1,
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Material-ui
                    </Typography>
                    <AppleIcon />
                </Toolbar>
            </AppBar>
        </div>    
    );
};

export default Header;