
export const getProperty = (ref, propertyName = '') => {
  if(ref === null || typeof ref === 'undefined') {
    return null;
  }

  const props = propertyName.split('.');

  if (typeof ref === 'object' && (ref instanceof Array) === false) {
    let _ref = ref;
    props.forEach((prop) => {
      if (typeof _ref !== 'undefined' && _ref.hasOwnProperty(prop)) {
        _ref = _ref[prop];
      } else {
        _ref = undefined;
      }
    });
    return _ref;
  }
};
