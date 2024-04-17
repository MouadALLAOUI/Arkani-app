import { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import { setupPlayer, addTrack } from '../../../../QuranPlayerService';
import QuranPlayer from './QuranPlayer';


export default function QuranSound({ route }) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const { trackId } = route.params;

  async function setup() {
    try {
      let isSetup = await setupPlayer();
      if (isSetup) {
        await addTrack();
      }
      setIsPlayerReady(isSetup);
    } catch (err) {
      console.error('Failed to setup player:', err);
    }
  }

  useEffect(() => {
    setup();
  }, [trackId]);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.startview}>
        <ActivityIndicator
          size="large"
          color="#FFF"
        />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.startview}>
      <Header isBackBtn={true} title="قران كريم" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <QuranPlayer trackId={trackId} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  startview: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: COLORS.sea_green_50
  },
  stepView: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 8,
    margin: 15,
    borderRadius: 15,
    padding: 20
  },
});