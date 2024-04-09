import { Image, Text, View, StyleSheet } from 'react-native';
import TestImage from '../../res/image/imagedefault.png';
import { useSelector } from 'react-redux';

export default function StepComponent({
  title = 'title',
  isSvg= false,
  image = TestImage,
  desc = 'description',
}) {
  const theme = useSelector(state => state.theme.themeMode);
  return (
    <View style={styles.stepPage}>
      <Text style={{ ...styles.title, color: theme.primaryColor }}>{title}</Text>
      {isSvg ? image : <Image source={image} />}
      <Text style={{ ...styles.desc, color: theme.primaryColor }}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stepPage: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  desc : {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});