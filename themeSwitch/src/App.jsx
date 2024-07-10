import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

//Actual change ke liye pure JS likhna hi padega

useEffect(()=>{
  const classAccessed=document.querySelector('html').classList
  classAccessed.remove("light","dark")//we dont ki usme pehle se kya hai
  classAccessed.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
