const Header = ({ theme, handleTheme, texts, handleLanguage, auth, handleAuth }) => {
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
                id="light" 
                onClick={handleTheme} 
                value="light" />
            <label htmlFor="light">{texts.headerLight}</label>
            <input 
                type="radio" 
                name="theme" 
                id="dark" 
                onClick={handleTheme} 
                value="dark" />
            <label htmlFor="dark">{texts.headerDark}</label>

            <button onClick={handleAuth}>
                {auth ? texts.buttonLogout : texts.buttonLogin}
            </button>
        </header>
     );
}
 
export default Header;