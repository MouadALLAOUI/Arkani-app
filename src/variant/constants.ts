import { Track } from 'react-native-track-player';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

export type RootStackParamList = {
  startView: undefined;
  quranList: undefined;
  navListPage: {
    title: string;
    itemData: object;
  };
};
export type AuthScreenProp = StackNavigationProp<RootStackParamList>;



export const QuranListData: Track[] = [
  {
    id: 1,
    title: 'al-fatihah',
    url: require('../assets/audio/alfasy/001-al-fatihah.mp3')
  },
  {
    id: 2,
    title: 'al-baqarah',
    url: require('../assets/audio/alfasy/002-al-baqarah.mp3')
  },
  {
    id: 3,
    title: 'al-imran',
    url: require('../assets/audio/alfasy/003-al-imran.mp3')
  },
  {
    id: 4,
    title: 'an-nisa',
    url: require('../assets/audio/alfasy/004-an-nisa.mp3')
  },
  {
    id: 5,
    title: 'al-maidah',
    url: require('../assets/audio/alfasy/005-al-maidah.mp3')
  },
  {
    id: 6,
    title: 'al-anam',
    url: require('../assets/audio/alfasy/006-al-anam.mp3')
  },
  {
    id: 7,
    title: 'al-araf',
    url: require('../assets/audio/alfasy/007-al-araf.mp3')
  },
  {
    id: 8,
    title: 'al-anfal',
    url: require('../assets/audio/alfasy/008-al-anfal.mp3')
  },
  {
    id: 9,
    title: 'at-taubah',
    url: require('../assets/audio/alfasy/009-at-taubah.mp3')
  },
  {
    id: 10,
    title: 'yunus',
    url: require('../assets/audio/alfasy/010-yunus.mp3')
  },
  {
    id: 11,
    title: 'hud',
    url: require('../assets/audio/alfasy/011-hud.mp3')
  },
  {
    id: 12,
    title: 'yusuf',
    url: require('../assets/audio/alfasy/012-yusuf.mp3')
  },
  {
    id: 13,
    title: 'ar-rad',
    url: require('../assets/audio/alfasy/013-ar-rad.mp3')
  },
  {
    id: 14,
    title: 'ibrahim',
    url: require('../assets/audio/alfasy/014-ibrahim.mp3')
  },
  {
    id: 15,
    title: 'al-hijr',
    url: require('../assets/audio/alfasy/015-al-hijr.mp3')
  },
  {
    id: 16,
    title: 'an-nahl',
    url: require('../assets/audio/alfasy/016-an-nahl.mp3')
  },
  {
    id: 17,
    title: 'al-isra',
    url: require('../assets/audio/alfasy/017-al-isra.mp3')
  },
  {
    id: 18,
    title: 'al-kahf',
    url: require('../assets/audio/alfasy/018-al-kahf.mp3')
  },
  {
    id: 19,
    title: 'maryam',
    url: require('../assets/audio/alfasy/019-maryam.mp3')
  },
  {
    id: 20,
    title: 'ta-ha',
    url: require('../assets/audio/alfasy/020-ta-ha.mp3')
  },
  {
    id: 21,
    title: 'al-anbiya',
    url: require('../assets/audio/alfasy/021-al-anbiya.mp3')
  },
  {
    id: 22,
    title: 'al-hajj',
    url: require('../assets/audio/alfasy/022-al-hajj.mp3')
  },
  {
    id: 23,
    title: 'al-muminun',
    url: require('../assets/audio/alfasy/023-al-muminun.mp3')
  },
  {
    id: 24,
    title: 'an-nur',
    url: require('../assets/audio/alfasy/024-an-nur.mp3')
  },
  {
    id: 25,
    title: 'al-furqan',
    url: require('../assets/audio/alfasy/025-al-furqan.mp3')
  },
  {
    id: 26,
    title: 'ash-shuara',
    url: require('../assets/audio/alfasy/026-ash-shuara.mp3')
  },
  {
    id: 27,
    title: 'an-naml',
    url: require('../assets/audio/alfasy/027-an-naml.mp3')
  },
  {
    id: 28,
    title: 'al-qasas',
    url: require('../assets/audio/alfasy/028-al-qasas.mp3')
  },
  {
    id: 29,
    title: 'al-ankabut',
    url: require('../assets/audio/alfasy/029-al-ankabut.mp3')
  },
  {
    id: 30,
    title: 'ar-rum',
    url: require('../assets/audio/alfasy/030-ar-rum.mp3')
  },

  // ----------------------------------------------------------------------------------------------------

  {
    id: 31,
    title: 'luqman',
    url: require('../assets/audio/alfasy/031-luqman.mp3')
  },
  {
    id: 32,
    title: 'as-sajdah',
    url: require('../assets/audio/alfasy/032-as-sajdah.mp3')
  },
  {
    id: 33,
    title: 'al-ahzab',
    url: require('../assets/audio/alfasy/033-al-ahzab.mp3')
  },
  {
    id: 34,
    title: 'saba',
    url: require('../assets/audio/alfasy/034-saba.mp3')
  },
  {
    id: 35,
    title: 'fatir',
    url: require('../assets/audio/alfasy/035-fatir.mp3')
  },
  {
    id: 36,
    title: 'ya-sin',
    url: require('../assets/audio/alfasy/036-ya-sin.mp3')
  },
  {
    id: 37,
    title: 'as-saffat',
    url: require('../assets/audio/alfasy/037-as-saffat.mp3')
  },
  {
    id: 38,
    title: 'sad',
    url: require('../assets/audio/alfasy/038-sad.mp3')
  },
  {
    id: 39,
    title: 'az-zumar',
    url: require('../assets/audio/alfasy/039-az-zumar.mp3')
  },
  {
    id: 40,
    title: 'ghafir',
    url: require('../assets/audio/alfasy/040-ghafir.mp3')
  },
  {
    id: 41,
    title: 'fussilat',
    url: require('../assets/audio/alfasy/041-fussilat.mp3')
  },
  {
    id: 42,
    title: 'ash-shura',
    url: require('../assets/audio/alfasy/042-ash-shura.mp3')
  },
  {
    id: 43,
    title: 'az-zukhruf',
    url: require('../assets/audio/alfasy/043-az-zukhruf.mp3')
  },
  {
    id: 44,
    title: 'ad-dukhan',
    url: require('../assets/audio/alfasy/044-ad-dukhan.mp3')
  },
  {
    id: 45,
    title: 'al-jathiyah',
    url: require('../assets/audio/alfasy/045-al-jathiyah.mp3')
  },
  {
    id: 46,
    title: 'al-ahqaf',
    url: require('../assets/audio/alfasy/046-al-ahqaf.mp3')
  },
  {
    id: 47,
    title: 'muhammad',
    url: require('../assets/audio/alfasy/047-muhammad.mp3')
  },
  {
    id: 48,
    title: 'al-fath',
    url: require('../assets/audio/alfasy/048-al-fath.mp3')
  },
  {
    id: 49,
    title: 'al-hujurat',
    url: require('../assets/audio/alfasy/049-al-hujurat.mp3')
  },
  {
    id: 50,
    title: 'qaf',
    url: require('../assets/audio/alfasy/050-qaf.mp3')
  },
  {
    id: 51,
    title: 'adh-dhariyat',
    url: require('../assets/audio/alfasy/051-adh-dhariyat.mp3')
  },
  {
    id: 52,
    title: 'at-tur',
    url: require('../assets/audio/alfasy/052-at-tur.mp3')
  },
  {
    id: 53,
    title: 'an-najm',
    url: require('../assets/audio/alfasy/053-an-najm.mp3')
  },
  {
    id: 54,
    title: 'al-qamar',
    url: require('../assets/audio/alfasy/054-al-qamar.mp3')
  },
  {
    id: 55,
    title: 'ar-rahman',
    url: require('../assets/audio/alfasy/055-ar-rahman.mp3')
  },
  {
    id: 56,
    title: 'al-waqiah',
    url: require('../assets/audio/alfasy/056-al-waqiah.mp3')
  },
  {
    id: 57,
    title: 'al-hadid',
    url: require('../assets/audio/alfasy/057-al-hadid.mp3')
  },
  {
    id: 58,
    title: 'al-mujadilah',
    url: require('../assets/audio/alfasy/058-al-mujadilah.mp3')
  },
  {
    id: 59,
    title: 'al-hashr',
    url: require('../assets/audio/alfasy/059-al-hashr.mp3')
  },
  {
    id: 60,
    title: 'al-mumtahanah',
    url: require('../assets/audio/alfasy/060-al-mumtahanah.mp3')
  },
  {
    id: 61,
    title: 'as-saff',
    url: require('../assets/audio/alfasy/061-as-saff.mp3')
  },
  {
    id: 62,
    title: 'al-jumuah',
    url: require('../assets/audio/alfasy/062-al-jumuah.mp3')
  },
  {
    id: 63,
    title: 'al-munafiqun',
    url: require('../assets/audio/alfasy/063-al-munafiqun.mp3')
  },
  {
    id: 64,
    title: 'at-taghabun',
    url: require('../assets/audio/alfasy/064-at-taghabun.mp3')
  },
  {
    id: 65,
    title: 'at-talaq',
    url: require('../assets/audio/alfasy/065-at-talaq.mp3')
  },
  {
    id: 66,
    title: 'at-tahrim',
    url: require('../assets/audio/alfasy/066-at-tahrim.mp3')
  },
  {
    id: 67,
    title: 'al-mulk',
    url: require('../assets/audio/alfasy/067-al-mulk.mp3')
  },
  {
    id: 68,
    title: 'al-qalam',
    url: require('../assets/audio/alfasy/068-al-qalam.mp3')
  },
  {
    id: 69,
    title: 'al-haqqah',
    url: require('../assets/audio/alfasy/069-al-haqqah.mp3')
  },
  {
    id: 70,
    title: 'al-maarij',
    url: require('../assets/audio/alfasy/070-al-maarij.mp3')
  },
  {
    id: 71,
    title: 'nuh',
    url: require('../assets/audio/alfasy/071-nuh.mp3')
  },
  {
    id: 72,
    title: 'al-jinn',
    url: require('../assets/audio/alfasy/072-al-jinn.mp3')
  },
  {
    id: 73,
    title: 'al-muzammil',
    url: require('../assets/audio/alfasy/073-al-muzammil.mp3')
  },
  {
    id: 74,
    title: 'al-muddaththir',
    url: require('../assets/audio/alfasy/074-al-muddaththir.mp3')
  },
  {
    id: 75,
    title: 'al-qiyamah',
    url: require('../assets/audio/alfasy/075-al-qiyamah.mp3')
  },
  {
    id: 76,
    title: 'al-insan',
    url: require('../assets/audio/alfasy/076-al-insan.mp3')
  },
  {
    id: 77,
    title: 'al-mursalat',
    url: require('../assets/audio/alfasy/077-al-mursalat.mp3')
  },
  {
    id: 78,
    title: 'an-naba',
    url: require('../assets/audio/alfasy/078-an-naba.mp3')
  },
  {
    id: 79,
    title: 'an-naziat',
    url: require('../assets/audio/alfasy/079-an-naziat.mp3')
  },
  {
    id: 80,
    title: 'abasa',
    url: require('../assets/audio/alfasy/080-abasa.mp3')
  },
  {
    id: 81,
    title: 'at-takwir',
    url: require('../assets/audio/alfasy/081-at-takwir.mp3')
  },
  {
    id: 82,
    title: 'al-infitar',
    url: require('../assets/audio/alfasy/082-al-infitar.mp3')
  },
  {
    id: 83,
    title: 'al-mutaffifin',
    url: require('../assets/audio/alfasy/083-al-mutaffifin.mp3')
  },
  {
    id: 84,
    title: 'al-inshiqaq',
    url: require('../assets/audio/alfasy/084-al-inshiqaq.mp3')
  },
  {
    id: 85,
    title: 'al-buruj',
    url: require('../assets/audio/alfasy/085-al-buruj.mp3')
  },
  {
    id: 86,
    title: 'at-tariq',
    url: require('../assets/audio/alfasy/086-at-tariq.mp3')
  },
  {
    id: 87,
    title: 'al-ala',
    url: require('../assets/audio/alfasy/087-al-ala.mp3')
  },
  {
    id: 88,
    title: 'al-ghashiyah',
    url: require('../assets/audio/alfasy/088-al-ghashiyah.mp3')
  },
  {
    id: 89,
    title: 'al-fajr',
    url: require('../assets/audio/alfasy/089-al-fajr.mp3')
  },
  {
    id: 90,
    title: 'al-balad',
    url: require('../assets/audio/alfasy/090-al-balad.mp3')
  },
  {
    id: 91,
    title: 'ash-shams',
    url: require('../assets/audio/alfasy/091-ash-shams.mp3')
  },
  {
    id: 92,
    title: 'al-lail',
    url: require('../assets/audio/alfasy/092-al-lail.mp3')
  },
  {
    id: 93,
    title: 'ad-duha',
    url: require('../assets/audio/alfasy/093-ad-duha.mp3')
  },
  {
    id: 94,
    title: 'ash-sharh',
    url: require('../assets/audio/alfasy/094-ash-sharh.mp3')
  },
  {
    id: 95,
    title: 'at-tin',
    url: require('../assets/audio/alfasy/095-at-tin.mp3')
  },
  {
    id: 96,
    title: 'al-alaq',
    url: require('../assets/audio/alfasy/096-al-alaq.mp3')
  },
  {
    id: 97,
    title: 'al-qadr',
    url: require('../assets/audio/alfasy/097-al-qadr.mp3')
  },
  {
    id: 98,
    title: 'al-baiyyinah',
    url: require('../assets/audio/alfasy/098-al-baiyyinah.mp3')
  },
  {
    id: 99,
    title: 'az-zalzalah',
    url: require('../assets/audio/alfasy/099-az-zalzalah.mp3')
  },
  {
    id: 100,
    title: 'al-adiyat',
    url: require('../assets/audio/alfasy/100-al-adiyat.mp3')
  },
  {
    id: 101,
    title: 'al-qariah',
    url: require('../assets/audio/alfasy/101-al-qariah.mp3')
  },
  {
    id: 102,
    title: 'at-takathur',
    url: require('../assets/audio/alfasy/102-at-takathur.mp3')
  },
  {
    id: 103,
    title: 'al-asr',
    url: require('../assets/audio/alfasy/103-al-asr.mp3')
  },
  {
    id: 104,
    title: 'al-humazah',
    url: require('../assets/audio/alfasy/104-al-humazah.mp3')
  },
  {
    id: 105,
    title: 'al-fil',
    url: require('../assets/audio/alfasy/105-al-fil.mp3')
  },
  {
    id: 106,
    title: 'quraish',
    url: require('../assets/audio/alfasy/106-quraish.mp3')
  },
  {
    id: 107,
    title: 'al-maun',
    url: require('../assets/audio/alfasy/107-al-maun.mp3')
  },
  {
    id: 108,
    title: 'al-kauthar',
    url: require('../assets/audio/alfasy/108-al-kauthar.mp3')
  },
  {
    id: 109,
    title: 'al-kafirun',
    url: require('../assets/audio/alfasy/109-al-kafirun.mp3')
  },
  {
    id: 110,
    title: 'an-nasr',
    url: require('../assets/audio/alfasy/110-an-nasr.mp3')
  },
  {
    id: 111,
    title: 'al-masad',
    url: require('../assets/audio/alfasy/111-al-masad.mp3')
  },
  {
    id: 112,
    title: 'al-ikhlas',
    url: require('../assets/audio/alfasy/112-al-ikhlas.mp3')
  },
  {
    id: 113,
    title: 'al-falaq',
    url: require('../assets/audio/alfasy/113-al-falaq.mp3')
  },
  {
    id: 114,
    title: 'an-nas',
    url: require('../assets/audio/alfasy/114-an-nas.mp3')
  },
];

