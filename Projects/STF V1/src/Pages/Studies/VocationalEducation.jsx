// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"

import PageIntroVE from "@components/VocationalEducation/PageIntroVE"
import VEDocs from "@components/VocationalEducation/VEDocs"

import ContactForm from "@components/ContactItems/ContactForm"
import ContactSection from "@components/ContactSection/ContactSection"

export default function VocationalEducation() {
    return (
        <>
          <Header />
          <PageIntroVE />
          <VEDocs />

	  <div className='baseContactSendingBox'>
            <ContactForm />
          </div>
          <ContactSection />
          <Footer />
        </>
    )
}
