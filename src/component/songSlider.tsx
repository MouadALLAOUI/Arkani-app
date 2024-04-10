import Slider from '@react-native-community/slider';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import { useAppSelector } from '../db/hooks';

function SongSlider(){
  const theme = useAppSelector(state => state.theme.themeMode);
  const {position, duration} = useProgress();

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
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
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
