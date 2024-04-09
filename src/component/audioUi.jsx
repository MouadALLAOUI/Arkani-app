import {
  useState,
  // useEffect
} from 'react';
import {
  // TouchableOpacity,
  Text,
  View,
  // ProgressBarAndroid
} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Audio } from "expo-av";

export default function AudioUi() {
  // const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  // const [position, setPosition] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const audioList = [
  //   require("../res/audio/001-al-fatihah.mp3"),
  //   require("../res/audio/002-al-baqarah.mp3"),
  //   require("../res/audio/003-al-imran.mp3"),
  //   // Add more audio files to the list as needed
  // ];
  
  // useEffect(() => {
  //   // Load the audio file when the component mounts
  //   const loadSound = async () => {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require("../res/audio/001-al-fatihah.mp3"),
  //       { isLooping }
  //     );
  //     setSound(sound);
  //   };

  // loadSound();

  // Unload the sound when the component unmounts
  //   return () => {
  //     if (sound) {
  //       sound.unloadAsync();
  //     }
  //   };
  // }, [isLooping]);

  // useEffect(() => {
  //   if (currentIndex < audioList.length) {
  //     loadSound();
  //   }
  // }, [currentIndex]);

  // useEffect(() => {
  //   // Update the position every 500 milliseconds when audio is playing
  //   let interval;
  //   if (isPlaying) {
  //     interval = setInterval(async () => {
  //       const status = await sound.getStatusAsync();
  //       setPosition(status.positionMillis);
  //       setDuration(status.durationMillis);
  //     }, 500);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isPlaying, sound]);

  // const playSound = async () => {
  //   if (sound) {
  //     const status = await sound.getStatusAsync();
  //     if (!status.isLoaded || status.isPlaying) {
  //       return;
  //     }
  //     await sound.playAsync();
  //     setIsPlaying(true);
  //   }
  // };

  // const pauseSound = async () => {
  //   if (sound) {
  //     await sound.pauseAsync();
  //     setIsPlaying(false);
  //   }
  // };

  // const stopSound = async () => {
  //   if (sound) {
  //     await sound.stopAsync();
  //     await sound.unloadAsync();
  //     setIsPlaying(false);
  //     setPosition(0);
  //     setDuration(0);
  //   }
  // };

  // const toggleLooping = () => {
  //   setIsLooping(!isLooping);
  // };

  // const seekForward = async () => {
  //   // if (sound) {
  //   const status = await sound.getStatusAsync();
  //   const newPosition = Math.min(status.positionMillis + 10000, status.durationMillis);
  //   await sound.setPositionAsync(newPosition);
  //   // }
  // };

  // const seekBackward = async () => {
  //   // if (sound) {
  //   const status = await sound.getStatusAsync();
  //   const newPosition = Math.max(status.positionMillis - 10000, 0);
  //   await sound.setPositionAsync(newPosition);
  //   // }
  // };

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60000);
  //   const seconds = ((time % 60000) / 1000).toFixed(0);
  //   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  // };

  // const progress = duration ? (position / duration) * 100 : 0;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{isPlaying ? 'Playing' : 'Not Playing'}</Text>
      <Text>{isLooping ? 'Disable Looping' : 'Enable Looping'}</Text>
    </View>
  );
}