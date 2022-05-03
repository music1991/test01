import { useContext } from "react/cjs/react.development";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";

const HeaderContext = () => {   
    const { theme, handleTheme } = useContext(ThemeContext);
    const { auth, handleAuth } = useContext(AuthContext);
    const { texts, handleLanguage } = useContext(LanguageContext);

    
    return ( 
        <header className={theme}>
            <h3>{texts.headerTitle}</h3>
            <h3>{texts.headerSubtitle}</h3>

            <select name="language" onChange={handleLanguage}>
                <option value="es">Es</option>
                <option value="en">En</option>
            </select>

            <input 
                type="radio" 
                name="theme" 
                id="light-context" 
                onClick={handleTheme} 
                value="light" />
            <label htmlFor="light-context">{texts.headerLight}</label>
            <input 
                type="radio" 
                name="theme" 
                id="dark-context" 
                onClick={handleTheme} 
                value="dark" />
            <label htmlFor="dark-context">{texts.headerDark}</label>

            <button onClick={handleAuth}>
                {auth ? texts.buttonLogout : texts.buttonLogin}
            </button>
        </header>
     );
}
 
export default HeaderContext;