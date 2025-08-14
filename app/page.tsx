import MainSection from "@/components/MainSection";
import AboutUs from "@/components/AboutUs";
import ServicesSliderSection from "@/components/ServicesSliderSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import QualitiesStrip from "@/components/QualitiesStrip";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="flex items-center flex-col w-full">
      <MainSection />
      <QualitiesStrip />
      <WhyChooseUs />
      <ServicesSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
