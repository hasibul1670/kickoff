import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="bg-base-300">
      <Helmet>
        <title> Demo | Home</title>
      </Helmet>

      <Banner />

      <FAQ />
    </div>
  );
};

export default Home;
