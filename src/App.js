import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Flag from 'react-world-flags'
import Moment from 'react-moment';

import './App.css';

const styles = {
  card: {
    margin: 20,
    maxWidth: 345,
    width: 200,
    height: 200,
  },
  media: {
    height: 140,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifContent: 'space-between',
  },
  title: {
    paddingTop: 30,
    width: '100%',
    align: 'center',
  },
  flag: {
    height: 100,
    width: 100,
  }
};

class App extends Component {


  render() {

    const { classes } = this.props;
    const today = new Date();
    return (
      <div>
      <Typography variant="display1" align="center" component="p" className={classes.title}>
        ROCHESTER ELECTRONICS OFFICE CLOCKS
      </Typography>
      <div  className={classes.content}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="us" height="64" />
                <Typography gutterBottom variant="h5" component="h2">
                  BOSTON
                </Typography>
                <Typography  component="p">
                  <Moment interval={0} >
                      {today}
                  </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="cn"  height="64"/>
                <Typography gutterBottom variant="h5" component="h2">
                  SHANGHAI
                </Typography>
                <Typography component="p">
                  <Moment interval={0} >
                    {today}
                   </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="jp"  height="64"/>
                <Typography gutterBottom variant="h5" component="h2" >
                  TOKYO
                </Typography>
                <Typography component="p">
                  <Moment interval={0} >
                     {today}
                  </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="de"  height="64"/>
                <Typography gutterBottom variant="h5" component="h2">
                  MUNICH
                </Typography>
                 <Typography component="p">
                  <Moment interval={0} >
                    {today}
                  </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Flag code="gb"  height="64"/>
            <Typography gutterBottom variant="h5" component="h2">
              LONDON
            </Typography>
            <Typography component="p">
              <Moment interval={0} >
                {today}
              </Moment>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Flag code="us"  height="64"/>
            <Typography gutterBottom variant="h5" component="h2">
              PHOENIX
            </Typography>
            <Typography variant="subtitle1" component="p">
              <Moment interval={0} >
                {today}
              </Moment>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Flag code="sg"  height="64"/>
          <Typography gutterBottom variant="h5" component="h2">
            SINGAPORE
          </Typography>
          <Typography component="p">
            <Moment interval={0} >
              {today}
            </Moment>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Flag code="us"  height="64" />
            <Typography gutterBottom variant="h5" component="h2">
              MINNEAPOLIS
            </Typography>
            <Typography component="p">
              <Moment interval={0} >
                {today}
              </Moment>
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>

      </div>
    </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
