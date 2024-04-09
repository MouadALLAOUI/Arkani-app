import { StyleSheet, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
// import { useNavigation } from "@react-navigation/native";
import QuranIco from '../res/icons/svg/quran.svg';
import PrayIco from '../res/icons/svg/pray.svg';
import PrayHandIco from '../res/icons/svg/praying-hand.svg';
import ProfileIco from '../res/icons/svg/muslim.svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({
  homePress = () => {},
  quranPress = () => {},
}) {
  const theme = useSelector(state => state.theme.themeMode);
  // const navigation = useNavigation();

  return (
    <View style={{ ...style.footer, backgroundColor: theme.primaryColor }}>
      <Pressable style={style.button} onPress={homePress}>
        <Icon name="home" size={55} color={theme.onPrimaryColor} />
      </Pressable>

      <Pressable style={style.button} onPress={quranPress}>
        <QuranIco width={55} height={55} />
      </Pressable>

      <Pressable style={style.button} onPress={() => {}}>
        <PrayIco width={55} height={55} />
      </Pressable>

      <Pressable style={style.button} onPress={() => {}}>
        <PrayHandIco width={55} height={55} />
      </Pressable>

      <Pressable style={style.button} onPress={() => {}}>
        <ProfileIco width={55} height={55} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  footer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    paddingHorizontal: 30
  },
  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    flex: 1,
    backgroundColor: 'transparent',
  },
});