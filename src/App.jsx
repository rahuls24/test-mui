import { Fragment } from "react";
import AppHeader from "./components/Header/AppHeader";
import StickyFooter from "./components/Footer/AppFooter";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <StickyFooter />
    </Fragment>
  );
}

export default App;
