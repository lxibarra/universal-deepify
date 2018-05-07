import { emptyArrayRegxp, indexArrayRefRegxp, indexArrayRegxp, numberRegex, arrayBrackets } from '../shared/regex.expressions';
import { getIndexFromPropName } from '../shared/helpers';

export const getArrayAtPosition = (ref, propertyName) => {
  const propIndex = getIndexFromPropName(propertyName);
  const cleanPropName = propertyName.replace(indexArrayRegxp, '');

  if(ref[cleanPropName] instanceof Array &&
    ref[cleanPropName].length > 0 &&
    propIndex <= ref[cleanPropName].length
   ) {
     return ref[cleanPropName][propIndex];
  }
};

export const getArrayRef = (ref, propertyName) => {
  const arrayProperty = propertyName.replace(emptyArrayRegxp, '');
  return getArrayAtPosition(ref, arrayProperty);
};

export const getProperty = (ref, propertyName = '') => {
  if(ref === null || typeof ref === 'undefined') {
    return null;
  }
  const props = propertyName.split('.');

  if (typeof ref === 'object' && (ref instanceof Array) === false) {
    let _ref = ref;
    // pending important change.
    // as soon as we hit undefined we should exit the loop.
    props.forEach((prop) => {
      if(typeof _ref !== 'undefined' && _ref.hasOwnProperty(prop) === false && prop.match(indexArrayRegxp)) {
        _ref = getArrayAtPosition(_ref, prop);
      } else if (typeof _ref !== 'undefined' && prop.match(indexArrayRefRegxp)) {
        _ref = getArrayRef(_ref, prop);
      } else if (typeof _ref !== 'undefined' && _ref.hasOwnProperty(prop)) {
        _ref = _ref[prop];
      } else {
        _ref = undefined;
      }
    });
    return _ref;
  }
};
