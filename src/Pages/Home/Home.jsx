import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="bg-base-300">
      <Helmet>
        <title> Demo | Home</title>
      </Helmet>

      <Banner />

    
    </div>
  );
};

export default Home;
