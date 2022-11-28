import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import {authService} from "fbase"
import { GlobalStyle, MediaDiv, SnowOpacity } from "../styles/layout";
import Snowfall from 'react-snowfall'
import { SnowfallStyle } from "../styles/layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const refreshUser = () => {
    setUserObj(authService.currentUser);
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
    <GlobalStyle/>
      <MediaDiv>
        <SnowfallStyle style={{background: 'transparent', position: 'relative', snowflakeCount: "150" }}>

          <Snowfall 
          color="white"
             />
    
          <div style={{position: "relative"}}>
            {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser}/> : "init.."}
          </div>
        </SnowfallStyle>
      </MediaDiv>
    </>
  )
}

export default App;
