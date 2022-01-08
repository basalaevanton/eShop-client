import { LayoutProps } from "./AppLayout.props";
import styles from "./AppLayout.module.scss";

import React, { FunctionComponent } from "react";
import { Header, Footer } from "../../components";

import cn from "classnames";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper)}>
      <Header className={styles.header} />

      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withAppLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
