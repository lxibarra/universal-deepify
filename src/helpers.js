

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

const writeProp = (ref, propName, value) => {


};

export const setProperty = (ref, propertyName, value) => {
  if (typeof propertyName === 'string' && propertyName.length > 0) {
    const nestedProps = propertyName.split('.');
    const top = nestedProps.length;
    let _ref = ref;
    const emptyArrayRegxp = /\[\]$/;
    const indexArrayRegxp = /\[\d+\]$/;
    const numberRegex = /^\d+$/;
    nestedProps.forEach((prop, index) => {
        if((index+1) === top) {
          if (prop.match(emptyArrayRegxp)) {
            const propName = prop.replace(emptyArrayRegxp, '');
            _ref[propName] = [];
            _ref[propName].push(value);
            _ref = _ref[propName];
          } else if(prop.match(indexArrayRegxp)) {
            const propIndex = parseInt([...prop.match(indexArrayRegxp)][0].replace(/[\[\]]/gi, ''), 10);
            const cleanPropName = prop.replace(indexArrayRegxp, '');
             if(_ref[cleanPropName] instanceof Array) {
               if(propIndex > _ref[cleanPropName].lenght) {
                 _ref[cleanPropName].push(value);
               } else {
                 _ref[cleanPropName].splice(propIndex, 0, value);
               }
             } else {
               _ref[cleanPropName] = [value];
             }
          } else { // simple prop name
            _ref[prop] = value;
          }

        } else {
          // have to check prop type here too.
          _ref[prop] = {};
          _ref = _ref[prop];
        }
    });

  } else {
    throw 'propertyName must be a string and lenght > 0';
  }
};
