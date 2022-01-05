import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <nav>
        <div className={styles.center}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </nav>
    </footer>
  );
};
