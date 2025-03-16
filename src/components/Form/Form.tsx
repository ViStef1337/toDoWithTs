import { ChangeEvent, FormEvent, useState } from 'react';
import { FormI } from './Form.types.ts';

export const Form = ({ onSubmit }: FormI) => {
  const [query, setQuery] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleChange} name="text" type="text" />
      <button type="submit">button</button>
    </form>
  );
};
