import React, { useEffect, useState } from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu,
} from "./containers";
import { Navbar } from "./components";
import Modal from "./components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { useExitIntent } from "use-exit-intent";

import "./App.scss";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExitIntentModal, setIsExitIntentModal] = useState(false);

  const { registerHandler } = useExitIntent();

  const closeExit = () => {
    setIsExitIntentModal(false);
  };

  const close = () => {
    setIsModalVisible(false);
  };

  const handleModal = () => {
    if ( isExitIntentModal !== true && isModalVisible !== true ) {
      setIsExitIntentModal(true);
    }
  }

  registerHandler({
    id: "myHandlerId",
    handler: () => {
      handleModal();
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 35000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalVisible && !isExitIntentModal && (
          <Modal
            modalOpen={isModalVisible}
            handleClose={close}
            title="Special Offer!"
            text="Don't miss out on our exclusive deal."
          />
        )}
        {isExitIntentModal && (
          <Modal
            modalOpen={isExitIntentModal}
            handleClose={closeExit}
            title="Wait, before you go!"
            text="We have a special offer for you."
          />
        )}
      </AnimatePresence>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
