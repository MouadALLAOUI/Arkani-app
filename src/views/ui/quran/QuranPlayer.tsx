import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import AudioControl from '../../../component/AudioControl';
import SongSlider from '../../../component/songSlider';
import SongInfo from '../../../component/songInfo';
import { useAppSelector } from '../../../db/hooks';

const QuranPlayer = ({ trackId }: { trackId: number }) => {
  const theme = useAppSelector(state => state.theme.themeMode);
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
    case Event.PlaybackTrackChanged:
      // eslint-disable-next-line no-case-declarations
      const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
      setTrack(playingTrack);
      break;
    }
  });

  useEffect(() => {
    const fetchTrack = async () => {
      const track = await TrackPlayer.getTrack(trackId);
      if (track) {
        await TrackPlayer.add(track);
        setTrack(track);
        await TrackPlayer.play();
      }
    };

    fetchTrack();

    return () => {
      TrackPlayer.pause();
      TrackPlayer.removeUpcomingTracks();
    };
  }, [trackId]);

  

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.primaryColor,
      borderColor: theme.secondaryColor
    }}>
      <SongInfo track={track}/>
      <SongSlider />
      <AudioControl />
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