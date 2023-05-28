import React, { Fragment } from "react";
import Banner from "../../components/ui/Banner";
import Analytics from "../../components/ui/Analytics";
import Newsletter from "../../components/ui/Newsletter";
import Footer from "../../components/ui/Footer";
import Cards from "../../components/ui/Cards";
import ServicesOne from "../../components/ui/ServiceOne";

const HomePage = () => {
  console.log("hai");
  return (
    <Fragment>
      <Banner />
      <Analytics />
      <Newsletter />
      <Cards />
    </Fragment>
  );
};

export default HomePage;
