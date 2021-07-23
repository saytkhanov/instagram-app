import React from "react";
import styles from "./header.module.css";
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img
            alt="Instagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            width={"160px"}
          />
        </a>
      </div>
      <div>
        <input type="text" placeholder="Поиск🔍" className={styles.input} />
      </div>
      <div className={styles.icons}>
        <div className={styles.div}>
          <Link to='/'>
            <img
              src="https://img.icons8.com/ios/50/000000/home--v1.png"
              width={"36px"}
            />
          </Link>
        </div>
        <div className={styles.div}>
          <img
            src="https://img.icons8.com/ios/64/000000/navigation.png"
            width={"35px"}
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/carbon-copy/100/000000/filled-like.png"
            width="42px"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
