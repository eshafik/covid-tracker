import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Bangladesh" value="/" component={Link} to="/"/>
                <Tab label="Global" value="/global" component={Link} to="/global"/>
                <Tab label="About Me" value="/about" component={Link} to="/about" />
            </Tabs>
        </Paper>
    );
}