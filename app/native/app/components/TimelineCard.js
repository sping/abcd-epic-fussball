import React, { Component } from 'react';

import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import {
  Card,
  Button
} from 'react-native-elements';

import colors from '../config/colors';

class TimelineCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <View style={styles.headerView}>
          <Text style={styles.time}>
            {this.props.time}
          </Text>
          <Text style={styles.date}>
            {this.props.date}
          </Text>
        </View>
        <View style={styles.containerView}>
          <View style={styles.teamAView}>
            <Text style={styles.playerText}>
              {this.props.player1}
            </Text>
            <Text style={styles.playerText}>
              {this.props.player2}
            </Text>
          </View>
          <View style={styles.scoreView}>
            <Text style={styles.scoreText}>
              {this.props.score}
            </Text>
          </View>
          <View style={styles.teamBView}>
            <Text style={styles.playerText}>
              {this.props.player3}
            </Text>
            <Text style={styles.playerText}>
              {this.props.player4}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    height: 30
  },
  time: {
    flex: 1,
    fontSize: 12
  },
  date: {
    fontSize: 12
  },
  playerText: {
    fontSize: 16
  },
  containerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  teamAView: {
    width: 80,
    alignItems: 'flex-start'
  },
  teamBView: {
    width: 80,
    alignItems: 'flex-end'
  },
  scoreView: {
    width: 100,
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 30
  }
})

export default TimelineCard;
