import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../../variant/colors';
import Header from '../../component/header';
import Footer from '../../component/footer';
import Tags from '../../component/tags';

function NavListPage({ route, navigation }) {

  const { title, itemData } = route.params;

  const whenPress = (props) => {
    if (props.toUrl == 'navListPage') {
      navigation.navigate(props.toUrl, { title : props.title, itemData : props.items});
    } else {
      navigation.navigate(props.toUrl, props.props );
    }
  };

  // eslint-disable-next-line react/display-name
  const Item = React.memo(({ item }) => {
    return <Tags key={item.id} text={item.title} num={item.id} onPress={() => whenPress(item.onPress)} />;
  });
  
  return (
    <View style={styles.startview}>
      <Header isBackBtn={true} title={title} />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <View style={{width: '100%',backgroundColor: '#eee5'}}>
          {
            !itemData ||
            itemData.length === 0
              ?
              <Tags text="لم يتم اضفافة المحتوى بعد" num="0" onPress={() => {}} />
              :
              <FlatList
                data={itemData}
                numColumns={1}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item?.id?.toString()}
              />
          }
        </View>
      </View>
      <Footer />
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

export default NavListPage;
