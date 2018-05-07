import { isMutable, deepCopy, setProperty } from './set/set.helpers';

const deepifyConfiguration = {
  mutate: false,
  configure: function(mutate) {
    this.mutate = mutate;
  }
};

export const deepifySet = (objRef, property, value, mutate) => {
  if (typeof property === 'string' && property.length > 0) {
    const ref = isMutable(mutate, deepifyConfiguration) ? objRef : deepCopy(objRef);
    if (ref !== null) {
      setProperty(ref, property, value);
    }
    return ref;
  }
  return objRef;
};
