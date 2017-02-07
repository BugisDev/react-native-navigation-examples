import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Profile from '../Profile';

export default class Home extends React.Component {
  onNextPage() {
    this.props.navigator.push({
      component: Profile
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Page
        </Text>
        <Button
          color="teal"
          onPress={this.onNextPage.bind(this)}
          title="Next Page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
