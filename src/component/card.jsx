import { StyleSheet, Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
// import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card({
  text= '',
  icon= null,
  onPress= () => {}
}) {
  const theme = useSelector(state => state.theme.themeMode);
  // const navigation = useNavigation();
  if (!icon) {
    icon = <Icon name="home" size={100} color={theme.onPrimaryColor} />;
  }

  return (
    <Pressable
      style={{
        ...style.card,
        backgroundColor: theme.primaryColor,
        borderColor: theme.secondaryColor
      }}
      onPress={onPress}
    >
      {icon}
      <Text style={{ ...style.text, color: theme.onPrimaryColor }}>{text}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'flex',
    flex: 1,
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
});