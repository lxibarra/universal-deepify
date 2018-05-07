import { getProperty } from './get/get.helpers';
// make a log available for debbuging
export const deepifyGet = (obj, prop) => {
  return getProperty(obj, prop);
};
