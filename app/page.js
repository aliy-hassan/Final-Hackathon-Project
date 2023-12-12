// import Image from 'next/image'
import Navigation from './(components)/navigation/navigation';
import MainSection from './(components)/mainSection/mainSection';
import SecSection from './(components)/secSection/secSection';
import LastSection from './(components)/lastSection/lastSection';
import Footer from './(components)/footer/footer';

export default function Home() {
  return (
    <div>
      <Navigation />  
      <MainSection />    
      <SecSection />
      <LastSection />
      <Footer />
    </div>
  )
}
