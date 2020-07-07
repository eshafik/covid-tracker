import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MyImage from '../assets/shafik.jpeg';
import styles from './About.module.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={styles.about}>
            <img src={MyImage} alt="" className={styles.image}/>
            <div>
                <h2 className={styles.name}>MSI Shafik</h2>
            </div>
            <div>
                <p className={styles.des}>(Software Engineer)</p>
            </div>
        </div>

    );
}