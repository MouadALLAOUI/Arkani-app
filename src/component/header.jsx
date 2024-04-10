import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({ isBackBtn= false, title= '' }) {
  const theme = useSelector(state => state.theme.themeMode);
  const navigation = useNavigation();
  return (
    <View style={{ ...style.header, backgroundColor: theme.primaryColor }}>
      {isBackBtn && (
        <Pressable style={style.button} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={theme.onPrimaryColor} />
        </Pressable>
      )}
      <Text style={{
        ...style.titleTxt ,
        color: theme.onPrimaryColor,
        textAlign: !isBackBtn ?  'center' : 'auto',
      }}>
        {title}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    height: 60
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
  titleTxt: {
    position: 'relative',
    display: 'flex',
    height: 60,
    flex: 6,
    fontSize: 46,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});