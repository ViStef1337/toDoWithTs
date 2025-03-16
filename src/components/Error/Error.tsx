import { ErrorTypes } from './Error.types.ts';

export const Error = ({ text }: ErrorTypes) => {
  return <p>{text}</p>;
};
