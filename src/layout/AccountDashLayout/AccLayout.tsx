import { AccLayoutProps } from "./AccLayout.props";
import styles from "./AccLayout.module.scss";

import React from "react";
import {} from "../../components";

import cn from "classnames";

export const AccLayout = ({ children }: AccLayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper)}>
      {/* <AccNavigation className={styles.navigation} /> */}

      <div className={styles.body}>{children}</div>
    </div>
  );
};
