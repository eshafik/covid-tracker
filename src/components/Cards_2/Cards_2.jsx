import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards_2.module.css';
import Spinner from '../Spinner/Spinner';

const Cards_2 = ({data, country}) => {
    console.log("Card2 Data:....", data)
    if(!data.total_cases){
        return <Spinner/>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths, styles.rank)}>
                    <CardContent>
                        <Typography color="textPrimary"  gutterBottom>Danger Rank of {country}</Typography>
                        <Typography variant="h2" className={styles.number}>
                            <CountUp
                                start={0}
                                end={data.total_danger_rank}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary"  gutterBottom>Total Cases</Typography>
                        <Typography variant="h5">
                            <b>
                                <CountUp
                                    start={0}
                                    end={data.total_cases}
                                    duration={2.5}
                                    separator=","
                                />
                            </b>
                        </Typography>
                        <Typography color="textSecondary">Active Cases:
                            <CountUp
                                start={0}
                                end={data.total_active_cases}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">New Cases:
                            <CountUp
                                start={0}
                                end={data.total_new_cases_today}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary"  gutterBottom>Total Recovered:</Typography>
                        <Typography variant="h5">
                            <b>
                                <CountUp
                                    start={0}
                                    end={data.total_recovered}
                                    duration={2.5}
                                    separator=","
                                />
                            </b>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary"  gutterBottom>Deaths</Typography>
                        <Typography variant="h6">
                            <b>
                                <CountUp
                                    start={0}
                                    end={data.total_deaths}
                                    duration={2.5}
                                    separator=","
                                />
                            </b>

                        </Typography>
                        <Typography color="textSecondary">New Deaths:
                            <CountUp
                                start={0}
                                end={data.total_new_deaths_today}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">Serious Cases:
                            <CountUp
                                start={0}
                                end={data.total_serious_cases}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>


            </Grid>
        </div>
    )
}

export default Cards_2;