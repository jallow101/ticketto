// import "./App.css";
// import Banner from "./components/Banner";
// import BridgeBanner from "./components/BridgeBanner";
// import FerryBanner from "./components/FerryBanner";
// import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Account/Profile";
import Content from "./components/Admin/Content";
import CreateEvent from "./components/Admin/event/CreateEvent";
import EditEvent from "./components/Admin/event/EditEvent";
import AdminHeader from "./components/Admin/Header";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./components/GoogleAuth/Login";
import Header from "./components/Header";
import ConcertForm from "./components/Overview/ConcertForm";
import Overview from "./components/Overview/Overview";
import Footer from "./pages/Landing/Footer";
import Home from "./pages/Landing/Home";
import TicketList  from "./pages/Purchase/TicketList";
import TicketDetails from "./pages/Purchase/TicketDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <AdminHeader />
            <Content />
          </Route>

          {/* <Route exact path="/admin/vendors">
            <AdminHeader />
            <Content>
              <Vendors />
            </Content>
          </Route> */}

          <Route exact path="/admin/createEvent">
            <AdminHeader />
            <CreateEvent />
          </Route>

          <Route exact path="/admin/editevent">
            <AdminHeader />
            <EditEvent />
          </Route>

          <Route exact path="/">
            <Header />
            {/* <Banner />
            <FerryBanner />
            <BridgeBanner /> */}
            <Home />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Header />
            <Login />
          </Route>

          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>
          
          <Route exact path="/tickets">
            <Header />
            <TicketList />
          </Route>

          <Route exact path="/tickets/tickinfo">
            <Header />
            <TicketDetails />
          </Route>


          <Route exact path="/search">
            <Header />
            {/* <Search /> */}
            <Overview />
          </Route>

          <Route exact path="/buy">
            <Header />
            {/* <Search /> */}
            <ConcertForm />
          </Route>

          <Route path="/checkout/:eventId">
            <Header />
            <Checkout />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
