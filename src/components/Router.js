import { HashRouter as Router, Route, Switch /*, Redirect*/ } from "react-router-dom";
import Auth from "routes/Auth";
import Start from "../routes/Start";
import Signup from '../routes/CreateSign';
import Write from "../routes/Write";
import Home2 from "../routes/Home2";
import WriteSuccess from "../routes/WriteSuccess";
import Nickname from '../routes/Nickname';
import HotelColor from '../routes/HotelColor';
import InitConfigData from "../routes/InitConfigData";
import AdminConfig from "../routes/AdminConfig";
import MyPage from "../routes/MyPage";
import GingerPage from "../routes/GingerPage";
import CreateSign from "../routes/CreateSign";
import LikeLionAd from "../advertisement/LikeLionAd";
import Home2Private from "../routes/Home2Private";


const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
            <Route exact path="/hotelp/:id">
              <Home2Private userObj={userObj}/>
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
            <Route exact path="/AdminConfig/:id">
              <AdminConfig userObj={userObj}/>
            </Route>
            <Route exact path="/AdminConfig">
              <AdminConfig userObj={userObj}/>
            </Route>
            <Route exact path="/mypage/:id">
              <MyPage userObj={userObj} />
            </Route>
            <Route exact path="/ginger/:id">
              <GingerPage userObj={userObj} />
            </Route>
            <Route exact path="/createSign">
              <CreateSign userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/hotel/:id">
              <Home2 userObj={userObj}/>
            </Route>
            <Route exact path="/hotelp/:id">
              <Home2Private userObj={userObj}/>
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
            <Route exact path="/mypage">
              <MyPage userObj={userObj} />
            </Route>
            <Route exact path="/createSign">
              <CreateSign userObj={userObj} />
            </Route>
          </>
        )}
        {/* <Redirect from="*" to="/"/> */}
      </Switch>
      <LikeLionAd/>
    </Router>
  );
};

export default AppRouter;
