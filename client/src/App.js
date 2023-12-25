import "./App.css"; 
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <>
      <Header />
      <main>
        <h1>hlo world</h1>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
