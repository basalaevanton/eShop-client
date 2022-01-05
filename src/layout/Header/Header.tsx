import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";

import { ReactComponent as Like } from "../../images/like.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Cart } from "../../images/cart.svg";

import cn from "classnames";

import { Link } from "react-router-dom";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <nav className={styles.nav}>
        <div className={styles.groupNav}>
          <Link to="/">Home</Link>
          <Link to="/">Clothes</Link>
          <Link to="/">Shoes</Link>
          <Link to="/">Accessories</Link>
        </div>

        <div className={styles.center}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className={styles.groupNav}>
          <Link to="/">
            <Like />
          </Link>
          <Link to="/account">
            <User />
          </Link>
          <Link to="/">
            <Cart />
          </Link>
        </div>
      </nav>
    </header>
  );
};
