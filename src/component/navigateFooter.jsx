/* eslint-disable no-unused-vars */
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
// import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StartInfoNav({
  onBackPage = () => {},
  maxPage = 3,
  currentPage = 1,
  onNextPage = () => {},
  doneNavigate = () => {},
}) {
  const theme = useSelector((state) => state.theme.themeMode);

  return (
    <View
      style={{ ...style.navigateFooter, backgroundColor: theme.primaryColor }}
    >
      <Pressable
        style={{
          ...style.navigateBtn,
          backgroundColor: theme.onPrimaryColor,
          opacity: currentPage <= 1 ? 0.7 : 1,
        }}
        onPress={onBackPage}
        disabled={currentPage <= 1}
      >
        <Icon name="arrow-left" size={30} color={theme.primaryColor} />
      </Pressable>

      <ScrollView
        horizontal
        bounces
        centerContent
        contentContainerStyle={style.progressSV}
        style={{ ...style.progressView, backgroundColor: theme.onPrimaryColor }}
      >
        {[...Array(maxPage)].map((_, i) => (
          <Pressable
            key={i + 1}
            style={{
              ...style.circleProgress,
              backgroundColor:
              currentPage == i + 1 ? theme.primaryColor : theme.onPrimaryColor,
              borderColor: theme.primaryColor,
            }}
            onPress={() => {}}
            disabled
          />
        ))}
      </ScrollView>

      {(currentPage >= maxPage) ?
        <Pressable
          style={{
            ...style.navigateBtn,
            backgroundColor: theme.onPrimaryColor,
          }}
          onPress={doneNavigate}
        >
          <Icon name="check" size={30} color={theme.primaryColor} />
        </Pressable>
        :
        <Pressable
          style={{
            ...style.navigateBtn,
            backgroundColor: theme.onPrimaryColor,
          }}
          onPress={onNextPage}
        >
          <Icon name="arrow-right" size={30} color={theme.primaryColor} />
        </Pressable>
      }
    </View>
  );
}

const style = StyleSheet.create({
  navigateFooter: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    gap: 15,
    height: 65,
    paddingHorizontal: 30,
  },
  progressView: {
    position: 'relative',
    height: 50,
    borderRadius: 10,
  },
  progressSV: {
    justifyContent: 'center',
    minWidth: '60%',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  circleProgress: {
    width: 25,
    height: 25,
    borderRadius: 100,
    marginEnd: 5,
    borderStyle: 'solid',
    borderWidth: 5,
  },
  navigateBtn: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  ArrowTxt: {
    fontSize: 56,
    fontWeight: 'bold',
  },
});
