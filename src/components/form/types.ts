import type { Dispatch, HTMLProps, SetStateAction } from 'react';

export type IFormProps = {
  setMode: Dispatch<SetStateAction<'form' | 'complete'>>;
} & HTMLProps<HTMLFormElement>;
