import { Track } from 'react-native-track-player';
import { StackNavigationProp } from '@react-navigation/stack';
import { SHAHADATAN } from './string/ar/arkane/shahadatan';

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
    id: 0,
    title: 'al-fatihah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/001-al-fatihah.mp3')
  },
  {
    id: 1,
    title: 'al-baqarah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/002-al-baqarah.mp3')
  },
  {
    id: 2,
    title: 'al-imran',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/003-al-imran.mp3')
  },
  {
    id: 3,
    title: 'an-nisa',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/004-an-nisa.mp3')
  },
  {
    id: 4,
    title: 'al-maidah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/005-al-maidah.mp3')
  },
  {
    id: 5,
    title: 'al-anam',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/006-al-anam.mp3')
  },
  {
    id: 6,
    title: 'al-araf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/007-al-araf.mp3')
  },
  {
    id: 7,
    title: 'al-anfal',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/008-al-anfal.mp3')
  },
  {
    id: 8,
    title: 'at-taubah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/009-at-taubah.mp3')
  },
  {
    id: 9,
    title: 'yunus',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/010-yunus.mp3')
  },
  {
    id: 10,
    title: 'hud',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/011-hud.mp3')
  },
  {
    id: 11,
    title: 'yusuf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/012-yusuf.mp3')
  },
  {
    id: 12,
    title: 'ar-rad',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/013-ar-rad.mp3')
  },
  {
    id: 13,
    title: 'ibrahim',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/014-ibrahim.mp3')
  },
  {
    id: 14,
    title: 'al-hijr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/015-al-hijr.mp3')
  },
  {
    id: 15,
    title: 'an-nahl',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/016-an-nahl.mp3')
  },
  {
    id: 16,
    title: 'al-isra',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/017-al-isra.mp3')
  },
  {
    id: 17,
    title: 'al-kahf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/018-al-kahf.mp3')
  },
  {
    id: 18,
    title: 'maryam',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/019-maryam.mp3')
  },
  {
    id: 19,
    title: 'ta-ha',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/020-ta-ha.mp3')
  },
  {
    id: 20,
    title: 'al-anbiya',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/021-al-anbiya.mp3')
  },
  {
    id: 21,
    title: 'al-hajj',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/022-al-hajj.mp3')
  },
  {
    id: 22,
    title: 'al-muminun',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/023-al-muminun.mp3')
  },
  {
    id: 23,
    title: 'an-nur',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/024-an-nur.mp3')
  },
  {
    id: 24,
    title: 'al-furqan',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/025-al-furqan.mp3')
  },
  {
    id: 25,
    title: 'ash-shuara',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/026-ash-shuara.mp3')
  },
  {
    id: 26,
    title: 'an-naml',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/027-an-naml.mp3')
  },
  {
    id: 27,
    title: 'al-qasas',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/028-al-qasas.mp3')
  },
  {
    id: 28,
    title: 'al-ankabut',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/029-al-ankabut.mp3')
  },
  {
    id: 29,
    title: 'ar-rum',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/030-ar-rum.mp3')
  },
  {
    id: 30,
    title: 'luqman',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/031-luqman.mp3')
  },
  {
    id: 31,
    title: 'as-sajdah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/032-as-sajdah.mp3')
  },
  {
    id: 32,
    title: 'al-ahzab',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/033-al-ahzab.mp3')
  },
  {
    id: 33,
    title: 'saba',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/034-saba.mp3')
  },
  {
    id: 34,
    title: 'fatir',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/035-fatir.mp3')
  },
  {
    id: 35,
    title: 'ya-sin',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/036-ya-sin.mp3')
  },
  {
    id: 36,
    title: 'as-saffat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/037-as-saffat.mp3')
  },
  {
    id: 37,
    title: 'sad',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/038-sad.mp3')
  },
  {
    id: 38,
    title: 'az-zumar',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/039-az-zumar.mp3')
  },
  {
    id: 39,
    title: 'ghafir',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/040-ghafir.mp3')
  },
  {
    id: 40,
    title: 'fussilat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/041-fussilat.mp3')
  },
  {
    id: 41,
    title: 'ash-shura',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/042-ash-shura.mp3')
  },
  {
    id: 42,
    title: 'az-zukhruf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/043-az-zukhruf.mp3')
  },
  {
    id: 43,
    title: 'ad-dukhan',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/044-ad-dukhan.mp3')
  },
  {
    id: 44,
    title: 'al-jathiyah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/045-al-jathiyah.mp3')
  },
  {
    id: 45,
    title: 'al-ahqaf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/046-al-ahqaf.mp3')
  },
  {
    id: 46,
    title: 'muhammad',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/047-muhammad.mp3')
  },
  {
    id: 47,
    title: 'al-fath',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/048-al-fath.mp3')
  },
  {
    id: 48,
    title: 'al-hujurat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/049-al-hujurat.mp3')
  },
  {
    id: 49,
    title: 'qaf',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/050-qaf.mp3')
  },
  {
    id: 50,
    title: 'adh-dhariyat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/051-adh-dhariyat.mp3')
  },
  {
    id: 51,
    title: 'at-tur',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/052-at-tur.mp3')
  },
  {
    id: 52,
    title: 'an-najm',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/053-an-najm.mp3')
  },
  {
    id: 53,
    title: 'al-qamar',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/054-al-qamar.mp3')
  },
  {
    id: 54,
    title: 'ar-rahman',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/055-ar-rahman.mp3')
  },
  {
    id: 55,
    title: 'al-waqiah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/056-al-waqiah.mp3')
  },
  {
    id: 56,
    title: 'al-hadid',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/057-al-hadid.mp3')
  },
  {
    id: 57,
    title: 'al-mujadilah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/058-al-mujadilah.mp3')
  },
  {
    id: 58,
    title: 'al-hashr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/059-al-hashr.mp3')
  },
  {
    id: 59,
    title: 'al-mumtahanah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/060-al-mumtahanah.mp3')
  },
  {
    id: 60,
    title: 'as-saff',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/061-as-saff.mp3')
  },
  {
    id: 61,
    title: 'al-jumuah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/062-al-jumuah.mp3')
  },
  {
    id: 62,
    title: 'al-munafiqun',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/063-al-munafiqun.mp3')
  },
  {
    id: 63,
    title: 'at-taghabun',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/064-at-taghabun.mp3')
  },
  {
    id: 64,
    title: 'at-talaq',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/065-at-talaq.mp3')
  },
  {
    id: 65,
    title: 'at-tahrim',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/066-at-tahrim.mp3')
  },
  {
    id: 66,
    title: 'al-mulk',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/067-al-mulk.mp3')
  },
  {
    id: 67,
    title: 'al-qalam',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/068-al-qalam.mp3')
  },
  {
    id: 68,
    title: 'al-haqqah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/069-al-haqqah.mp3')
  },
  {
    id: 69,
    title: 'al-maarij',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/070-al-maarij.mp3')
  },
  {
    id: 70,
    title: 'nuh',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/071-nuh.mp3')
  },
  {
    id: 71,
    title: 'al-jinn',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/072-al-jinn.mp3')
  },
  {
    id: 72,
    title: 'al-muzammil',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/073-al-muzammil.mp3')
  },
  {
    id: 73,
    title: 'al-muddaththir',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/074-al-muddaththir.mp3')
  },
  {
    id: 74,
    title: 'al-qiyamah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/075-al-qiyamah.mp3')
  },
  {
    id: 75,
    title: 'al-insan',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/076-al-insan.mp3')
  },
  {
    id: 76,
    title: 'al-mursalat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/077-al-mursalat.mp3')
  },
  {
    id: 77,
    title: 'an-naba',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/078-an-naba.mp3')
  },
  {
    id: 78,
    title: 'an-naziat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/079-an-naziat.mp3')
  },
  {
    id: 79,
    title: 'abasa',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/080-abasa.mp3')
  },
  {
    id: 80,
    title: 'at-takwir',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/081-at-takwir.mp3')
  },
  {
    id: 81,
    title: 'al-infitar',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/082-al-infitar.mp3')
  },
  {
    id: 82,
    title: 'al-mutaffifin',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/083-al-mutaffifin.mp3')
  },
  {
    id: 83,
    title: 'al-inshiqaq',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/084-al-inshiqaq.mp3')
  },
  {
    id: 84,
    title: 'al-buruj',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/085-al-buruj.mp3')
  },
  {
    id: 85,
    title: 'at-tariq',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/086-at-tariq.mp3')
  },
  {
    id: 86,
    title: 'al-ala',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/087-al-ala.mp3')
  },
  {
    id: 87,
    title: 'al-ghashiyah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/088-al-ghashiyah.mp3')
  },
  {
    id: 88,
    title: 'al-fajr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/089-al-fajr.mp3')
  },
  {
    id: 89,
    title: 'al-balad',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/090-al-balad.mp3')
  },
  {
    id: 90,
    title: 'ash-shams',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/091-ash-shams.mp3')
  },
  {
    id: 91,
    title: 'al-lail',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/092-al-lail.mp3')
  },
  {
    id: 92,
    title: 'ad-duha',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/093-ad-duha.mp3')
  },
  {
    id: 93,
    title: 'ash-sharh',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/094-ash-sharh.mp3')
  },
  {
    id: 94,
    title: 'at-tin',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/095-at-tin.mp3')
  },
  {
    id: 95,
    title: 'al-alaq',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/096-al-alaq.mp3')
  },
  {
    id: 96,
    title: 'al-qadr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/097-al-qadr.mp3')
  },
  {
    id: 97,
    title: 'al-baiyyinah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/098-al-baiyyinah.mp3')
  },
  {
    id: 98,
    title: 'az-zalzalah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/099-az-zalzalah.mp3')
  },
  {
    id: 99,
    title: 'al-adiyat',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/100-al-adiyat.mp3')
  },
  {
    id: 100,
    title: 'al-qariah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/101-al-qariah.mp3')
  },
  {
    id: 101,
    title: 'at-takathur',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/102-at-takathur.mp3')
  },
  {
    id: 102,
    title: 'al-asr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/103-al-asr.mp3')
  },
  {
    id: 103,
    title: 'al-humazah',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/104-al-humazah.mp3')
  },
  {
    id: 104,
    title: 'al-fil',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/105-al-fil.mp3')
  },
  {
    id: 105,
    title: 'quraish',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/106-quraish.mp3')
  },
  {
    id: 106,
    title: 'al-maun',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/107-al-maun.mp3')
  },
  {
    id: 107,
    title: 'al-kauthar',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/108-al-kauthar.mp3')
  },
  {
    id: 108,
    title: 'al-kafirun',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/109-al-kafirun.mp3')
  },
  {
    id: 109,
    title: 'an-nasr',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/110-an-nasr.mp3')
  },
  {
    id: 110,
    title: 'al-masad',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/111-al-masad.mp3')
  },
  {
    id: 111,
    title: 'al-ikhlas',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/112-al-ikhlas.mp3')
  },
  {
    id: 112,
    title: 'al-falaq',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/113-al-falaq.mp3')
  },
  {
    id: 113,
    title: 'an-nas',
    artist: 'al-afassy',
    url: require('../assets/audio/alfasy/114-an-nas.mp3')
  },
];

