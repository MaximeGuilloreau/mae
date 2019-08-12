import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Accommodation from '../Acommodation/Acommodation';
import PracticalInfos from '../PraticalInfos/PracticaInfos';
import WeedList from '../WeedingList/WeedingList';

const Home = () => (
  <Fragment>
    <Header />
    <Accommodation />
    <PracticalInfos />
    <Gallery />
    <WeedList/>
    <Contact />
  </Fragment>
)

export default Home;