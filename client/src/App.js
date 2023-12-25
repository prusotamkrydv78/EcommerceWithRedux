import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductDetails from "./Screens/ProductDetails";
function App() {
  return (
    <>
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductDetails/>}  />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