export const QuranSouarList: Array<object> = QuranListData.map((item) => ({
  id: item.id,
  title: item.title,
  onPress: {
    title: item.title,
    toUrl: 'quranSound',
    props: { trackId: item.id }
  }
}));

export const QuranQariiList: Array<object> = [
  {
    id: 1,
    title: 'العفاسي',
    onPress: {
      title: 'العفاسي',
      toUrl: 'navListPage',
      items: QuranSouarList
    }
  }
];

export const QuranTypesList: Array<object> = [
  {
    id: 1,
    title: 'صوتي',
    onPress: {
      title: 'صوتي',
      toUrl: 'navListPage',
      items: QuranQariiList
    }
  },
  {
    id: 2,
    title: 'بصري',
    onPress: {
      title: 'بصري',
      toUrl: 'navListPage',
      items: []
    }
  }
];

type HomeCardItem = {
  id: number;
  text: string;
  icon: string;
  onPress: {
    title: string;
    toUrl: string;
    items: Array<object> | null;
  };
};

export const HomeCardData: HomeCardItem[] = [
  {
    id: 1,
    text: 'قرأن كريم(سمعي)',
    icon: 'quran.svg',
    onPress: {
      title: 'قرأن كريم(سمعي)',
      toUrl: 'navListPage',
      items: QuranQariiList
    }
  },
  {
    id: 2,
    text: 'قرأن كريم (بصري)',
    icon: 'quran-recitation.svg',
    onPress: {
      title: 'حديث شريف',
      toUrl: 'navListPage',
      items: []
    }
  },
  {
    id: 3,
    text: 'حديث شريف',
    icon: 'pray.svg',
    onPress: {
      title: 'حديث شريف',
      toUrl: 'navListPage',
      items: []
    }
  },
  {
    id: 4,
    text: 'ادعية',
    icon:  'praying-hand.svg',
    onPress: {
      title: 'ادعية',
      toUrl: 'navListPage',
      items: []
    }
  },
  {
    id: 5,
    text: 'أركاني',
    icon: 'pillar.svg',
    onPress: {
      title: 'أركاني',
      toUrl: 'navListPage',
      items: []
    }
  },
];