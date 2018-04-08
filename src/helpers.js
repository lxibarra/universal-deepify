const emptyArrayRegxp = /\[\]$/;
const indexArrayRegxp = /\[\d+\]$/;
const numberRegex = /^\d+$/;

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
  _ref[propName].push(value);
  _ref = _ref[propName];
  return _ref;
};

const setArrayAtPosition = (ref, propertyName, value) => {
  let _ref = Object.assign(ref);
  const propIndex = parseInt([...propertyName.match(indexArrayRegxp)][0].replace(/[\[\]]/gi, ''), 10);
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
          } else { // simple prop name
            _ref[prop] = value;
          }

        } else {
          // have to check prop type here too.
          // dont directly assign need to check if value is already there
          // or if object is not null.
          _ref[prop] = {};
          _ref = _ref[prop];
        }
    });

  } else {
    throw 'propertyName must be a string and lenght > 0';
  }
};
