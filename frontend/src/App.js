import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import MeetOurAmbassadors from "./components/pages/MeetOurAmbassadors";
import ShippingAndReturns from "./components/pages/ShippingAndReturns";
import About from './components/pages/About';
import './styles/App.scss';

function App() {

  return (
    <div id='app'>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ambassadors" element={<MeetOurAmbassadors />} />
            <Route path="/shippingandreturns" element={<ShippingAndReturns />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;