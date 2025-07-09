// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"
import MasterStudyTringle from "@components/MasterItems/MasterStudyTringle"
import PageIntroMaster from "@components/MasterItems/PageIntroMaster";
import MasterDocs from "@components/MasterItems/MasterDocs";

import ContactForm from "@components/ContactItems/ContactForm"
import ContactSection from "@components/ContactSection/ContactSection"

export default function Master() {
    return (
        <>
          <Header />
          <PageIntroMaster />
          <MasterStudyTringle />
          <MasterDocs />
	  
	  <div className='baseContactSendingBox'>
            <ContactForm />
          </div>
          <ContactSection />
          <Footer />
        </>
    )
}
