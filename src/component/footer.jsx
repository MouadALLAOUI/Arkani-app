import { StyleSheet, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import QuranIco from '../assets/icons/svg/quran.svg';
import PrayIco from '../assets/icons/svg/pray.svg';
import PrayHandIco from '../assets/icons/svg/praying-hand.svg';
import ProfileIco from '../assets/icons/svg/muslim.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { QuranTypesList } from '../variant/constants';

export default function Footer() {
  const theme = useSelector(state => state.theme.themeMode);
  const navigation = useNavigation();

  return (
    <View style={{ ...style.footer, backgroundColor: theme.primaryColor }}>
      <Pressable style={style.button} onPress={() => navigation.navigate('home')}>
        <Icon name="home" size={55} color={theme.onPrimaryColor} />
      </Pressable>

      <Pressable
        style={style.button}
        onPress={
          () => navigation.navigate('navListPage', {
            title : 'قرأن كريم',
            itemData : QuranTypesList
          })
        }
      >
        <QuranIco width={55} height={55} />
      </Pressable>

      <Pressable
        style={style.button}
        onPress={
          () => navigation.navigate('navListPage', {
            title : 'حديث شريف',
            itemData : null
          })
        }>
        <PrayIco width={55} height={55} />
      </Pressable>

      <Pressable
        style={style.button}
        onPress={() => navigation.navigate('navListPage', {
          title : 'ادعية',
          itemData : null
        })
        }
      >
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