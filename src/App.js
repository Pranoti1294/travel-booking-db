import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASE_ROUTE, BOOKING_EDIT_ROUTE, BOOKING_LINK_ROUTE, BOOKING_ROUTE } from "./constants/AppRoute";
import { NavigationBar } from "./components/ui/NavigationBar";
import { Home } from "./components/ui/Home";

import { Booking } from "./components/ui/Booking";
import { BookingList } from "./components/ui/BookingList";
import { BookingEditForm } from "./components/ui/BookingEditForm";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path={BASE_ROUTE} element={<Home/>} />
        <Route path={BOOKING_ROUTE} element={<Booking/>} />
        <Route path={BOOKING_LINK_ROUTE} element={<BookingList/>} />
        <Route path={BOOKING_EDIT_ROUTE} element={<BookingEditForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
