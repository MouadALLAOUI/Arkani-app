import {
  View,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, {State, usePlaybackState, useProgress} from 'react-native-track-player';

import { useAppSelector } from '../db/hooks';

export default function AudioControl() {
  const theme = useAppSelector((state) => state.theme.themeMode);
  const {position, duration} = useProgress();
  const playBackState = usePlaybackState();
  // next btn
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // previous btn
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const  currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const rollBack = async () => {
    if (position >= 30) {
      TrackPlayer.seekTo(position - 30);
    }
  };

  const goForward = async () => {
    if (position <= duration) {
      TrackPlayer.seekTo(position + 30);
    }
  };

  return (
    <View
      style={{
        ...style.audiocontrol,
        backgroundColor: theme.onPrimaryColor,
        borderColor: theme.secondaryColor,
      }}>
      <Pressable onPress={skipToPrevious}>
        <Icon name="fast-backward" size={20} color={theme.primaryColor} />
      </Pressable>
      <Pressable onPress={rollBack}>
        <Icon name="backward" size={20} color={theme.primaryColor} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon name={playBackState ===  State.Playing ? 'pause' : 'play'} size={20} color={theme.primaryColor} />
      </Pressable>
      <Pressable onPress={goForward}>
        <Icon name="forward" size={20} color={theme.primaryColor} />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="fast-forward" size={20} color={theme.primaryColor} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  audiocontrol: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 3,
  },
  text: {
    position: 'relative',
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
