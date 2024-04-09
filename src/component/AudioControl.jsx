import { useState, useEffect } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
// import TrackPlayer from 'react-native-track-player';

export default function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const track = {
  //   id: 1,
  //   url: "../res/audio/alfasy/001-al-fatihah.mp3", // Replace with your audio URL
  //   title: "fatihah",
  //   artist: "afasy",
  // };

  // useEffect(() => {
  //   // Setup the player
  //   setupPlayer();
  //   return () => {
  //     TrackPlayer.destroy();
  //   };
  // }, []);

  // async function setupPlayer() {
  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.add({
  //     id: '1',
  //     url: require('../res/audio/alfasy/001-al-fatihah.mp3'),
  //     title: 'fatihah',
  //     artist: 'afasy',
  //   });
  // }

  // async function togglePlayback() {
  //   const currentState = await TrackPlayer.getState();
  //   if (currentState === TrackPlayer.STATE_PAUSED || currentState === TrackPlayer.STATE_STOPPED) {
  //     await TrackPlayer.play();
  //     setIsPlaying(true);
  //   } else {
  //     await TrackPlayer.pause();
  //     setIsPlaying(false);
  //   }
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>test</Text>
      {/* <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} /> */}
    </View>
  );
}