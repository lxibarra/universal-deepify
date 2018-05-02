

// for now all code will be here but it must be refactored into its own functions
export const getProperty = (ref, propertyName = '') => {
  if(ref === null || typeof ref === 'undefined') {
    return null;
  }

  // handle prop splitting.
  const props = propertyName.slice(',');

  if (typeof ref === 'object' && (ref instanceof Array) === false) {
    return ref[propertyName];
  }
};
