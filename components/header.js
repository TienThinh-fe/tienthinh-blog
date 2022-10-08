import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header = () => {
  const [isHome, setIsHome] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/about") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <a>TienThinh</a>
        </Link>
      </div>
      <div className={styles.nav}>
        <Link href="/">
          <a className={`${styles.navItem} ${isHome && styles.selected}`}>
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a className={`${styles.navItem} ${!isHome && styles.selected}`}>
            About
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
