import { HashRouter as Router, Route, Switch /*, Redirect*/ } from "react-router-dom";
import Auth from "routes/Auth";
import Start from "../routes/Start";
import Signup from '../routes/Signup';
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import WriteSuccess from "../routes/WriteSuccess";
import Nickname from '../routes/Nickname';
import HotelColor from '../routes/HotelColor';
import InitConfigData from "../routes/InitConfigData";
import AdminConfig from "../routes/AdminConfig";
import MyPage from "../routes/MyPage";


const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
            <Route exact path="/nickname">
              <Nickname userObj={userObj} refreshUser={refreshUser}/>
            </Route>
            <Route exact path="/InitConfigData">
              <InitConfigData userObj={userObj}/>
            </Route>
            <Route exact path="/write/:id">
              <Write userObj={userObj}/>
            </Route>
            <Route exact path="/hotelcolor">
              <HotelColor userObj={userObj} />
            </Route>
            <Route exact path="/">
              <Start userObj={userObj} />
            </Route>
            <Route exact path="/writesuccess">
              <WriteSuccess userObj={userObj}/>
            </Route>  
            <Route exact path="/login">
              <Auth userObj={userObj}/>
            </Route>
            <Route exact path="/signup">
              <Signup userObj={userObj}/>
            </Route>
            <Route exact path="/AdminConfig/:id">
              <AdminConfig userObj={userObj}/>
            </Route>
            <Route exact path="/AdminConfig">
              <AdminConfig userObj={userObj}/>
            </Route>
            <Route exact path="/mypage/:id">
              <MyPage userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
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
            <Route exact path="/hotelcolor">
              <HotelColor userObj={userObj} />
            </Route>
            <Route exact path="/AdminConfig/:id">
              <AdminConfig userObj={userObj}/>
            </Route>
            <Route exact path="/AdminConfig">
              <AdminConfig userObj={userObj}/>
            </Route>
          </>
        )}
        {/* <Redirect from="*" to="/"/> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
