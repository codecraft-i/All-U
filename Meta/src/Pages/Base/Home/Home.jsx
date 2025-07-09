import { useTranslation } from 'react-i18next';


import TopHeader from '../../../Components/TopHeader/TopHeader';
import Header from '../../../Components/Header/Header';
import HeroSection from '../../../Components/HeroSection/HeroSection'

import Menu from '../../../Components/Menu/Menu';
import About from '../../../Components/About/About';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <TopHeader />
      <Header />
      <div data-header-pivot></div>
      <HeroSection />
      <Menu />
      <About />
    </div>
  );
}