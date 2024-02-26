import { Fragment } from "react";
import AppHeader from "./components/Header/AppHeader";
import StickyFooter from "./components/Footer/AppFooter";
import IntroSection from "./components/IntroSection/IntroSection";
import OfferingsSection from "./components/OfferingsSection/OfferingsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import CombinationsSection from "./components/CombinationsSection/CombinationsSection";
import InfrastructureSection from "./components/InfrastructureSection/InfrastructureSection";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <IntroSection />
      <OfferingsSection />
      <IndustriesSection />
      <CombinationsSection />
      <InfrastructureSection />
      <TestimonialsSection />
      <StickyFooter />
    </Fragment>
  );
}

export default App;
