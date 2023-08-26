import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MyFeature } from '@shehan97105/my-demo-scope.feature.my-feature';

export function AppConsumer() {
  return (
    <View style={styles.container}>
      <MyFeature />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
