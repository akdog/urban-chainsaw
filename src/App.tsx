import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import MobileApp from "./mobile/MobileApp";
import DesktopApp from "./desktop/DesktopApp";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {windowSize[0] > 820 ? <DesktopApp /> : <MobileApp />}
    </>
  );
}

const GlobalStyle = createGlobalStyle`

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

body{
  font-family: 'Montserrat', sans-serif;
}

h1{
  font-size:1.625rem;
  font-weight:600;
}

h2{
  font-size:1.5rem;
  font-weight:500;
}

h3{
  font-size:1.3rem;
  font-weight:700;
}

h4{
  font-size:1.125rem;
  font-weight:500;
}

h5{
  font-size:1rem;
  font-weight:500;
}

h6{
  font-size:0.875rem;
  font-weight:500;
}

p{
  font-size:0.75rem;
  font-weight:500;
}

a{
  text-decoration:none;
  color:black;
}


`;

export default App;
