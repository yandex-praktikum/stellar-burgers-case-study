import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { clsx } from 'clsx';

import type { IHeaderProps } from './types';
import type { FC } from 'react';

import styles from './header.module.css';

export const Header: FC<IHeaderProps> = ({ className }) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.content}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <BurgerIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Конструктор</p>
        </li>
        <li className={styles.menu_item}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">
            Лента заказов
          </p>
        </li>
      </ul>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.menu_item}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </div>
    </div>
  </header>
);
