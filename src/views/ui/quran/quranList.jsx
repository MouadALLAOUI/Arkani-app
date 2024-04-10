import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../../variant/colors';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Tags from '../../../component/tags';
import { QuranListData } from '../../../variant/constants';
import React from 'react';


export default function QuranList({ navigation }) {

  // eslint-disable-next-line react/display-name
  const Item = React.memo(({ item }) => {
    return <Tags key={item.id} text={item.title} num={item.id} onPress={() => navigation.navigate('quranSound', {trackId : parseInt(item.id)} )} />;
  });

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="قران كريم" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <View style={{width: '100%',backgroundColor: '#eee5'}}>
          <FlatList
            data={QuranListData}
            numColumns={1}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item?.id?.toString()}
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