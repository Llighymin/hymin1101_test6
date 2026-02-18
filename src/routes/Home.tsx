import HeroSection from "../components/sections/HeroSection";
import ApplicationSection from "../components/sections/ApplicationSection";
import ElementalTechnology from "../components/sections/ElementalTechnology";
import LocalizationSection from "../components/sections/LocalizationSection";
import PerceptionSection from "../components/sections/PerceptionSection";
import PlanningSection from "../components/sections/PlanningSection";
import ComputingSection from "../components/sections/ComputingSection";
import BusinessOpportunities from "../components/sections/BusinessOpportunities";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="snap-container">
      <HeroSection />
      {/* <ApplicationSection /> */}
      <ElementalTechnology />
      <LocalizationSection />
      <PerceptionSection />
      <PlanningSection />
      <ComputingSection />
      <BusinessOpportunities />
      <Footer />
    </div>
  );
};

export default Home;
