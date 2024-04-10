import { StyleSheet, View, Text } from 'react-native';
import { Track } from 'react-native-track-player';
import { PropsWithChildren } from 'react';
import { useAppSelector } from '../db/hooks';


type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined
}>

function SongInfo ({ track }: SongInfoProps){
  const theme = useAppSelector(state => state.theme.themeMode);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.onPrimaryColor,
      borderColor: theme.secondaryColor,
    }}>
      <View>
        <Text style={{ ...styles.name, color: theme.primaryColor }}>
          {track?.title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default SongInfo;