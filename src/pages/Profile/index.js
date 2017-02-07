import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Profile extends React.Component {
  onGoBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Page
        </Text>
        <Button
          color="teal"
          onPress={this.onGoBack.bind(this)}
          title="Go Back"
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
