import React from "react";
import { AccNavigationProps } from "./AccNavigation.props";
import styles from "./AccNavigation.module.scss";

import cn from "classnames";

import { ReactComponent as Like } from "../../images/like.svg";
import { ReactComponent as User } from "../../images/user.svg";

import { Link, NavLink } from "react-router-dom";
import { accRouting } from "../../helpers/helpAccoutNavigation";

export const AccNavigation = ({
  className,
  ...props
}: AccNavigationProps): JSX.Element => {
  return (
    <nav className={cn(className, styles.nav)}>
      <ul>
        {accRouting.map(({ id, path, name, icon }) => (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                cn(styles.itemMenu, {
                  [styles.activeMenu]: isActive,
                })
              }
            >
              {icon}
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
