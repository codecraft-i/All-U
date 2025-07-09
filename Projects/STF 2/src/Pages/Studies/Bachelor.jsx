// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"
import PageIntroBachelor from "@components/PageIntroBachelor/PageIntroBachelor";
import BachelorDocs from "@components/PageIntroBachelor/BachelorDocs"

import ContactForm from "@components/ContactItems/ContactForm"
import ContactSection from "@components/ContactSection/ContactSection"

export default function Bachelor() {
    return (
        <>
          <Header />
          <PageIntroBachelor />
          <BachelorDocs />

	  <div className='baseContactSendingBox'>
            <ContactForm />
          </div>
          <ContactSection />

          <Footer />
        </>
    )
}
