import "../../scss/main.scss";
import { useState } from "react";

import Switch from "./Switch";
import CustomSun from "./svg/CustomSun";
import CustomMoon from "./svg/CustomMoon";

// This switch will change betwen dark and light theme.
const ThemeSwitch = () => {

  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";

  const [theme, setTheme] = useState(lightTheme);
  let initialValue = false;

  // First of all, will comprobate if the user have already changed the theme 
  // in some other visit to our website.
  //
  // If he or she have changed it, we will put the already defined theme.
  // But if the theme have not been defined yet, we will put de light theme as the default one.
  if (localStorage.getItem("theme") !== theme) {
    setTheme(localStorage.getItem("theme"));
  }

  if (theme === darkTheme) {
    body.classList.add(darkTheme);
    initialValue = true;
  } else {
    body.classList.add(lightTheme);
    // (default) initialValue = false;
  }

  // The function 'switchTheme' will be passed to the Swith function and will be called every
  // time the switch or toggle change.
  //
  // This function will be the one in charge of changing the theme and saving it in the local 
  // storage, so it could be used another time the user enter to our web.
  const switchTheme = () => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", lightTheme);
      setTheme(lightTheme);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", darkTheme);
      setTheme(darkTheme);
    }
  }
  

  return(
    <div className="switch-theme">
      {theme === lightTheme ? <CustomSun/> : <CustomMoon/>}
      <Switch initialValue={initialValue} onChange={switchTheme} />
    </div>
  )
}

export default ThemeSwitch;