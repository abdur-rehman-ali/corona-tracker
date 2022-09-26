import React from "react";
import CountUp from "react-countup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Confirmed
            </Typography>
            <Typography gutterBottom variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={0.75}
                separator=","
              />
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              Number of active COVID'19 cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography gutterBottom variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={0.75}
                separator=","
              />
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              Number of active COVID'19 cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography gutterBottom variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={0.75}
                separator=","
              />
            </Typography>
            <Typography gutterBottom color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography gutterBottom color="textSecondary">
              Number of active COVID'19 cases
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
