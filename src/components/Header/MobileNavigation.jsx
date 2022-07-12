import React from "react";
import styles from "./Header.module.scss";
import NavContent from "./NavContent";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MobileNavigation() {
  const [open, setOpen] = React.useState(false);

  const hamburgerIcon = (
    <IoMdMenu
      className={styles.hamburger}
      size="40px"
      color="#ffff"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineCloseCircle
      className={styles.closeIcon}
      size="40px"
      color="#ffff"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavContent isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
