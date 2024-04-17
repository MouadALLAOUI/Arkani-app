import TrackPlayer, {RepeatMode, Event} from 'react-native-track-player';
import {QuranListData} from './src/variant/constants';

let isPlayerInitialized = false;

export async function setupPlayer() {
  if (isPlayerInitialized) {
    return true;
  }

  try {
    await TrackPlayer.setupPlayer();
    isPlayerInitialized = true;
    return true;
  } catch (error) {
    console.error('Error initializing TrackPlayer:', error);
    return false;
  }
}

export async function addTrack() {
  try {
    const currentQueue = await TrackPlayer.getQueue();
    const tracksToAdd = QuranListData.filter(track => !currentQueue.find(queuedTrack => queuedTrack.id === track.id));

    await TrackPlayer.add(tracksToAdd);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  } catch (e) {
    console.error('Error adding track:', e);
  }
}

export async function playbackService() {
  const pauseListener = TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  const playListener = TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  const nextListener = TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());
  const previousListener = TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());

  return () => {
    pauseListener.remove();
    playListener.remove();
    nextListener.remove();
    previousListener.remove();
  };
}
