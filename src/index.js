import { isMutable, deepCopy, setProperty } from './helpers';

export const deepify = {
  mutate: false,
  configure: function(mutate) {
    this.mutate = mutate;
  },
  // give the user the ability to mutate or not mutate.
  set: function(objRef, property, value, mutate) {
    if (typeof property === 'string' && property.length > 0) {
      const ref = isMutable(mutate, this) ? objRef : deepCopy(objRef);
      if (ref !== null) {
        setProperty(ref, property, value);
      }
      return ref;
    }
    return objRef;
  }
};
