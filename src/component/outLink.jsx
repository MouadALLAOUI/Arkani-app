import React, {useCallback} from 'react';
import {Alert, Linking, Pressable, Text} from 'react-native';

const OpenURL = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Pressable onPress={handlePress} ><Text>{children}</Text></Pressable>;
};

export default OpenURL;