import "./Header.css";
import profileImage from "../../assets/profile.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="header__badge">Arquitetura • Interiores</div>

      <div className="header__identity">
        <div className="header__logoWrap">
          <div className="header__logoCircle">
            <img
              src={profileImage}
              alt="Lunu Arquitetura"
              className="header__profileImage"
            />
          </div>
        </div>

        <div className="header__text">
          <h1 className="header__title">Lunu Arquitetura</h1>

          <p className="header__description">
            Projetos que acolhem e unem{" "}
            <span className="header__span">sensibilidade</span> à{" "}
            <span className="header__span">funcionalidade</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
