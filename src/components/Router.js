import { HashRouter as Router, Route, Switch /*, Redirect*/ } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Start from "../routes/Start";
import Navigation from "./Navigation";
import Signup from '../routes/Signup';
import Write from "../routes/Write";
import WriteSuccess from "../routes/WriteSuccess";

const AppRouter = ({isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/home">
              <Home userObj={userObj}/>
            </Route>
            <Route exact path="/write">
              <Write userObj={userObj}/>
            </Route>
            <Route exact path="/writesuccess">
              <WriteSuccess userObj={userObj}/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </>
        )}
        {/* <Redirect from="*" to="/"/> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
