import styles from "../header/header.module.css";
import logoHeader from "../../assets/img/logo-samsung.jpeg";
import Carrinho from "../../assets/img/carrinho.jpeg";
import Pessoal from "../../assets/img/pessoal.jpeg";
import Menu from "../../assets/img/menu.jpeg";
import MenuOpen from "../../assets/img/menuOpen.jpeg";
import Search from "../../assets/img/search.jpeg";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div className={styles.ImgHeader}>
          <a href="/">
            <img src={logoHeader} alt="" />
          </a>
        </div>
        <div className={styles.wrapMobile}>
          <nav className={menuActive ? styles.active : ""}>
            <ul className={styles.ulMenu}>
              <li className={styles.navLi}>
                <a href="/Loja">Shop</a>
              </li>
              <li className={styles.navLi}>
                <a href="/Loja">Mobile</a>
              </li>
              <li className={styles.navLi}>
                <a href="">TV & AV</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Eletrodomésticos</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Informática & Monitores</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Acessórios</a>
              </li>
              <li className={styles.navLi}>
                <a href="">SmartThings</a>
              </li>
              <li className={styles.navLi}>
                <a href="">AI</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.module}>
          <div className={styles.pesquisa}>
            <li className={styles.searchBtn}>
              <button className={styles.btnSrc}>
                <img className={styles.iconSrc} src={Search} />
                Pesquisar
              </button>
            </li>
          </div>
          <li>
            <a href="">
              <img src={Carrinho} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Pessoal} alt="" />
            </a>
          </li>
          <button onClick={toggleMenu} id={styles.menuMobile}>
            <img
              src={menuActive ? MenuOpen : Menu}
              id={styles.menuIcons}
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
