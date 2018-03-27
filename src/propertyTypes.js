// currently not in use

export const isEmptyArray = /\[\]$/;
export const isArray = /\[(\d+)?]$/;
export const isIndexNumber = /^d+$/;


export const assignProperty = (ref, propertyName, value) => {
  let prop = propertyName;
  if (propertyName.match(isEmptyArray)) {
    prop = propertyName.replace(isEmptyArray, '');
    ref[prop] = [value];
    return ref[prop];
  }

  //simple prop
  ref[prop] = value;
};
