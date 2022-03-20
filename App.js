import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import { LoadingWebView } from './components/loading'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const webRef = useRef(null);
  const avoidButtoms = () => {
    webRef.current.injectJavaScript(`
    document.querySelector("a[href='https://lmon.com/login?m=signup']").remove();
    document.querySelector("a[href='https://lmon.com/login?m=signup&u=business']").remove();
    `) 
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <WebView
    ref={webRef}
     style={styles.container}
     source={{
      uri: 'https://lmon.com/'
    }}
    renderLoading={LoadingWebView}
    onLoadEnd={avoidButtoms}
    startInLoadingState={true}
     />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
