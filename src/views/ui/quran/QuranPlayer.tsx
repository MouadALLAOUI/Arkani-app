import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import AudioControl from '../../../component/AudioControl';
import SongSlider from '../../../component/songSlider';
import SongInfo from '../../../component/songInfo';
import { useAppSelector } from '../../../db/hooks';

const QuranPlayer = ({ trackId }: { trackId: number }) => {
  const theme = useAppSelector(state => state.theme.themeMode);
  const [track, setTrack] = useState<Track | null | undefined>(null);
  const [error, setError] = useState<string>('');
  const events = [
    Event.PlaybackActiveTrackChanged,
    Event.PlaybackError,
  ];

  useEffect(() => {
    const fetchTrack = async () => {
      const track = await TrackPlayer.getTrack(trackId);
      if (track) {
        await TrackPlayer.skip(trackId);
        setTrack(track);
        await TrackPlayer.play();
      }
    };

    fetchTrack();

    return () => {};
  }, [trackId]);

  useTrackPlayerEvents(events, async event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
      setError('Playback error occurred');
    }
    if (event.type === Event.PlaybackActiveTrackChanged) {
      // const playingTrack = await TrackPlayer.getTrack(event?.track?.id + 1);
      // setTrack(playingTrack);
      if (event.track) {
        setTrack(event?.track);
        setError('');
      } else {
        setError('No active track.');
      }
    }
  });

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.primaryColor,
      borderColor: theme.secondaryColor
    }}>
      <SongInfo track={track}/>
      <SongSlider />
      <AudioControl />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 15
  },
});

export default QuranPlayer;