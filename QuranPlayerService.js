import TrackPlayer, {RepeatMode, Event} from 'react-native-track-player';
import {QuranListData} from './src/variant/constants';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = false;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add(QuranListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());
  TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());
}
