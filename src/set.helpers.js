import { emptyArrayRegxp, indexArrayRegxp, numberRegex, arrayBrackets } from './regex.expressions';
import { getIndexFromPropName } from './helpers';

export const isMutable = (mutate, ref) => {
  if (typeof mutate === 'boolean') {
    return mutate;
  } else if(ref && typeof ref.mutate === 'boolean') {
    return ref.mutate;
  }
  return false;
};

export const deepCopy = (objRef) =>
  objRef !== null &&
  typeof objRef !== 'undefined' &&
  typeof objRef === 'object' ? JSON.parse(JSON.stringify(objRef)) : null;

const setEmptyArray = (ref, propertyName, value) => {
  let _ref = Object.assign(ref);
  const propName = propertyName.replace(emptyArrayRegxp, '');
  _ref[propName] = [];
  if(typeof value !== 'undefined') {
    _ref[propName].push(value);
  }
  _ref = _ref[propName];
  return _ref;
};

const setEmptyArrayReference = (ref, propertyName) => {
  // this method is not returnign the right reference
  let _ref = Object.assign(ref);
  const propName = propertyName.replace(emptyArrayRegxp, '');
  _ref[propName] = [];
  _ref = _ref[propName];
  return _ref;
};


const setArrayAtPosition = (ref, propertyName, value) => {
  let _ref = Object.assign(ref);
  const propIndex = getIndexFromPropName(propertyName);
  const cleanPropName = propertyName.replace(indexArrayRegxp, '');
   if(_ref[cleanPropName] instanceof Array) {
     if(propIndex > _ref[cleanPropName].lenght) {
       _ref[cleanPropName].push(value);
     } else {
       _ref[cleanPropName].splice(propIndex, 0, value);
     }
   } else {
     _ref[cleanPropName] = [value];
   }
   return _ref;
};

const setArrayReferenceAtPosition = (ref, propertyName) => {
  let _ref = Object.assign(ref);
  const propIndex = getIndexFromPropName(propertyName);
  const cleanPropName = propertyName.replace(indexArrayRegxp, '');
  const newRef = {};
  if(_ref[cleanPropName] instanceof Array) {
    if(propIndex > _ref[cleanPropName].lenght) {
      _ref[cleanPropName].push(newRef);
      return newRef;
    } else {
      /*_ref[cleanPropName].splice(propIndex, 0, newRef);
      return newRef;*/
      const currentRef = _ref[cleanPropName][propIndex];
      if(typeof currentRef !== 'undefined') {
        return currentRef;
      } else {
        ref[cleanPropName].splice(propIndex, 0, newRef);
        return newRef;
      }
    }
  } else {
    _ref[cleanPropName] = [newRef];
    return newRef;
  }
  return newRef;
};

export const setProperty = (ref, propertyName, value) => {
  if (typeof propertyName === 'string' && propertyName.length > 0) {
    const nestedProps = propertyName.split('.');
    const top = nestedProps.length;
    let _ref = ref;

    nestedProps.forEach((prop, index) => {
        if((index+1) === top) {
          if (prop.match(emptyArrayRegxp)) {
            _ref = setEmptyArray(_ref, prop, value);
          } else if(prop.match(indexArrayRegxp)) {
            _ref = setArrayAtPosition(_ref, prop, value);
          } else {
            if (_ref instanceof Array) {
              const element = {
                [prop]: value
              };
              _ref.push(element);
            } else {
              _ref[prop] = value;
            }
          }
        } else {
          if(_ref && _ref.hasOwnProperty(prop)) {
            _ref = _ref[prop];
          } else {
            if (prop.match(emptyArrayRegxp)) {
              _ref = setEmptyArrayReference(_ref, prop);
            } else if(prop.match(indexArrayRegxp)) {
               _ref = setArrayReferenceAtPosition(_ref, prop);
            } else {
              if(_ref instanceof Array) {
                const element = {
                  [prop]:{}
                };
                _ref.push(element);
                _ref = element[prop];
              } else {
                _ref[prop] = {};
                _ref = _ref[prop];
              }
            }
          }
        }
    });

  } else {
    throw 'propertyName must be a string and lenght > 0';
  }
};
