import "./App.css";
import { Route, Routes } from "react-router-dom"; // Import Router, Route, Routes
import Header from "./Components/header";
import PeopleSearch from "./Components/peopleSearch";
import PhoneSearch from "./Components/phoneSearch";
import PopularFullNames from "./Components/popularFullNames";
import PopularLastNames from "./Components/popularLastNames";
import TrendingNames from "./Components/trendingNames";
import AddressSearch from "./Components/addressSearch";

function App() {
  return (
    <>
      {/* Render the Header on every page */}
      <Header />

      {/* Define the routes for the application */}
      <Routes>
        <Route path="/trending-names" element={<TrendingNames />} />
        <Route path="/popular-full-names" element={<PopularFullNames />} />
        <Route path="/popular-last-names" element={<PopularLastNames />} />
        <Route path="/phone-search" element={<PhoneSearch />} />
        <Route path="/people-search" element={<PeopleSearch />} />
        <Route path="/address-search" element={<AddressSearch />} />
      </Routes>
    </>
  );
}

export default App;
