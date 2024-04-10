import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Tags from '../../../component/tags';


export default function QuranQarii({ navigation }) {
  const qoraaData = [
    {
      id: 1,
      text: 'العفاسي',
      onPress: () => navigation.navigate('quranList')
    }
  ];

  const Item = ({ item }) => {
    return <Tags key={item} text={item.text} num={item.id} onPress={item.onPress} />;
  };

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="قران كريم" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <View style={{width: '100%',backgroundColor: '#eee5'}}>
          <FlatList
            data={qoraaData}
            numColumns={1}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 8,
    margin: 15,
    borderRadius: 15,
    padding: 20
  },
});