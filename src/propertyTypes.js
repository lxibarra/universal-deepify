export const isEmptyArray = /\[\]$/;
export const isArray = /\[(\d+)?]$/;
export const isIndexNumber = /^d+$/;


export const propType = (propertyName) => {
  if(propertyName.match(isEmptyArray)) {
    return [];
  }
  if (propertyName.match(isArray)) {
    return []
  } 
};
