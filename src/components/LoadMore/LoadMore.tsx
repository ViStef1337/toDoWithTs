import { LoadMoreTypes } from './LoadMore.types.ts';

export const LoadMore = ({ onClick }: LoadMoreTypes) => {
  return <button onClick={onClick}>next</button>;
};
