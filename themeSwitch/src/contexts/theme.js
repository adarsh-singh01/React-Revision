//ISKA FORMAT PEHLE SE ALG HAI ISME SAB KUCH EK HI FILE ME H

import { createContext,useContext,useState } from "react";

export const ThemeContext=createContext({//paaing values and methods
    themeMode:"light",
    darkTheme:()=>{},//ye dono jaha import honge waha par bhi inko define kr skte hai
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){//IT IS A custom hook
    return useContext(ThemeContext )
}