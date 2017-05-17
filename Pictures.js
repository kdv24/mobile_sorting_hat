import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pictures extends React.Component {
  render() {
    return (
      <View>
        <Text></Text>
        <Text style={styles.images}>IMAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    backgroundColor: '#99cc00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingLeft: 10,
    height: 70,
    width: 70
  },

});
