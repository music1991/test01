import { useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

import FooterContext from "./FooterContext";
import HeaderContext  from "./HeaderContext";
import MainContext  from "./MainContext";


const MyPageContext = () => {  
    return ( 
        <div className="my-page">
            <ThemeProvider>
                <AuthProvider>
                    <LanguageProvider>
                        <HeaderContext />
                        <MainContext />
                        <FooterContext />
                    </LanguageProvider>
                </AuthProvider>
            </ThemeProvider>
        </div>
     );
}
 
export default MyPageContext;