// export const QuranListData: Track[] = [
//   {
//     id: 1,
//     title: 'al-fatihah',
//     artist: 'al-afassy',
//     url: require('../assets/audio/alfasy/001-al-fatihah.mp3')
//   },
//   {
//     id: 2,
//     title: 'al-baqarah',
//     artist: 'al-afassy',
//     url: require('../assets/audio/alfasy/002-al-baqarah.mp3')
//   },
//   {
//     id: 3,
//     title: 'al-imran',
//     artist: 'al-afassy',
//     url: require('../assets/audio/alfasy/003-al-imran.mp3')
//   }
// ];

export const QuranSouarList: Array<object> = QuranListData.map((item) => ({
  id: item.id + 1,
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

export const Shahadatan: Array<object> = [
  {
    id: 1,
    title: 'تعريف',
    data: [
      {
        id: 1.1,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.defLghawi.title}`,
        title: `${SHAHADATAN.defLghawi.title}`,
        text: SHAHADATAN.defLghawi.meanings,
        sources: SHAHADATAN.sources.def
      },
      {
        id: 1.2,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.defLghawi.title}`,
        title: `${SHAHADATAN.defShar3ii.title}`,
        text: SHAHADATAN.defShar3ii.meanings,
        sources: SHAHADATAN.sources.def
      },
    ],
  },
  {
    id: 2,
    title: 'الاركان',
    data: [
      {
        id: 2.1,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.arkan.sectionTitle}`,
        title: `${SHAHADATAN.arkan.title}`,
        text: SHAHADATAN.arkan.meanings,
        sources: SHAHADATAN.sources.arkan
      },
    ],
  },
  {
    id: 3,
    title: 'الشروط',
    data: [
      {
        id: 3.1,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.al3ilm.title}`,
        text: SHAHADATAN.shorout.shorouts.al3ilm.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.2,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.alya9in.title}`,
        text: SHAHADATAN.shorout.shorouts.alya9in.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.3,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.al9oboul.title}`,
        text: SHAHADATAN.shorout.shorouts.al9oboul.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.4,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.al2in9yad.title}`,
        text: SHAHADATAN.shorout.shorouts.al2in9yad.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.5,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.alssid9.title}`,
        text: SHAHADATAN.shorout.shorouts.alssid9.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.6,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.al2ikhlass.title}`,
        text: SHAHADATAN.shorout.shorouts.al2ikhlass.data,
        sources: SHAHADATAN.sources.shorout
      },
      {
        id: 3.7,
        isTextArray: true,
        sectionTitle: `${SHAHADATAN.shorout.sectionTitle}`,
        title: `${SHAHADATAN.shorout.shorouts.almahaba.title}`,
        text: SHAHADATAN.shorout.shorouts.almahaba.data,
        sources: SHAHADATAN.sources.shorout
      },
    ],
  },
];

export const FiveArkan: Array<object> = [
  {
    id: 1,
    title: 'الشهادتين',
    onPress: {
      title: 'الشهادتين',
      toUrl: 'sectionLP',
      items: Shahadatan
    }
  },
  {
    id: 2,
    title: 'الصلاة',
    onPress: {
      title: 'الصلاة',
      toUrl: 'sectionLP',
      items: []
    }
  },
  {
    id: 3,
    title: 'الزكاة',
    onPress: {
      title: 'الزكاة',
      toUrl: 'sectionLP',
      items: []
    }
  },
  {
    id: 4,
    title: 'الصوم',
    onPress: {
      title: 'الصوم',
      toUrl: 'sectionLP',
      items: []
    }
  },
  {
    id: 5,
    title: 'الحج',
    onPress: {
      title: 'الحج',
      toUrl: 'sectionLP',
      items: []
    }
  },
];

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
      items: FiveArkan
    }
  },
];