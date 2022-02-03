import { NO_CONSTRUCTOR } from './constants';

export const isCalledWithNew = (constructor) => {
  if (!constructor) {
    throw Error(NO_CONSTRUCTOR);
  }
};
