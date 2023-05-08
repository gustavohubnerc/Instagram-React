import User from './User'
import Suggestions from './Suggestions';


const Sidebar = () => {
    return (
      <div className="sidebar">     
          <User />       
          <Suggestions />
        <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2023 INSTAGRAM DO FACEBOOK</div>
      </div>
    );
}

export default Sidebar;