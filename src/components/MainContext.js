//import { useContext } from "react/cjs/react.development";
import { useContext } from "react/cjs/react.production.min";

import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";

const MainContext = () => {
    const {theme} = useContext(ThemeContext);
    const {auth} = useContext(AuthContext);
    const {texts} = useContext(LanguageContext);

    return ( 
        <main className={theme}>
            {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
            <p>{texts.mainContent}</p>
        </main>
     );
}
 
export default MainContext;