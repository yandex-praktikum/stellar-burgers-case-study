import { FC } from 'react';
import { ISuccessProps } from './types';

import styles from './seccess.module.css';
import clsx from 'clsx';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const Success: FC<ISuccessProps> = ({ className }) => (
  <section
    className={clsx(styles.container, className)}
    data-testid='success-container'
  >
    <p className={clsx(styles.text, 'text text_type_main-large mb-8')}>
      Да пребудет с нами сила опенсорса!
    </p>
    <div className={clsx(styles.image, 'mt-8')} />
    <Button htmlType='submit' type='primary' size='medium'>
      Погнали!
    </Button>
  </section>
);
