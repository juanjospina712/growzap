// @flow
import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
export const Loading = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ActivityIndicator size={ Platform.OS === 'ios' ? 'large' : 50} color="#0E2C66" style={{ marginTop: 10}} />
  </View>
);

export const LoadingWebView = () => {
  return(
    <View style={{ height: '100%' }}>
      <Loading />
    </View>
  )
}
