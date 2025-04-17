import Navbar from "@/Navbar";
import Hero from "@/Hero";
import Services from "@/services";

import AboutMe from "@/aboutme";
import ContactForm from "@/Contact";
import FAQs from "@/faq";
import TeamSection from "@/team";

import WhyChooseUs from "@/whychooseus";
import Testimonials from "@/testimonials";
import Footer from "@/footer";
import RecentProjects from "@/recentproject";

export default function Home() {
  return (

    <>

    <Navbar />
    <Hero />
    <Services />
    <AboutMe />
    <Testimonials />
    <ContactForm />
    <WhyChooseUs />
    {/* <RecentProjects /> */}

    <TeamSection />
    {/* <FAQs /> */}

    
    {/* <Footer /> */}
    </>
  );
}
