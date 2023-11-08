import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Opinion from "./avis/Opinion";
import Navbar from "./components/Navbar/Navbar";
import Grades from "./grades/Grades";
import First from "./home/First";
import Items from "./items/Items";
import Shop from "./shop/Shop";
import Profile from "./profile/Profile";
import SuccessLogin from "./Successful/SuccessLogin/SuccessLogin";
import SuccessPurchase from "./Successful/SuccessPurchase/SuccessPurchase";
import Login from "./login/Login";
import useLocalStorage from "./components/hooks/useLocalStorage";
import NotFound from "./404/NotFound";
import Bid from "./bid/Bid";
import History from "./history/History";
import Footer from "./components/Footer/Footer";
import Legals from "./legals/Legals";
import MustConnect from "./Mustconnect/Connection";
import Admin from "./admin/Admin";
import Countdown from "./countdown/Countdown";
import News from "./news/News";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FantaDupli from "./FantaDupli/FantaDupli";
import Presentation from "./Presentation/Presentation";
import Potions from "./Potions/Potions";

function App() {
  const [access_token, setAccessToken] = useLocalStorage(
    "access_token",
    undefined
  );

  const token = useState(
    new URLSearchParams(window.location.search).get("data") !== undefined
      ? atob(new URLSearchParams(window.location.search).get("data"))
      : undefined
  );
  return (
    <div>
      <Navbar accessToken={access_token} />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/duplication-de-minerais" element={<FantaDupli accessToken={access_token}/>} />
          <Route path="/mustconnect" element={<MustConnect />} />
          <Route path="/login" element={<Login token={token} setAccessToken={setAccessToken} />} />
          <Route path="/admin" element={<Admin accessToken={access_token} />} />
          <Route path="/encheres" element={<Bid accessToken={access_token} />} />
          <Route path="/items" element={<Items accessToken={access_token} />} />
          <Route path="/grades" element={<Grades accessToken={access_token} />} />
          <Route path="/profile" element={<Profile accessToken={access_token} />} />
          <Route path="/notre-histoire" element={<History />} />
          <Route path="/logged" element={<SuccessLogin accessToken={access_token} />} />
          <Route path="/purchased" element={<SuccessPurchase accessToken={access_token} />} />
          <Route path="/avis" element={<Opinion accessToken={access_token} />} />
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path='/countdown' element={<Countdown objectif={4400} accessToken={access_token}/>} />
          <Route path='/news' element={<News accessToken={access_token} />} />
          <Route path="/potions" element={<Potions accessToken={access_token} />} />
          {/* <Route path='/presentation' element={<Presentation accessToken={access_token} />} /> */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
