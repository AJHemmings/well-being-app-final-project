import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-custom-green text-custom-white">
      <Header />
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}
