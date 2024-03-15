import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useRef,
  useState
} from 'react';
import { IFormProps } from './types';

import styles from './form.module.css';
import clsx from 'clsx';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { namePattern } from '../../utils/constants';

export const Form: FC<IFormProps> = ({ setMode, className }) => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
  const [repeatPasswordError, setIsRepeatPasswordError] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setNameValue(target.value);
    if (!namePattern.test(target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setEmailValue(target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setIsRepeatPasswordError(false);
    setPasswordValue(target.value);
  };

  const handleRepeatPasswordChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setIsRepeatPasswordError(false);
    setRepeatPasswordValue(target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (passwordValue !== repeatPasswordValue) {
      setIsRepeatPasswordError(true);
      return;
    }
    setIsRepeatPasswordError(false);

    setMode('complete');
  };

  return (
    <form
      className={clsx(styles.form, className)}
      ref={formRef}
      data-testid='form'
      onSubmit={handleSubmit}
    >
      <div className={styles.icon} />
      <div className={styles.text_box}>
        <p className='text text_type_main-large'>Мы нуждаемся в вашей силе!</p>
        <p className={clsx(styles.text, 'text text_type_main-medium')}>
          Зарегистрируйтесь на нашей платформе, чтобы присоединиться к списку
          контрибьюторов
        </p>
      </div>
      <fieldset className={styles.fieldset}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleNameChange}
          value={nameValue}
          name={'name'}
          error={nameError}
          errorText={'Некорректный формат имени'}
          size={'default'}
          required
          data-testid='name-input'
          extraClass={clsx(styles.input, { [styles.input_error]: nameError })}
        />
        <EmailInput
          onChange={handleEmailChange}
          value={emailValue}
          name={'email'}
          isIcon={false}
          required
          data-testid='email-input'
          extraClass={clsx(styles.input, { [styles.input_error]: false })}
        />
        <PasswordInput
          onChange={handlePasswordChange}
          value={passwordValue}
          name={'password'}
          required
          data-testid='password-input'
          extraClass={clsx(styles.input, { [styles.input_error]: false })}
        />
        <PasswordInput
          onChange={handleRepeatPasswordChange}
          value={repeatPasswordValue}
          name={'repeatPassword'}
          placeholder='Повторите пароль'
          required
          data-testid='repeat-password-input'
          extraClass={clsx(styles.input, {
            [styles.input_error]: repeatPasswordError
          })}
        />
        {repeatPasswordError && (
          <p className='text input__error text_type_main-default mt-2 mb-2'>
            Пароли не совпадают
          </p>
        )}
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={!formRef.current?.checkValidity()}
        >
          Зарегистрироваться
        </Button>
      </fieldset>
      <div className={styles.signin_box}>
        <p className='text text_type_main-default text_color_inactive'>
          Уже зарегистрированы?
        </p>
        <Button
          htmlType='button'
          type='secondary'
          size='medium'
          extraClass={styles.signin_btn}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
