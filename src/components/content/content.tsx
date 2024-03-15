import { FC, useState } from 'react';

import { IContentProps } from './types';
import styles from './content.module.css';
import clsx from 'clsx';
import { Form } from '../form';
import { Success } from '../success';

export const Content: FC<IContentProps> = ({ className }) => {
  const [mode, setMode] = useState<'form' | 'complete'>('form');

  return (
    <main className={clsx(styles.container, className)}>
      {mode === 'form' ? (
        <>
          <div className={styles.text_box}>
            <p className='text text_type_main-large'>
              Stellar Burgers выходит в открытое пространство
            </p>
            <p className={clsx(styles.text, 'text text_type_main-medium')}>
              Так как Stellar Burgers — технологичный стритфуд с космическими
              технологиями, у нас грядёт грандиозное обновление. Скоро мы
              переформатируем наше меню в опенсорсный проект. Голосуйте
              за понравившиеся бургеры, оставляйте комментарии к нашим MR в
              меню, заводите ишью на наши булки, котлеты и другие компоненты.
            </p>
          </div>
          <Form setMode={setMode} />
        </>
      ) : (
        <Success />
      )}
    </main>
  );
};
