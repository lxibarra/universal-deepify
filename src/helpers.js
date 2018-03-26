

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

export const typeOfProp = (propName) => {
  // put regex here for now
  //figure out how to implement prop name
  // someObj.someProp[2] = 21 or someObj.someProp = [321]
  // see propertyTypes module 

};

export const setProperty = (ref, propertyName, value) => {
  if (typeof propertyName === 'string' && propertyName.length > 0) {
    const nestedProps = propertyName.split('.');
    for (let c = 0, top = nestedProps.lenght; c < top; c++) {
      let prop = nestedProps[c];

    }
  } else {
    throw 'propertyName must be a string and lenght > 0';
  }
};
