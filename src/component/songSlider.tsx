import Slider from '@react-native-community/slider';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import { useAppSelector } from '../db/hooks';

function SongSlider(){
  const theme = useAppSelector(state => state.theme.themeMode);
  const {position, duration} = useProgress();

  function formatTime(seconds: number): string {
    const h: number = Math.floor(seconds / 3600);
    const m: number = Math.floor((seconds % 3600) / 60);
    const s: number = Math.floor(seconds % 60);

    const hDisplay: string = h < 10 ? '0' + h : h.toString();
    const mDisplay: string = m < 10 ? '0' + m : m.toString();
    const sDisplay: string = s < 10 ? '0' + s : s.toString();

    if ( h <= 0 && m <= 0) {
      return `${sDisplay}s`;
    } else if (h <= 0) {
      return `${mDisplay}:${sDisplay}`;
    } else {
      return `${hDisplay}:${mDisplay}:${sDisplay}`;
    }
  }

  return (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
      <Slider
        value={position}
        onValueChange={async (change) => {
          await TrackPlayer.seekTo(change);
        }
        }
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor={theme.secondaryColor}
        maximumTrackTintColor={theme.secondaryColor}
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {formatTime(position)}
        </Text>
        <Text style={styles.time}>
          {formatTime(duration - position)}
        </Text>
        <Text style={styles.time}>
          {formatTime(duration)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
  },
  timeContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
  },
});

export default SongSlider;
