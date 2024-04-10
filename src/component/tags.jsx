import { StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function Tags({
  text= '',
  num= 0,
  onPress= () => {}
}) {
  const theme = useSelector(state => state.theme.themeMode);

  return (
    <Pressable
      style={{
        ...style.card,
        backgroundColor: theme.primaryColor,
        borderColor: theme.secondaryColor
      }}
      onPress={onPress}
    >
      <TouchableOpacity style={style.numBox} disabled >
        <Text style={{ ...style.textNum, color: theme.onPrimaryColor }}>{num}</Text>
      </TouchableOpacity>
      <Text style={{ ...style.text, color: theme.onPrimaryColor }}>{text}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 6,
    padding: 15,
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 3
  },
  text: {
    position: 'relative',
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textNum: {
    position: 'relative',
    transform: [{rotate: '-45deg'}],
    display: 'flex',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numBox: {
    position: 'absolute',
    backgroundColor: '#F00',
    borderRadius: 15,
    top: 2,
    right: 0,
    width: 50,
    height: 50,
    transform: [{rotate: '45deg'}],
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});