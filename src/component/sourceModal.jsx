import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from 'react-native';
import FormatString from '../views/ui/formatText';
import COLORS from '../variant/colors';
import OpenURL from './outLink';

const SourceModal = ({
  isVisible = false,
  setIsVisible = () => {},
  content = [],
  modalTitle= 'العنوان'
}) => {
  const formattedTitle = FormatString(modalTitle);
  const Item = ({ item }) => {
    const formattedText = FormatString(item.title);
    const url = item.url;
    return (
      <OpenURL url={url} style={styles.modalText}>
        {formattedText}
      </OpenURL>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{...styles.textStyle, marginBottom: 10}}>{formattedTitle}</Text>
            <FlatList
              data={content}
              numColumns={1}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item?.title?.toString()}
              ItemSeparatorComponent={() => <Text> </Text>}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}>
              <Text style={styles.textStyle}>اخفاء</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.raisin_black,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '50%',
    width: '90%',
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  buttonClose: {
    backgroundColor: COLORS.sea_green,
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    color: COLORS.sea_green,
    fontSize: 20,
    padding: 5
  },
});

export default SourceModal;