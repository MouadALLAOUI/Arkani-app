import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Pressable,
  FlatList,
} from 'react-native';
import COLORS from '../../variant/colors';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { useSelector } from 'react-redux';
import FormatString from './formatText';
import SourceModal from '../../component/sourceModal';
import Icon from 'react-native-vector-icons/Entypo';


function SectionListPage({ route }){
  const theme = useSelector(state => state.theme.themeMode);
  const { title, itemData } = route.params;
  const [isVisible, setIsVisible] = useState();
  const [content, setContent] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    const newExpandedItems = [...expandedItems];
    if (newExpandedItems.includes(index)) {
      newExpandedItems.splice(newExpandedItems.indexOf(index), 1);
    } else {
      newExpandedItems.push(index);
    }
    setExpandedItems(newExpandedItems);
  };

  const openModal = (item) => {
    setModalTitle(item.sectionTitle);
    setContent(item.sources);
    setIsVisible(true);
  };
  // eslint-disable-next-line react/display-name
  const Item = React.memo(({ item, index }) => {
    const isExpanded = expandedItems.includes(index);
    if (item.isTextArray) {
      const ListItem = ({ text }) => {
        const formattedText = FormatString(text);
        return (
          <Pressable
            style={{...styles.item, backgroundColor: theme.onPrimaryColor}}
            onPress={() => openModal(item)}
          >
            <Text style={{...styles.title, color: theme.secondaryColor}}>{formattedText}</Text>
          </Pressable>
        );
      };
      const SepareItem = () => {
        return (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 7
            }}
          >
            <Text
              style={{
                backgroundColor: theme.primaryColor,
                height: 2,
                width: '50%',
                textAlign: 'center',
              }}
            />
          </View>
        );
      };
      return (
        <View style={{width: '100%'}}>
          <Pressable onPress={() => toggleItem(index)}>
            <Text
              style={{
                ...styles.header,
                display: 'flex',
                width: '100%',
                color: theme.primaryColor,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>
                {FormatString(item.title)}
              </Text>
              {
                isExpanded
                  ?
                  <Icon name="eye" size={25} color={theme.primaryColor} />
                  :
                  <Icon name="eye-with-line" size={25} color={theme.primaryColor} />
              }
            </Text>
          </Pressable>
          {isExpanded && (
            <FlatList
              data={item.text}
              numColumns={1}
              renderItem={({item}) => <ListItem text={item.desc} />}
              keyExtractor={(item) => item?.id.toString()}
              style={{
                marginVertical: 10,
                borderBottomWidth: 0.5,
                borderColor: theme.secondaryColor,
              }}
              ItemSeparatorComponent={()=> <SepareItem />}
            />
          )}
        </View>
      );
    } else {
      const formattedText = FormatString(item.text);
      return (
        <Pressable
          style={{
            ...styles.item,
            backgroundColor: theme.onPrimaryColor,
            borderBottomWidth: 2,
            borderColor: theme.secondaryColor,
          }}
          onPress={() => openModal(item.sources)}
        >
          <Text style={{...styles.title, color: theme.secondaryColor}}>{formattedText}</Text>
        </Pressable>
      );
    }
  });

  // eslint-disable-next-line react/display-name
  const ItemTitle = React.memo(({ section }) => (
    <Text
      style={{
        ...styles.header,
        backgroundColor: theme.primaryColor,
        color: theme.onPrimaryColor
      }}
    >
      {section}
    </Text>
  ));

  return (
    <SafeAreaView style={styles.startview}>
      <Header isBackBtn={true} title={title} />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <View style={{width: '100%'}}>
          <SectionList
            sections={itemData}
            renderItem={({item}) => <Item item={item} index={item.id} />}
            renderSectionHeader={({section: {title}}) => <ItemTitle section={title} />}
            keyExtractor={(item) => item?.id.toString()}
          />
          <SourceModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            content={content}
            modalTitle={modalTitle}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
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
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  item: {
    marginVertical: 3,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    padding: 20
  },
  title: {
    fontSize: 20,
    flex: 1,
    textAlignVertical: 'center',
    fontFamily: 'Arial',
    paddingHorizontal: 24,
    // backgroundColor: '#FF09'
  },
});

export default SectionListPage;