import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Tags from '../../../component/tags';
import AudioControl from '../../../component/AudioControl';


export default function QuranSound({ navigation }) {
  const itemData = [
    {
      id: 1,
      text: 'صوتي',
      onPress: () => navigation.navigate('startView')
    },
    {
      id: 2,
      text: 'بصري',
      onPress: () => navigation.navigate('startView')
    }
  ];

  const Item = ({ item }) => {
    return <Tags key={item} text={item.text} num={item.id} onPress={item.onPress} />;
  };

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="قران كريم" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <FlatList
          data={itemData}
          numColumns={1}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
        <AudioControl />
      </View>
      <Footer
        homePress={() => navigation.navigate('home')}
      />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
    margin: 15,
    borderRadius: 15,
    padding: 20
  },
});