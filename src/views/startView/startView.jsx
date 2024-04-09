import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Header from '../../component/header';
import StartInfoNav from '../../component/navigateFooter';
import COLORS from '../../variant/colors';
import StepComponent from './stepComponent';
import QuranImg from '../../res/icons/svg/quran-recitation.svg';
import GrowingImg from '../../res/icons/svg/growing.svg';
import ReviewImg from '../../res/icons/svg/customer-review.svg';


export default function StartView({ navigation }) {
  const maxPage = 3;
  const windowWidth = Dimensions.get('window').width;
  const [step, setStep] = useState(1);

  const onBackClick = () => {
    setStep(step - 1);
  };
  const onNextClick = () => {
    if (step < maxPage) {
      setStep(step + 1);
    } else {
      setStep(step);
    }
  };

  const stepsPage = [
    {
      id: 1,
      title: 'تقديم',
      image: {
        isSvg: true,
        image: <QuranImg width={windowWidth} height={windowWidth} />
      },
      // eslint-disable-next-line max-len
      desc: 'ترحب أركاني بكم في تطبيقنا، الذي يقدم لكم الطريقة الأمثل لأداء الأركان الخمسة بأفضل طريقة ممكنة، استنادًا إلى السنة النبوية والقرآن الكريم. نسعى جاهدين لضمان صحة المحتوى دون أخطاء، وسنوفر لكم المصادر اللازمة لضمان حصولكم على أفضل المعلومات.',
    },
    {
      id: 2,
      title: 'لماذا أركاني',
      image: {
        isSvg: true,
        image: <GrowingImg width={250} height={250} />
      },
      // eslint-disable-next-line max-len
      desc: 'منذ فترة طويلة، كنت أتمنى أن أترك وراءي صدقة جارية تنفعني وتنفع المسلمين جميعًا. لقد قضيت وقتًا ليس بالقليل في التفكير في كيفية تحقيق هذا الهدف بعد وفاتي. مع تقدم التكنولوجيا وزيادة الطلب على التطبيقات، قررت إنشاء هذا التطبيق، عسى أن يكون صدقة جارية لي حتى يوم الدين.',
    },
    {
      id: 3,
      title: 'اذا وجد خطا',
      image: {
        isSvg: true,
        image: <ReviewImg width={250} height={250} />
      },
      // eslint-disable-next-line max-len
      desc: 'نحن بشر والبشر ليسوا معصومين من الخطأ، ولذلك نطلب منكم، عملاءنا الكرام، في حال وجدتم أي خطأ سواء في الأحاديث أو الآيات القرآنية، نرجو التواصل معنا وإبلاغنا فورًا. سنعمل بإذن الله على تصحيح المعلومات بأسرع وقت ممكن، فنحن نهتم بجودة وصحة المحتوى بشكل كبير.',
    }
  ];

  return (
    <View style={styles.startview}>
      <Header isBackBtn={false} title="أركاني" />
      <View style={{...styles.stepView, backgroundColor: COLORS.white}}>
        <StepComponent
          title={stepsPage[step - 1].title}
          isSvg={stepsPage[step - 1].image.isSvg}
          image={stepsPage[step - 1].image.image}
          desc={stepsPage[step - 1].desc}
        />
      </View>
      <StartInfoNav
        maxPage={maxPage}
        currentPage={step}
        onBackPage={onBackClick}
        onNextPage={onNextClick}
        doneNavigate={() => navigation.navigate('home')}
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
    margin: 15,
    borderRadius: 15,
    padding: 20
  }
});