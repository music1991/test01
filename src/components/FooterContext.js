//import { useContext } from "react/cjs/react.development";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react/cjs/react.production.min";

const FooterContext = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);

    return ( 
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
     );
}
 
export default FooterContext;