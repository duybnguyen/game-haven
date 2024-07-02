import Navbar from "../Navbar/Navbar";
import backgroundVideo from '../../assets/images/pyke.mp4'
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <video autoPlay loop muted id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
