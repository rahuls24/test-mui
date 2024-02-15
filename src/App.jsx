import { Fragment } from "react";
import AppHeader from "./components/Header/AppHeader";
import StickyFooter from "./components/Footer/AppFooter";
import IntroSection from "./components/IntroSection/IntroSection";
import OfferingsSection from "./components/OfferingsSection/OfferingsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <IntroSection />
      <OfferingsSection />
      <TestimonialsSection />
      <StickyFooter />
    </Fragment>
  );
}

export default App;
