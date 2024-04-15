import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Card from '../../../component/card';
import QuranIco from '../../../assets/icons/svg/quran.svg';
import QuranReadIco from '../../../assets/icons/svg/quran-recitation.svg';
import HadithIcon from '../../../assets/icons/svg/pray.svg';
import Do3aaIcon from '../../../assets/icons/svg/praying-hand.svg';
import ArkanIcon from '../../../assets/icons/svg/pillar.svg';
import { HomeCardData } from '../../../variant/constants';


export default function Home({ navigation }) {

  const whenPress = (props) => {
    navigation.navigate(props.toUrl, { title : props.title, itemData : props.items});
  };

  const setIcon = (name) => {
    switch (name) {
    case 'quran.svg':
      return <QuranIco width={100} height={100} />;
    case 'quran-recitation.svg':
      return <QuranReadIco width={100} height={100} />;
    case 'pray.svg':
      return <HadithIcon width={100} height={100} />;
    case 'praying-hand.svg':
      return <Do3aaIcon width={100} height={100} />;
    case 'pillar.svg':
      return <ArkanIcon width={100} height={100} />;
    default:
      return null;
    }
  };

  const Item = ({ item }) => {
    return <Card
      key={item.id}
      text={item.text}
      icon={setIcon(item.icon)}
      onPress={() => whenPress(item.onPress)}
    />;
  };

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="الرئيسية" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <FlatList
          data={HomeCardData}
          numColumns={2}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer/>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 8,
    margin: 10,
    borderRadius: 15,
    padding: 20
  },
});