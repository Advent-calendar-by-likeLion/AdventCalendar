import { HashRouter as Router, Route, Switch /*, Redirect*/ } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Start from "../routes/Start";
import Navigation from "./Navigation";
import Signup from '../routes/Signup';
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import WriteSuccess from "../routes/WriteSuccess";
import Nickname from '../routes/Nickname';
import HotelColor from '../routes/HotelColor';



const AppRouter = ({isLoggedIn, userObj}) => {
  return (
    <Router>
      {/* {isLoggedIn && <Navigation />} */}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
            <Route exact path="/nickname">
              <Nickname userObj={userObj}/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/write/:id">
              <Write userObj={userObj}/>
            </Route>
            <Route exact path="/hotelcolor">
              <HotelColor userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/write/:id">
              <Write />
            </Route>
            <Route exact path="/login">
              <Auth userObj={userObj}/>
            </Route>
            <Route exact path="/signup">
              <Signup userObj={userObj}/>
            </Route>
            <Route exact path="/writesuccess">
              <WriteSuccess userObj={userObj}/>
            </Route>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
          </>
        )}
        {/* <Redirect from="*" to="/"/> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
