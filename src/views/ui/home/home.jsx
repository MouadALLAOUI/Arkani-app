import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Card from '../../../component/card';
import QuranIco from '../../../assets/icons/svg/quran.svg';
import HadithIcon from '../../../assets/icons/svg/pray.svg';
import Do3aaIcon from '../../../assets/icons/svg/praying-hand.svg';
import ArkanIcon from '../../../assets/icons/svg/pillar.svg';


export default function Home({ navigation }) {
  const itemData = [
    {
      id: 1,
      text: 'قرأن كريم(سمعي)',
      icon: <QuranIco width={100} height={100} />,
      onPress: () => navigation.navigate('quranQarii')
    },
    {
      id: 2,
      text: 'حديث شريف',
      icon: <HadithIcon width={100} height={100} />
    },
    {
      id: 3,
      text: 'قرأن كريم (بصري)',
      icon: <QuranIco width={100} height={100} />,
      onPress: () => navigation.navigate('quranQarii')
    },
    {
      id: 4,
      text: 'ادعية',
      icon: <Do3aaIcon width={100} height={100} />
    },
    {
      id: 5,
      text: 'أركاني',
      icon: <ArkanIcon width={100} height={100} />
    },
  ];

  const Item = ({ item }) => {
    return <Card key={item} text={item.text} icon={item.icon} onPress={item.onPress} />;
  };

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="الرئيسية" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <FlatList
          data={itemData}
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
    margin: 15,
    borderRadius: 15,
    padding: 20
  },
});