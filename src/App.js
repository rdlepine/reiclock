import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Flag from 'react-world-flags'
import Moment from 'react-moment'
import 'moment-timezone'
import Logo from './images/logo_rocelec.png'

import './App.css';

const styles = {
  card: {
    flex: '1 0 33%',
    margin: 20,
    maxWidth: 350,
    width: 200,
    height: 200,
    backgroundImage: 'linear-gradient(#ece9e6, #FFFFFF)'
  },
  media: {
    height: 140,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    paddingTop: 30,
    width: '100%',
    align: 'center',
  },
  flag: {
    height: 70,
    width: 700,
    paddingBottom: 10,
  },
};

class App extends Component {

  state = {
    today: new Date(),
  }

  setToday() {
    console.log('in')
    this.setState({today: new Date()})
  }

  componentDidMount() {
    setInterval(this.setToday.bind(this), 6000);
  }

  render() {

    const { classes } = this.props
    const { today } = this.state
    
    return (
      <div>
      <Logo />
      <Typography variant="display1" align="center" component="p" className={classes.title}>
        ROCHESTER ELECTRONICS OFFICE CLOCKS 
      </Typography>
      <div  className={classes.content}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="us" height="48" />
                <Typography gutterBottom variant="h5" component="h2">
                  BOSTON
                </Typography>
                <Typography  component="p">
                  <Moment interval={10000} format="LLLL">
                    {today}
                  </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Flag code="us"  height="48" />
              <Typography gutterBottom variant="h5" component="h2">
                MINNEAPOLIS
              </Typography>
              <Typography component="p">
                <Moment interval={3000} tz="America/Chicago" format="LLLL">
                  {today}
                </Moment>
              </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Flag code="us"  height="48"/>
              <Typography gutterBottom variant="h5" component="h2">
                PHOENIX
              </Typography>
              <Typography variant="subtitle1" component="p">
                <Moment interval={3000} tz="America/Phoenix" format="LLLL">
                  {today}
                </Moment>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Flag code="gb" height="48" />
              <Typography gutterBottom variant="h5" component="h2">
                LONDON
              </Typography>
              <Typography component="p">
                <Moment interval={0} tz="Europe/London" format="LLLL">
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
                  <Moment tz="Europe/Berlin" format="LLLL">
                    {today}
                  </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="cn"  height="48"/>
                <Typography gutterBottom variant="h5" component="h2">
                  SHANGHAI
                </Typography>
                <Typography component="p">
                  <Moment interval={3000}  tz="Asia/Shanghai" format="LLLL">
                    {today}
                   </Moment>
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Flag code="sg"  height="48"/>
              <Typography gutterBottom variant="h5" component="h2">
                SINGAPORE
              </Typography>
              <Typography component="p">
                <Moment interval={3000} tz="Singapore" format="LLLL" format="LLLL">
                  {today}
                </Moment>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Flag code="jp"  height="48"/>
                <Typography gutterBottom variant="h5" component="h2" >
                  TOKYO
                </Typography>
                <Typography component="p">
                  <Moment interval={3000} tz="Asia/Tokyo" format="LLLL">
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
