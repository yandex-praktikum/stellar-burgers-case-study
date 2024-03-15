import { Dispatch, HTMLProps, SetStateAction } from 'react';

export interface IFormProps extends HTMLProps<HTMLFormElement> {
  setMode: Dispatch<SetStateAction<'form' | 'complete'>>;
}
