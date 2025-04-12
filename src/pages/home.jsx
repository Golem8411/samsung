import Swiperhome from "../components/swiperhome/swiperhome";
import Flufftxt from "../components/flufftxt/flufftxt";
import Produtos from "../components/produtos/produtos";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";



const home = () => {
  return (
    <>
      <Header />
      <Swiperhome />
      <Flufftxt />
      <Produtos />
      <Footer />
    </>
  );
};

export default home;
